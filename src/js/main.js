import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class App {
  constructor() {
    this._navAnime();
    this._heroAnime();
    this._projectsAnime();
    this._skillsAnime();
    this._aboutAnime();
    this._contactAnime();
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
      y: "100%",
      opacity: 0,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });
  }
}

const myApp = new App();
