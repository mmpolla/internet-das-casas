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
        distance: '50px',
        duration: 800,
        delay: 150,
        easing: 'ease-in-out',
        reset: false
    });

    // Animar os itens de detalhe do serviço (se aplicável)
    sr.reveal('.service-detail-item > div', { interval: 150 });

    // Animar os botões
    sr.reveal('.text-center .btn', { delay: 200, interval: 100 });

    // Animar os itens da seção de soluções/serviços na index
    sr.reveal('#services .service-item', { interval: 200 });

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
                window.open(`https://wa.me/5541999469446?text=${encodedMessage}`, '_blank');
                
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

    // Fecha o menu mobile ao clicar em um link
    // Seleciona todos os links do menu
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    // Seleciona o botão do menu mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    // Seleciona o container do menu collapse
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Adiciona evento de clique para cada link do menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se o menu está aberto (tem a classe show)
            if (navbarCollapse.classList.contains('show')) {
                // Simula um clique no botão do menu para fechá-lo
                navbarToggler.click();
            }
        });
    });
}); 