import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class App {
  constructor() {
    this._navAnime();
    this._heroAnime();
    this._projectsAnime();
  }

  _navAnime() {
    gsap.from(".navbar", {
      y: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
    });

    gsap.from(".logo", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      delay: 1,
    });

    gsap.from(".github--link", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      delay: 1,
    });
  }

  _heroAnime() {
    gsap.from(".hero--img", {
      scale: 10,
      opacity: 0,
      duration: 2,
      ease: "sine",
      delay: 1,
    });

    gsap.from(".hero--heading", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      delay: 2,
    });

    gsap.from(".hero--bio", {
      x: "100%",
      opacity: 0,
      duration: 1,
      ease: "sine",
      delay: 2,
    });

    gsap.from(".hero--link", {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "sine",
      delay: 3,
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
  }
}

const myApp = new App();
