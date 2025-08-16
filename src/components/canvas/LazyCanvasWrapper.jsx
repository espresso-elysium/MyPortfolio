import { useEffect, useRef, useState } from "react";

const LazyCanvasWrapper = ({ children, height = "100vh" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ek bar load hone ke baad dobara observe na kare
        }
      },
      { threshold: 0.2 } // 20% section visible hone par load karega
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: height, width: "100%" }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyCanvasWrapper;
