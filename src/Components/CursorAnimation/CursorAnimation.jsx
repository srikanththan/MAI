import React, { useEffect, useState } from "react";

const DonutCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      className="donut-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default DonutCursor;
