// Função para detectar se é dispositivo móvel
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// Função para enviar mensagem via WhatsApp
$(document).ready(function() {
    $('#whatsapp-form').on('submit', function(e) {
        e.preventDefault();
        
        const message = $('#message').val().trim();
        if (!message) {
            alert('Por favor, digite sua mensagem.');
            return;
        }

        // Número do WhatsApp (substitua pelo número correto)
        const phoneNumber = '5511999999999';
        
        // Codifica a mensagem para URL
        const encodedMessage = encodeURIComponent(message);
        
        // Cria o link do WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
        
        // Limpa o formulário
        $('#message').val('');
    });
}); 