import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //auto
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  });

  return (
    <>
      <button
        type="button"
        className="bg-primary font-medium rounded-full text-sm p-4 text-center mr-2 mb-2"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FiArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}

export default ScrollToTopButton;
