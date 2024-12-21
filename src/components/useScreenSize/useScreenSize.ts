import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [sreenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return sreenWidth;
};

export default useScreenSize;
