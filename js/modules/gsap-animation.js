export function GsapAnimation() {
    gsap.registerPlugin(ScrollTrigger); 
    
    gsap.from("#logo", {
  opacity: 0,
  y: -40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#logo",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.from("#ham-burger", {
  opacity: 0,
  y: -40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#logo",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.from(".burger-con", {
  opacity: 0,
  y: -40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".burger-con",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});

gsap.from(".footer-txt", {
  opacity: 0,
  y: 20,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer",
    toggleActions: "restart pause reverse pause",
    start: "top 88%",
    end: "bottom top"
  }
});

gsap.from("#overview, #overview h3, #overview h4, #overview p", {
  opacity: 0,
  y: 20,
  duration: 2,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#overview",
    toggleActions: "play none none none",
    start: "top 90%",
    end: "bottom top"
  }
});
gsap.from("#usage, #usage h3, #usage h4, #usage p", {
  opacity: 0,
  y: 20,
  duration: 2,
  delay: 1.4,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#usage",
    toggleActions: "play none none none",
    start: "top 90%",
    end: "bottom top"
  }
});

gsap.from("#examples , #examples h2", {
  opacity: 0,
  y: 20,
  duration: 2,
  delay: 0.5,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#examples",
    toggleActions: "play none none none",
    start: "top 90%",
    end: "bottom top"
  }
});


}