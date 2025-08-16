import React, { useEffect, useState } from "react";

const MobileBlocker = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkScreen(); // first check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <p className="text-white text-xl font-bold text-center px-6">
        🚫 This site contains high graphics and is not optimized for mobile.
        <br />
        Please open on a Desktop/Laptop 💻
      </p>
    </div>
  );
};

export default MobileBlocker;
