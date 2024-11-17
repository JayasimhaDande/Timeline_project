// Trigger animation when timeline items come into view
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline li");
  
    const isInViewport = (elem) => {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };
  
    const addScrollAnimation = () => {
      timelineItems.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add("in-view");
        }
      });
    };
  
    window.addEventListener("scroll", addScrollAnimation);
  
    // Scroll-to-top button functionality
    const scrollToTopButton = document.querySelector(".scroll-to-top");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  