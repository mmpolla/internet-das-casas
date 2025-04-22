// Templates para navbar e footer
document.addEventListener('DOMContentLoaded', () => {
    // Template do Navbar
    const navbarTemplate = `
        <nav id="mainNavbar" class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand logo" href="index.html">
                    <img src="assets/img/logo.png" alt="Logo Internet das Casas Automação Residencial" style="height: 2.5rem;">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="index.html#hero">INÍCIO</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#about">SOBRE NÓS</a></li>
                        <li class="nav-item"><a class="nav-link active" href="index.html#services">SERVIÇOS</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#portfolio">PORTIFÓLIO</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#testimonials">DEPOIMENTOS</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#blog">BLOG</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#contact">CONTATO</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    // Template do Footer
    const footerTemplate = `
        <footer id="footer" class="py-4 mt-auto">
            <div class="container text-center">
                <p class="mb-1">&copy; <span id="currentYear"></span> Internet das Casas Automação Residencial. Todos os direitos reservados.</p>
                <p class="mb-0">Foz do Iguaçu - PR | <a href="https://internetdascasas.com.br" class="link-secondary text-decoration-none">internetdascasas.com.br</a></p>
            </div>
        </footer>
    `;

    // Inserir navbar
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = navbarTemplate;
    }

    // Inserir footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerTemplate;
        // Atualizar ano no footer
        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // Configurar ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 700,
        delay: 100,
        easing: 'ease-out',
        reset: false
    });

    // Revelar elementos da página de serviço
    sr.reveal('.service-detail-item > div', { interval: 100 });
    sr.reveal('.text-center .btn', { delay: 200, interval: 100 });
}); 