/**
 * Synchronizes a Swiper instance with the current active image.
 *
 * Whenever `activeImage` changes, the Swiper automatically
 * navigates to the corresponding slide.
 *
 * @param images List of images.
 * @param activeImage Currently selected image.
 * @returns onSwiper callback for the Swiper component.
 */

import { useCallback, useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";

interface SyncSwiperParams<T extends { id: number | string }> {
  images: T[];
  activeImage: T;
}

export function useSyncSwiper<T extends { id: number | string }>({
  images,
  activeImage,
}: SyncSwiperParams<T>) {
  const swiperRef = useRef<SwiperType | null>(null);

  const onSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  useEffect(() => {
    if (!swiperRef.current) return;

    const index = images.findIndex(
      (image) => image.id === activeImage.id
    );

    if (index !== -1) {
      swiperRef.current.slideToLoop(index);
    }
  }, [images, activeImage]);

  return {onSwiper};
}