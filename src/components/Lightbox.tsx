import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// Custom event payload for opening the lightbox with single or multiple images
// ─────────────────────────────────────────────────────────────────────────────
interface LightboxOpenPayload {
  images: string[];
  startIndex?: number;
  title?: string;
}

export function Lightbox() {
  const [isOpen, setIsOpen]               = useState(false);
  const [isVisible, setIsVisible]         = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex]   = useState(0);
  const [galleryTitle, setGalleryTitle]   = useState<string | undefined>(undefined);

  // Zoom & Pan
  const [zoom, setZoom]             = useState(1);
  const [pan, setPan]               = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Refs
  const containerRef  = useRef<HTMLDivElement>(null);
  const imageRef      = useRef<HTMLImageElement>(null);
  const lastPointer   = useRef({ x: 0, y: 0 });

  // Touch gesture refs
  const touchStart     = useRef({ x: 0, y: 0, time: 0 });
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartZoom = useRef(1);

  // ── Helpers ──────────────────────────────────────────────────────────────

  const resetTransform = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
      setGalleryImages([]);
      setCurrentIndex(0);
      setGalleryTitle(undefined);
      document.body.style.overflow = "";
    }, 320);
    resetTransform();
  }, [resetTransform]);

  const openLightbox = useCallback((payload: LightboxOpenPayload) => {
    if (!payload.images || payload.images.length === 0) return;
    setGalleryImages(payload.images);
    setCurrentIndex(payload.startIndex || 0);
    setGalleryTitle(payload.title);
    resetTransform();
    setIsVisible(true);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => setIsOpen(true));
  }, [resetTransform]);

  const nextImage = useCallback(() => {
    if (galleryImages.length <= 1) return;
    setCurrentIndex(prev => (prev + 1) % galleryImages.length);
    resetTransform();
  }, [galleryImages.length, resetTransform]);

  const prevImage = useCallback(() => {
    if (galleryImages.length <= 1) return;
    setCurrentIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
    resetTransform();
  }, [galleryImages.length, resetTransform]);

  const goToImage = useCallback((index: number) => {
    if (index >= 0 && index < galleryImages.length) {
      setCurrentIndex(index);
      resetTransform();
    }
  }, [galleryImages.length, resetTransform]);

  // ── Global click interceptor ──────────────────────────────────────────────

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (isOpen) return;

      const path = e.composedPath() as HTMLElement[];
      let clickedSrcs: string[] = [];
      let itemTitle: string | undefined = undefined;

      for (const el of path) {
        if (!el.tagName) continue;
        if (el.hasAttribute?.("data-zoomable") || el.classList?.contains("zoomable-image")) {
          // Check multi-photo gallery attribute
          if (el.hasAttribute("data-gallery-srcs")) {
            const attr = el.getAttribute("data-gallery-srcs");
            if (attr) {
              clickedSrcs = attr.split("|").map(s => s.trim()).filter(Boolean);
            }
          }
          if (el.hasAttribute("data-gallery-title")) {
            itemTitle = el.getAttribute("data-gallery-title") || undefined;
          }
          // Fallback to single photo attribute
          if (clickedSrcs.length === 0 && el.hasAttribute("data-zoom-src")) {
            const single = el.getAttribute("data-zoom-src");
            if (single) clickedSrcs = [single];
          }
          if (clickedSrcs.length === 0 && el.tagName === "IMG") {
            clickedSrcs = [(el as HTMLImageElement).src];
          }
          if (clickedSrcs.length === 0) {
            const style = window.getComputedStyle(el);
            if (style.backgroundImage?.includes("url(")) {
              const match = style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
              if (match?.[1]) { clickedSrcs = [match[1]]; }
            }
          }
          if (clickedSrcs.length > 0) break;
        }
      }

      if (clickedSrcs.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        openLightbox({ images: clickedSrcs, startIndex: 0, title: itemTitle });
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [isOpen, openLightbox]);

  // ── Keyboard ──────────────────────────────────────────────────────────────

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape")               closeLightbox();
      if (e.key === "ArrowRight")           nextImage();
      if (e.key === "ArrowLeft")            prevImage();
      if (e.key === "+" || e.key === "=")  setZoom(z => Math.min(z + 0.5, 4));
      if (e.key === "-")                    setZoom(z => Math.max(z - 0.5, 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  // ── Mouse wheel zoom ──────────────────────────────────────────────────────

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isOpen) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setZoom(prev => Math.min(Math.max(prev - e.deltaY * 0.005, 1), 4));
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  // ── Mouse drag (pan when zoomed) ──────────────────────────────────────────

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    setIsDragging(true);
    lastPointer.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || e.pointerType === "touch") return;
    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;
    if (zoom > 1) setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPointer.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleDoubleClick = () => {
    if (zoom > 1) resetTransform();
    else setZoom(2.5);
  };

  // ── Touch gestures: swipe + pinch-zoom ────────────────────────────────────

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, time: Date.now() };
      pinchStartDist.current = null;
    } else if (e.touches.length === 2) {
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      pinchStartDist.current = Math.hypot(dx, dy);
      pinchStartZoom.current = zoom;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2 && pinchStartDist.current !== null) {
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      const dist = Math.hypot(dx, dy);
      const scale = dist / pinchStartDist.current;
      setZoom(Math.min(Math.max(pinchStartZoom.current * scale, 1), 4));
    } else if (e.touches.length === 1 && zoom > 1) {
      const dx = e.touches[0].clientX - touchStart.current.x;
      const dy = e.touches[0].clientY - touchStart.current.y;
      setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      touchStart.current = { ...touchStart.current, x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (zoom === 1 && e.changedTouches.length === 1) {
      const deltaX = e.changedTouches[0].clientX - touchStart.current.x;
      const deltaTime = Date.now() - touchStart.current.time;
      if (Math.abs(deltaX) > 40 && deltaTime < 350) {
        if (deltaX < 0) nextImage();
        else prevImage();
      }
    }
    pinchStartDist.current = null;
  };

  if (!isVisible) return null;
  const currentSrc = galleryImages[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center select-none"
      style={{
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        opacity: isOpen ? 1 : 0,
        transition: "opacity 320ms cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: isOpen ? "auto" : "none",
      }}
      onClick={closeLightbox}
    >
      {/* ── Top Header Bar (Title & Counter) ── */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-[110] flex items-center gap-3 bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 text-white">
        {galleryTitle && (
          <span className="font-bold text-xs sm:text-sm text-gold tracking-wide border-r border-white/20 pr-3">
            {galleryTitle}
          </span>
        )}
        <span className="text-xs font-semibold text-white/80">
          {currentIndex + 1} / {galleryImages.length}
        </span>
      </div>

      {/* ── Close button ── */}
      <button
        onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
        className={cn(
          "absolute right-4 top-4 sm:right-6 sm:top-6 z-[110]",
          "flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full",
          "bg-black/60 text-white backdrop-blur-md",
          "border border-white/15 transition-all duration-300",
          "hover:scale-110 hover:bg-black/90 hover:border-gold/50 hover:text-gold"
        )}
        aria-label="Close fullscreen"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* ── Next / Previous Navigation Buttons (When multi-image) ── */}
      {galleryImages.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className={cn(
              "absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-[110]",
              "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full",
              "bg-black/60 text-white backdrop-blur-md border border-white/15",
              "transition-all duration-300 hover:scale-110 hover:bg-black/90 hover:border-gold/50 hover:text-gold"
            )}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className={cn(
              "absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[110]",
              "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full",
              "bg-black/60 text-white backdrop-blur-md border border-white/15",
              "transition-all duration-300 hover:scale-110 hover:bg-black/90 hover:border-gold/50 hover:text-gold"
            )}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </>
      )}

      {/* ── Main Image Container ── */}
      <div
        ref={containerRef}
        className="relative flex h-full w-full items-center justify-center overflow-hidden outline-none"
        style={{ touchAction: "none" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {currentSrc && (
          <img
            key={currentSrc}
            ref={imageRef}
            src={currentSrc}
            alt={galleryTitle ? `${galleryTitle} - Photo ${currentIndex + 1}` : "Fullscreen photo gallery view"}
            className={cn(
              "max-h-[82vh] max-w-[88vw] rounded-2xl object-contain shadow-2xl",
              isDragging ? "transition-none" : "transition-transform duration-300 ease-out"
            )}
            style={{
              transform: `scale(${isOpen ? zoom : 0.90}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              opacity: isOpen ? 1 : 0,
              transition: isDragging ? "none" : "transform 300ms ease-out, opacity 320ms ease",
              cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
            }}
            draggable={false}
          />
        )}
      </div>

      {/* ── Bottom Gallery Navigation & Zoom Controls ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] flex flex-col items-center gap-3">
        
        {/* Gallery Dots (If 2+ images) */}
        {galleryImages.length > 1 && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); goToImage(idx); }}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  idx === currentIndex ? "w-7 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)]" : "w-2.5 bg-white/40 hover:bg-white/70"
                )}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Zoom controls */}
        <div className="hidden sm:flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          <button
            onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(z - 0.5, 1)); }}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="text-white/50 text-xs w-10 text-center">{Math.round(zoom * 100)}%</span>
          <button
            onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(z + 0.5, 4)); }}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          {zoom > 1 && (
            <>
              <span className="text-white/20 mx-1">|</span>
              <button
                onClick={(e) => { e.stopPropagation(); resetTransform(); }}
                className="text-white/70 hover:text-white transition-colors text-xs font-semibold"
                aria-label="Reset zoom"
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
