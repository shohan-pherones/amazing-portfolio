import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

class App {
  constructor() {
    this._splashScreen();
    this._smoothScrolling();
    this._customCursor();
    this._socialsAnime();
    this._navAnime();
    this._heroAnime();
    this._projectsAnime();
    this._skillsAnime();
    this._aboutAnime();
    this._contactAnime();
    this._footerAnime();
    this._copyrightYear();
  }

  _splashScreen() {
    let intro = document.querySelector(".intro");
    let logoSpan = document.querySelectorAll(".intro--logo");

    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        logoSpan.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add("active");
          }, (index + 1) * 400);
        });

        setTimeout(() => {
          logoSpan.forEach((span, index) => {
            setTimeout(() => {
              span.classList.remove("active");
              span.classList.add("fade");
            }, (index + 1) * 50);
          });
        }, 2000);

        setTimeout(() => {
          intro.style.top = "-100vh";
        }, 2300);
      });
    });
  }

  _smoothScrolling() {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  _customCursor() {
    let innerCursor = document.querySelector(".inner--cursor");
    let outerCursor = document.querySelector(".outer--cursor");
    let links = document.querySelectorAll("a");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;
      outerCursor.style.left = `${x}px`;
      outerCursor.style.top = `${y}px`;
    }

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
      });

      link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
      });
    });
  }

  _socialsAnime() {
    gsap.from(".socials", {
      x: "100%",
      opacity: 0,
      duration: 1,
      delay: 5,
      ease: "sine",
    });

    gsap.from(".social--one", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 6,
      ease: "elastic",
    });

    gsap.from(".social--two", {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      delay: 6,
      ease: "elastic",
    });

    gsap.from(".social--three", {
      scale: 0,
      opacity: 0,
      duration: 2,
      delay: 6,
      ease: "elastic",
    });

    gsap.from(".social--four", {
      scale: 0,
      opacity: 0,
      duration: 2.5,
      delay: 6,
      ease: "elastic",
    });
  }

  _navAnime() {
    gsap.from(".navbar", {
      y: "-100%",
      opacity: 0,
      duration: 1,
      delay: 3,
      ease: "sine",
    });

    gsap.from(".logo", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      delay: 4,
    });

    gsap.from(".github--link", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      delay: 4,
    });
  }

  _heroAnime() {
    gsap.from(".hero--img", {
      scale: 10,
      opacity: 0,
      duration: 2,
      ease: "sine",
      delay: 4,
    });

    gsap.from(".hero--heading", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      delay: 5,
    });

    gsap.from(".hero--bio", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      delay: 5,
    });

    gsap.from(".hero--link", {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "sine",
      delay: 6,
    });
  }

  _projectsAnime() {
    gsap.from(".title--one", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".title--one",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card--one", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".card--one",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card--two", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".card--two",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card--three", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".card--three",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card--four", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".card--four",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card--five", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".card--five",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card--six", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".card--six",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card--seven", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".card--seven",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".card--eight", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".card--eight",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  _skillsAnime() {
    gsap.from(".title--two", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".title--two",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--one", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--two", {
      scale: 0,
      opacity: 0,
      duration: 1.25,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--three", {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--four", {
      scale: 0,
      opacity: 0,
      duration: 1.75,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--five", {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--six", {
      scale: 0,
      opacity: 0,
      duration: 2.25,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--seven", {
      scale: 0,
      opacity: 0,
      duration: 2.5,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--eight", {
      scale: 0,
      opacity: 0,
      duration: 2.75,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--nine", {
      scale: 0,
      opacity: 0,
      duration: 3,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--ten", {
      scale: 0,
      opacity: 0,
      duration: 3.25,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".skill--eleven", {
      scale: 0,
      opacity: 0,
      duration: 3.5,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  _aboutAnime() {
    gsap.from(".title--three", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".title--three",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".about--l", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".about--l",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".about--r", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".about--r",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  _contactAnime() {
    gsap.from(".title--four", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".title--four",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".contact", {
      y: "200%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".nav--one", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".nav--two", {
      x: "-100%",
      opacity: 0,
      duration: 1.25,
      ease: "sine",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".nav--three", {
      x: "-100%",
      opacity: 0,
      duration: 1.5,
      ease: "sine",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".nav--four", {
      x: "-100%",
      opacity: 0,
      duration: 1.75,
      ease: "sine",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".nav--five", {
      x: "-100%",
      opacity: 0,
      duration: 2,
      ease: "sine",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  _footerAnime() {
    gsap.from(".footer--text", {
      y: "-200%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  _copyrightYear() {
    const yearWrapper = document.querySelector(".year");
    const year = new Date().getFullYear();
    yearWrapper.textContent = year;
  }
}

const myApp = new App();
