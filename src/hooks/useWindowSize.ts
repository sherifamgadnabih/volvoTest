import { useState, useEffect } from "react";

export default function useWindowSize(): "Desktop" | "Tablet" | "Mobile" {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  if (windowSize.width > 1008) {
    return "Desktop";
  } else if (windowSize.width > 640) {
    return "Tablet";
  } else {
    return "Mobile";
  }
}
