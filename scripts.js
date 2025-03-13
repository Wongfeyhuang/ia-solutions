document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Changer l'apparence du bouton hamburger
            const spans = this.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Fermer le menu mobile lors du clic sur un lien
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                mobileMenuToggle.click();
            }
        });
    });
    
    // Navigation fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation au défilement
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .skill-item, .timeline-item, .profile-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Ajouter des classes pour l'animation
    document.querySelectorAll('.service-card, .skill-item, .timeline-item, .profile-content').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });
    
    // Classe pour les éléments animés
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .animate {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);
    
    // Exécuter l'animation au chargement et au défilement
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                // Réinitialiser le formulaire
                this.reset();
                
                // Afficher un message de succès
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Votre message a été envoyé avec succès!';
                successMessage.style.color = 'var(--primary-color)';
                successMessage.style.padding = '1rem';
                successMessage.style.marginTop = '1rem';
                successMessage.style.backgroundColor = 'rgba(118, 185, 0, 0.1)';
                successMessage.style.borderRadius = 'var(--border-radius)';
                successMessage.style.textAlign = 'center';
                
                this.appendChild(successMessage);
                
                // Réactiver le bouton
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Supprimer le message après 5 secondes
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    }
    
    // Mettre en évidence la section active dans la navigation
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.nav-item a[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-item a[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    }
    
    // Ajouter un style pour les liens actifs
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .nav-item a.active {
                color: var(--primary-color);
                font-weight: 600;
            }
        </style>
    `);
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Exécuter une fois au chargement
    animateOnScroll();
    highlightNavigation();
});