import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;
      if (scrollPosition >= bottomPosition - 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <div
        onClick={handleScrollToTop}
        className="scroll-to-top-button"
        style={styles.buttonContainer}
      >
        <button style={styles.button}>↑</button>
      </div>
    )
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  buttonContainer: {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    transition: "right 0.3s ease-in-out",
    zIndex: 1000,
  },
  button: {
    backgroundColor: "#F0FDF4",
    color: "#263C28",
    border: "none",
    padding: "7px 15px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "30px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
};

export default ScrollToTopButton;
