// Função para carregar templates
function loadTemplates() {
    // Inserir navbar
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = navbarTemplate;
    }

    // Inserir footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerTemplate;
        // Atualizar ano do copyright
        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // Configurar scroll do navbar
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        function handleHeaderScroll() {
            if (window.scrollY >= 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll();
    }
}

// Form validation and WhatsApp integration
document.addEventListener('DOMContentLoaded', function() {
    // Carregar templates
    loadTemplates();

    // Configurar ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 700,
        delay: 100,
        easing: 'ease-out',
        reset: false
    });
    sr.reveal('.service-detail-item > div', { interval: 100 });
    sr.reveal('.text-center .btn', { delay: 200, interval: 100 });

    // Configurar validação do formulário
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (this.checkValidity()) {
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Format the message for WhatsApp
                const whatsappMessage = `*Nova mensagem de contato*\n\n` +
                    `*Nome:* ${name}\n` +
                    `*Telefone:* ${phone}\n` +
                    `*Email:* ${email}\n` +
                    `*Mensagem:* ${message}`;
                
                // Encode the message for URL
                const encodedMessage = encodeURIComponent(whatsappMessage);
                
                // Open WhatsApp with the message
                window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
                
                // Reset form
                this.reset();
                
                // Show success message
                alert('Mensagem enviada com sucesso! Você será redirecionado para o WhatsApp.');
            }
            
            // Add Bootstrap's was-validated class to show validation feedback
            this.classList.add('was-validated');
        });
    }

    // Inserir botão do WhatsApp
    insertWhatsAppButton();
}); 