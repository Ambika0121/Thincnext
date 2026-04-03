// main.js

window.addEventListener("load", () => {
    const textTrack = document.querySelector("#smooth-marquee");

    if (textTrack) {
        // Initialize the GSAP animation
        const loop = gsap.to(textTrack, {
            xPercent: -50,   // Move left by exactly half the total width
            ease: "none",    // Constant speed (no slowing down)
            duration: 10,    // Time for one full cycle (increase for slower motion)
            repeat: -1       // Loop forever
        });

        // Pause when the user hovers over the text
        textTrack.addEventListener("mouseenter", () => loop.pause());
        
        // Resume when the mouse leaves
        textTrack.addEventListener("mouseleave", () => loop.play());
    }
});

