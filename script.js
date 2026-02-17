/* ============================================
   NOVABUILD CONSTRUCTORA – JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ========== NAVBAR SCROLL ==========
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function handleNavScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Active nav link on scroll
    function updateActiveLink() {
        const scrollPos = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleNavScroll();
        updateActiveLink();
    }, { passive: true });

    // ========== MOBILE MENU ==========
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ========== PROJECTS SHOWCASE ==========
    const showcaseBgs = document.querySelectorAll('.showcase-bg');
    const showcaseSlides = document.querySelectorAll('.showcase-slide');
    const showcasePrev = document.getElementById('showcasePrev');
    const showcaseNext = document.getElementById('showcaseNext');
    const progressBar = document.getElementById('showcaseProgressBar');
    const counterCurrent = document.querySelector('.counter-current');
    const totalProjects = showcaseBgs.length;
    let showcaseIndex = 0;
    let showcaseAutoplay = null;

    function goToProject(index) {
        // Wrap around
        if (index < 0) index = totalProjects - 1;
        if (index >= totalProjects) index = 0;

        // Update backgrounds
        showcaseBgs.forEach((bg, i) => {
            bg.classList.toggle('active', i === index);
        });

        // Update text slides
        showcaseSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        // Update counter
        if (counterCurrent) {
            counterCurrent.textContent = String(index + 1).padStart(2, '0');
        }

        // Update progress bar
        if (progressBar) {
            const percent = ((index + 1) / totalProjects) * 100;
            progressBar.style.width = `${percent}%`;
        }

        showcaseIndex = index;
    }

    if (showcasePrev) {
        showcasePrev.addEventListener('click', () => {
            goToProject(showcaseIndex - 1);
            resetAutoplay();
        });
    }

    if (showcaseNext) {
        showcaseNext.addEventListener('click', () => {
            goToProject(showcaseIndex + 1);
            resetAutoplay();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToProject(showcaseIndex - 1);
            resetAutoplay();
        }
        if (e.key === 'ArrowRight') {
            goToProject(showcaseIndex + 1);
            resetAutoplay();
        }
    });

    // Auto-advance
    function startAutoplay() {
        showcaseAutoplay = setInterval(() => {
            goToProject(showcaseIndex + 1);
        }, 6000);
    }

    function resetAutoplay() {
        clearInterval(showcaseAutoplay);
        startAutoplay();
    }

    if (totalProjects > 0) {
        startAutoplay();
    }

    // ========== COUNTER ANIMATION ==========
    const counters = document.querySelectorAll('.stat-number');
    let counterAnimated = false;

    function animateCounters() {
        if (counterAnimated) return;

        const aboutSection = document.getElementById('nosotros');
        if (!aboutSection) return;

        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            counterAnimated = true;

            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current);
                }, 16);
            });
        }
    }

    window.addEventListener('scroll', animateCounters, { passive: true });

    // ========== SCROLL REVEAL ANIMATIONS ==========
    function addRevealClasses() {
        // About section
        const aboutContent = document.querySelector('.about-content');
        const aboutImage = document.querySelector('.about-image');
        if (aboutContent) aboutContent.classList.add('reveal-left');
        if (aboutImage) aboutImage.classList.add('reveal-right');

        // Section titles
        document.querySelectorAll('.section-label, .section-title').forEach(el => {
            el.classList.add('reveal');
        });

        // Service cards
        document.querySelectorAll('.service-card').forEach((card, i) => {
            card.classList.add('reveal');
            card.style.transitionDelay = `${i * 0.15}s`;
        });

        // Project cards
        document.querySelectorAll('.project-card').forEach((card, i) => {
            card.classList.add('reveal');
            card.style.transitionDelay = `${i * 0.1}s`;
        });

        // Contact elements
        const contactForm = document.querySelector('.contact-form-wrapper');
        const contactDirect = document.querySelector('.contact-direct');
        if (contactForm) contactForm.classList.add('reveal-left');
        if (contactDirect) contactDirect.classList.add('reveal-right');

        // Info cards
        document.querySelectorAll('.info-card').forEach((card, i) => {
            card.classList.add('reveal');
            card.style.transitionDelay = `${i * 0.1}s`;
        });
    }

    function handleReveal() {
        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.88) {
                el.classList.add('visible');
            }
        });
    }

    addRevealClasses();
    window.addEventListener('scroll', handleReveal, { passive: true });
    // Trigger once on load
    setTimeout(handleReveal, 100);

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const topPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== WHATSAPP FORM ==========
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const zona = document.getElementById('zona').value;
        const mensaje = document.getElementById('mensaje').value;

        const text = `Hola, NovaBuild 👋

Quisiera más información:
• Nombre: ${nombre}
• Apellido: ${apellido}
• Email: ${email}
• Zona / ubicación de la obra: ${zona}
• Mensaje: ${mensaje}`;

        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/34623458921?text=${encoded}`, '_blank');
    });

    // ========== HERO SLIDER ==========
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            // Remove transform style to reset zoom for next cycle if needed, 
            // but CSS transition handles it well usually. 
            // To be safe and cleaner transition:

            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }

    /* Parallax removed as it conflicts with slider transitions */


    // ========== SPOTLIGHT EFFECT (BENTO CARDS) ==========
    const bentoCards = document.querySelectorAll('.bento-card');

    bentoCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });




    // ========== ZOOM PARALLAX EFFECT ==========
    const zoomContainer = document.querySelector('.zoom-container');
    const zoomElements = document.querySelectorAll('.zoom-el');

    if (zoomContainer && zoomElements.length > 0) {
        // REDUCED scale targets to prevent pixelation (was 4,5,6,5,6,8,9)
        const scaleTargets = [2, 2.5, 3, 2.5, 3, 3.5, 4];
        let ticking = false;

        function updateZoomParallax() {
            const rect = zoomContainer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Progress: 0 at top, 1 at bottom of scrollable range
            let progress = -rect.top / (rect.height - viewportHeight);
            progress = Math.max(0, Math.min(1, progress));

            zoomElements.forEach((el, index) => {
                const targetScale = scaleTargets[index % scaleTargets.length];
                const scale = 1 + (targetScale - 1) * progress;

                // Fade out images as they zoom: stay opaque until 50%, then fade
                let opacity = 1;
                if (progress > 0.5) {
                    opacity = 1 - ((progress - 0.5) / 0.5); // 1→0 from 50%→100%
                }
                opacity = Math.max(0, opacity);

                el.style.transform = `scale(${scale})`;
                el.style.opacity = opacity;
            });

            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateZoomParallax);
                ticking = true;
            }
        }, { passive: true });
    }

});
