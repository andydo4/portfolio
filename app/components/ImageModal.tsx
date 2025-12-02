"use client";

import { useState, useEffect, ReactNode, useRef } from "react";

interface ImageModalProps {
  children: ReactNode;
}

export default function ImageModal({ children }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const images = containerRef.current.querySelectorAll("img");
    const imageHandlers: Array<{ img: Element; handler: () => void }> = [];

    images.forEach((img) => {
      const imgElement = img as HTMLImageElement;
      // Exclude small images like icons
      if (imgElement.width < 50 || imgElement.classList.contains("person")) {
        return;
      }

      imgElement.style.cursor = "zoom-in";
      const handler = () => {
        setImageSrc(imgElement.src);
        setIsOpen(true);
      };
      imgElement.addEventListener("click", handler);
      imageHandlers.push({ img: imgElement, handler });
    });

    return () => {
      imageHandlers.forEach(({ img, handler }) => {
        img.removeEventListener("click", handler);
      });
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div ref={containerRef}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[1000] flex justify-center items-center cursor-pointer"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <span
            className="absolute top-5 right-9 text-white text-4xl font-bold transition-colors hover:text-gray-400 cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
          <img
            src={imageSrc}
            alt="Modal"
            className="max-w-[90%] max-h-[90%] block m-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

