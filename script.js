// Esperar que o DOM esteja totalmente carregado
document.addEventListener('DOMContentLoaded', (event) => {

    // Rolagem suave para links de navegação
    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Adicionar animação de rolagem para elementos
    const elementosDeRolagem = document.querySelectorAll('.elemento-de-rolagem');

    const elementoVisivel = (el, divisor = 1) => {
        const topoDoElemento = el.getBoundingClientRect().top;

        return (
            topoDoElemento <= (window.innerHeight || document.documentElement.clientHeight) / divisor
        );
    };

    const exibirElementoDeRolagem = (element) => {
        element.classList.add('rolado');
    };

    const esconderElementoDeRolagem = (element) => {
        element.classList.remove('rolado');
    };

    const lidarComAnimacaoDeRolagem = () => {
        elementosDeRolagem.forEach((el) => {
            if (elementoVisivel(el, 1.25)) {
                exibirElementoDeRolagem(el);
            } else {
                esconderElementoDeRolagem(el);
            }
        })
    }

    window.addEventListener('scroll', () => {
        lidarComAnimacaoDeRolagem();
    });

    // Efeito de hover para itens de serviço e projeto
    const itensDeServico = document.querySelectorAll('.item-de-servico');
    const itensDeProjeto = document.querySelectorAll('.item-de-projeto');

    itensDeServico.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hoverizado');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('hoverizado');
        });
    });

    itensDeProjeto.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hoverizado');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('hoverizado');
        });
    });

});

// Classe de animação de rolagem de exemplo
const estilos = `
.elemento-de-rolagem {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.elemento-de-rolagem.rolado {
    opacity: 1;
    transform: translateY(0);
}

.item-de-servico.hoverizado,
.item-de-projeto.hoverizado {
    transform: translateY(-10px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}
`;

// Injetar estilos no cabeçalho
const folhaDeEstilo = document.createElement("style");
folhaDeEstilo.type = "text/css";
folhaDeEstilo.innerText = estilos;
document.head.appendChild(folhaDeEstilo);

