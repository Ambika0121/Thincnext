
const thincnextServices = [
    {
        id: 'startups',
        title: 'Design for Startups',
        description: "We're all about creating long-term relationships. We host and maintain our own solutions & offer on-going analysis & ideas sessions plus design retainers you'd expect to see.",
        // bgImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'web',
        title: 'Web Technology',
        description: "We develop scalable websites & applications that work. Whether it is powerful content management, e-commerce or a killer app, we have the skills to turn ideas into reality.",
        // bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'apps',
        title: 'Apps Development',
        description: "Our discovery processes are designed to get under the hood of your brand & empathise with your audience. We'll put a winning strategy in place to achieve your objectives.",
        // bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'cyber',
        title: 'Cyber Security',
        description: "The digital world has various types of insecurities with the software we use in our daily life. Security is always important to secure data which is linked to our applications.",
        // bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'marketing',
        title: 'Digital Marketing',
        description: "Social media marketing has become one of the greatest sources to brand or market any company. We offer high-quality SEO, PPC campaigns, and holistic branding strategies.",
        // bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
    }
];

const buttonsContainer = document.getElementById('buttons-container');
const serviceTitle = document.getElementById('service-title');
const serviceDesc = document.getElementById('service-desc');
const serviceBg = document.getElementById('service-bg');


function initializeServiceExplorer() {
    thincnextServices.forEach((service, index) => {
        // Create button element
        const btn = document.createElement('button');
        
    
        btn.className = `text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 border-2 
                         ${index === 0 ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-blue-600 border-blue-200 hover:border-blue-600 hover:bg-blue-50'}`;
        btn.textContent = service.title;
        
        // Setup click listener
        btn.addEventListener('click', () => {
            updateActiveButton(btn);
            updateServiceContent(service);
        });

        buttonsContainer.appendChild(btn);
    });

    // Automatically load the first service into the display area
    updateServiceContent(thincnextServices[0]);
}

function updateActiveButton(clickedBtn) {
    const allButtons = buttonsContainer.querySelectorAll('button');
    allButtons.forEach(btn => {
        btn.className = 'text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 border-2 bg-white text-blue-600 border-blue-200 hover:border-blue-600 hover:bg-blue-50';
    });
    clickedBtn.className = 'text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 border-2 bg-blue-600 text-white border-blue-600 shadow-md';
}

// Function to update the right-side panel with smooth animations
function updateServiceContent(service) {
    // 1. Trigger fade-out
    serviceTitle.classList.add('fade-out');
    serviceDesc.classList.add('fade-out');
    serviceBg.style.opacity = '0';

    // 2. Wait for fade-out, swap content, then trigger fade-in
    setTimeout(() => {
        serviceTitle.textContent = service.title;
        serviceDesc.textContent = service.description;
        serviceBg.style.backgroundImage = `url('${service.bgImage}')`;

        serviceTitle.classList.remove('fade-out');
        serviceTitle.classList.add('fade-in');
        
        serviceDesc.classList.remove('fade-out');
        serviceDesc.classList.add('fade-in');
        
        // Set opacity to 0.4 so the background image is visible but the blue overlay dominates
        serviceBg.style.opacity = '0.4'; 
    }, 200); 
}

// Run the setup when the document is ready
document.addEventListener('DOMContentLoaded', initializeServiceExplorer);



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

