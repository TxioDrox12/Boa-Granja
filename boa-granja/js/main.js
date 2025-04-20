// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll para links de âncora
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
    
    // Botão WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Número de telefone com código do país (Moçambique +258)
            const phoneNumber = '+258XXXXXXXXX'; // Substituir pelo número real
            const message = encodeURIComponent('Olá! Gostaria de fazer um pedido na Boa Granja.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar código para processar o formulário
            // Por exemplo, enviar dados para um servidor ou mostrar uma mensagem
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Exemplo: mostrar mensagem de sucesso
            alert(`Obrigado ${name}! Seu pedido foi recebido. Entraremos em contato pelo número ${phone} em breve.`);
            
            // Limpar formulário
            contactForm.reset();
        });
    }
});

// Animação ao scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    
    if (header) {
        if (scrollPosition > 50) {
            header.style.background = 'rgba(74, 143, 41, 0.95)';
        } else {
            header.style.background = 'var(--primary-color)';
        }
    }
    
    // Animação de elementos ao entrar na viewport
    const animateElements = document.querySelectorAll('.animate');
    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
});
