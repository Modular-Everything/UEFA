import { useState, useEffect } from "react";

export function useActiveSlide(activeIndex, index) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(activeIndex === index);
  }, [activeIndex, index]);

  return isActive;
}
