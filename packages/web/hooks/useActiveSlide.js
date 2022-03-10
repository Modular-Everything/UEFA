import { useState, useEffect } from "react";

export function useActiveSlide(activeIndex, index) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(activeIndex === index);
    }, [250]);
  }, [activeIndex, index]);

  return isActive;
}
