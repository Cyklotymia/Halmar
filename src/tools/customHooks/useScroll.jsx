import { useEffect, useState, useRef } from "react";

const useScroll = () => {
  const [isScrolled, setScroll] = useState(false);

  const ref = useRef(null);

  const handleScrollInto = () => {


    if (
      window.scrollY >=
      ref.current.offsetTop -
        ref.current.offsetHeight -
        ref.current.clientHeight
    ) {
      setScroll(true);

      
    }
  };

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", () => {
        handleScrollInto();
      });

      return () => {
        if (ref.current) {
          ref.current.removeEventListener("scroll", handleScrollInto);
        }
      };
    }
  }, [ref.current]);

  return [ref, isScrolled];
};

export default useScroll;
