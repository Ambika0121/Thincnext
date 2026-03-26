// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'Cyber Security',
        description: "The digital world has various types of insecurities. Security is paramount to protect the data linked to our daily applications and infrastructure.",
        bgImage: '/img/cybersec.jpg'
    },
    {
        title: 'Web Technology',
        description: "We develop scalable websites & applications that work. Whether it is powerful content management, e-commerce or a killer app.",
        bgImage: '/img/webdev.jpg'
    },
    {
        title: 'Design for Startups',
        description: "We host and maintain our own solutions & offer on-going analysis & ideas sessions plus design retainers to accelerate your growth.",
        bgImage: '/img/startup.jpg'
    },
    {
        title: 'Apps Development',
        description: "Our discovery processes are designed to get under the hood of your brand & empathise with your audience to build winning mobile solutions.",
        bgImage: '/img/appdev.jpg'
    },
    {
        title: 'Digital Marketing',
        description: "Social media marketing has become the greatest source to brand. We offer high-quality SEO, PPC campaigns, and holistic branding strategies.",
        bgImage: '/img/dm.jpg'
    }
];

const buttonsContainer = document.getElementById('buttons-container');
const activeIndicator = document.getElementById('active-indicator');
const serviceTitle = document.getElementById('service-title');
const serviceDesc = document.getElementById('service-desc');
const serviceBg = document.getElementById('service-bg');

let activeIndex = 0;

function initServices() {
    services.forEach((service, index) => {
        const btn = document.createElement('button');
        // Modern minimalist button styling
        btn.className = `text-left px-6 py-4 rounded-xl transition-all duration-300 font-medium text-lg relative
                         ${index === 0 ? 'text-brand-base bg-brand-light/10 font-semibold' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`;
        btn.textContent = service.title;
        
        btn.addEventListener('click', () => {
            if (activeIndex === index) return; // Don't animate if already active
            activeIndex = index;
            updateUI(btn, service);
        });

        buttonsContainer.appendChild(btn);
    });

    // Set initial background immediately
    serviceBg.style.backgroundImage = `url('${services[0].bgImage}')`;
    serviceTitle.textContent = services[0].title;
    serviceDesc.textContent = services[0].description;
    
    // Position the indicator initially
    setTimeout(() => {
        const firstBtn = buttonsContainer.children[0];
        gsap.set(activeIndicator, { y: firstBtn.offsetTop, height: firstBtn.offsetHeight });
    }, 100);

    initCounters();
}

function updateUI(clickedBtn, service) {
    // 1. Move the indicator line smoothly using GSAP
    gsap.to(activeIndicator, {
        y: clickedBtn.offsetTop,
        height: clickedBtn.offsetHeight,
        duration: 0.5,
        ease: "power3.out"
    });

    // 2. Update Button Styles
    Array.from(buttonsContainer.children).forEach(btn => {
        btn.className = 'text-left px-6 py-4 rounded-xl transition-all duration-300 font-medium text-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50';
    });
    clickedBtn.className = 'text-left px-6 py-4 rounded-xl transition-all duration-300 text-lg text-brand-base bg-brand-light/10 font-semibold';

    // 3. GSAP Animation for Content Swap
    const tl = gsap.timeline();

    // Fade out text and blur image
    tl.to([serviceTitle, serviceDesc], { opacity: 0, y: 15, duration: 0.3, stagger: 0.1 })
      .to(serviceBg, { opacity: 0.5, duration: 0.3 }, "<")
      .call(() => {
          // Swap data in the middle of animation
          serviceTitle.textContent = service.title;
          serviceDesc.textContent = service.description;
          serviceBg.style.backgroundImage = `url('${service.bgImage}')`;
      })
      // Fade text back in and unblur image
      .to(serviceBg, { opacity: 1, duration: 0.5 })
      .to([serviceTitle, serviceDesc], { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" }, "<");
}

function initCounters() {
    const counters = document.querySelectorAll('.counter-val');
    
    counters.forEach(counter => {
        let target = parseInt(counter.getAttribute('data-target'));
        
        // GSAP counter animation triggered on scroll
        gsap.to({ val: 0 }, {
            val: target,
            duration: 2.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".counter-box",
                start: "top 85%", // Starts when counters are 85% down the viewport
            },
            onUpdate: function() {
                // Update the DOM element with the rounded number
                counter.innerHTML = Math.floor(this.targets()[0].val);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initServices);



// GSAP

const tween1 = gsap.to(".track", {
  xPercent: -50,
  duration: 20,
  ease: "none",
  repeat: -1,
});

const track2 = document.querySelector(".track2");
gsap.set(track2, { xPercent: -50 });
const tween2 = gsap.to(track2, {
  xPercent: 0,
  duration: 20,
  ease: "none",
  repeat: -1,
});

function pauseMarquee(tween) {
  gsap.to(tween, { timeScale: 0, duration: 0.4, ease: "power2.out" });
}
function resumeMarquee(tween) {
  gsap.to(tween, { timeScale: 1, duration: 0.6, ease: "power2.inOut" });
}
document.querySelector(".marquee").addEventListener("mouseenter", () => pauseMarquee(tween1));
document.querySelector(".marquee").addEventListener("mouseleave", () => resumeMarquee(tween1));
document.querySelector(".marquee2").addEventListener("mouseenter", () => pauseMarquee(tween2));
document.querySelector(".marquee2").addEventListener("mouseleave", () => resumeMarquee(tween2));

