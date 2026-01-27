// ============================================
// CONFIGURATION - Add your YouTube link here
// ============================================
const YOUTUBE_CHANNEL_URL = "https://youtube.com/@learning-world555?si=7G-GfdU0kDirXpyV"; // Your YouTube channel

// ============================================
// DARK MODE TOGGLE
// ============================================
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// ============================================
// SUBSCRIBE BUTTONS - Open YouTube directly
// ============================================
const heroSubscribeBtn = document.querySelector(".hero .primary-btn");
const footerSubscribeBtn = document.querySelector(".subscribe .primary-btn");

heroSubscribeBtn.onclick = () => {
    window.open(YOUTUBE_CHANNEL_URL, "_blank");
};

footerSubscribeBtn.onclick = () => {
    window.open(YOUTUBE_CHANNEL_URL, "_blank");
};

// ============================================
// FLIP CARD ANIMATION (FASTER - 0.4s)
// ============================================
document.querySelectorAll(".flip-card").forEach(card => {
    const inner = card.querySelector(".flip-inner");
    let flipped = false;

    card.addEventListener("mouseenter", () => {
        if (!flipped) {
            gsap.to(inner, {
                rotateY: 180,
                duration: 0.4,
                ease: "power2.inOut"
            });
            flipped = true;
        }
    });

    card.addEventListener("mouseleave", () => {
        if (flipped) {
            gsap.to(inner, {
                rotateY: 0,
                duration: 0.4,
                ease: "power2.inOut"
            });
            flipped = false;
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
gsap.registerPlugin(ScrollTrigger);

// Fade in sections on scroll
document.querySelectorAll(".fade-in").forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleClass: "fade-in-visible",
            once: true
        }
    });
});

// HERO SECTION ANIMATIONS
gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: "power3.out" });
gsap.from(".hero .primary-btn", { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" });

// STATS COUNTER ANIMATION
const stats = document.querySelectorAll(".stat");
stats.forEach((stat, i) => {
    gsap.from(stat, {
        scrollTrigger: { trigger: stat, start: "top 90%" },
        scale: 0,
        rotation: -180,
        duration: 0.6,
        delay: i * 0.1,
        ease: "back.out(1.7)"
    });
});

// COURSE CARDS STAGGER ANIMATION
gsap.from(".card", {
    scrollTrigger: { trigger: ".card-grid", start: "top 80%" },
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out"
});

// FLIP CARDS STAGGER ANIMATION
gsap.from(".flip-card", {
    scrollTrigger: { trigger: ".flip-grid", start: "top 80%" },
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out"
});

// INSTRUCTOR AVATAR ANIMATION
gsap.from(".instructor-avatar", {
    scrollTrigger: { trigger: ".instructor", start: "top 80%" },
    scale: 0,
    rotation: 360,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
});