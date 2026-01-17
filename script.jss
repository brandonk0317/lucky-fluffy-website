// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    
    // Simple validation
    if(name && email) {
        // In a real application, you would send this data to a server
        alert(`Thank you ${name}! We've received your inquiry about ${service || 'our services'}. The Lucky & Fluffy team will contact you at ${email} within 24 hours.`);
        contactForm.reset();
    } else {
        alert('Please fill in at least your name and email address.');
    }
});

// Add a simple testimonial slider functionality
const testimonials = [
    {
        content: "Lucky & Fluffy exceeded all my expectations! My golden retriever had the best week of his life while we were away. They sent daily photos and updates, and Max came home happy and relaxed. Couldn't ask for better care!",
        author: "Sarah Johnson",
        role: "Max's Mom (Golden Retriever)",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        content: "Our cat Luna is usually very shy, but she warmed up to the Lucky & Fluffy staff immediately. The grooming service is exceptional - she came back looking beautiful and smelling wonderful. We're regular customers now!",
        author: "Michael Chen",
        role: "Luna's Dad (Persian Cat)",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        content: "The daycare service at Lucky & Fluffy is a lifesaver! My energetic labrador gets to socialize and burn off energy while I'm at work. The staff truly cares about each pet's individual needs and personality.",
        author: "Jessica Williams",
        role: "Buddy's Mom (Labrador)",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

let currentTestimonial = 0;
const testimonialSlide = document.querySelector('.testimonial-slide');

function rotateTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    const testimonial = testimonials[currentTestimonial];
    
    testimonialSlide.innerHTML = `
        <div class="testimonial-content">
            "${testimonial.content}"
        </div>
        <div class="testimonial-author">
            <div class="author-avatar">
                <img src="${testimonial.avatar}" alt="${testimonial.author}">
            </div>
            <div class="author-info">
                <h4>${testimonial.author}</h4>
                <p>${testimonial.role}</p>
            </div>
        </div>
    `;
}

// Rotate testimonials every 8 seconds
setInterval(rotateTestimonial, 8000);

// Add scroll animation for sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;
    
    sections.forEach(section => {
        if(scrollPosition > section.offsetTop + 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with fade-in effect
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Trigger initial fade-in for sections in view
window.dispatchEvent(new Event('scroll'));
