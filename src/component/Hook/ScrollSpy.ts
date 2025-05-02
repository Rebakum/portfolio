import { useEffect, useState } from "react";

export default function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handler = () => {
      const scrollPosition = window.scrollY + offset + 1;

      const visibleSections = ids.filter((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        return el.offsetTop <= scrollPosition;
      });

      const currentSection = visibleSections[visibleSections.length - 1];
      if (currentSection) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener("scroll", handler);
    handler(); // run on mount

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [ids, offset]);

  return activeId;
}
