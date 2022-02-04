import { useState, useEffect } from "react";

export function useActiveSlide(activeIndex, index) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(activeIndex?.index === index);
  }, [activeIndex, index]);

  return isActive;
}
