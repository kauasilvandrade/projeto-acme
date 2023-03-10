
const btnMenu = document.getElementById("botaoMenu");

const listaMenu = document.querySelector(".navecacao__listaLinks");

// FECHAR MENU E CARRINHO QUANDO MUDAR DE TELA
function mudouTamanho() {

    if (window.innerWidth > 990) {

        // BOTÃO
        btnMenu.classList.remove("ativado");

        // MENU
        listaMenu.classList.remove("ativado");

    }

}

// ACESSIBILIDADE
function acessibilidade(event) {
    
    if (event.type == 'touchstart') event.preventDefault();

    const ativado = listaMenu.classList.contains("ativado");

    event.currentTarget.setAttribute("aria-expanded", ativado);

    if (ativado) {
        event.currentTarget.setAttribute("aria-label", "Botão fechar menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Botão abrir menu");
    }

}

// FUNÇÃO PARA ABRIR E FECHAR MENU
function menuShow() {

    // BOTÃO
    btnMenu.classList.toggle("ativado");

    // MENU
    listaMenu.classList.toggle("ativado");

    acessibilidade(event);

}

btnMenu.addEventListener("click", menuShow);
btnMenu.addEventListener("touchstart", menuShow);

// FUNÇÃO PARA ABRIR O CARRINHO DE COMPRAS
function abrirCarrinho(event) {

    // CARRINHO DE COMPRAS
    const carrinhoCompras = document.querySelector(".navegacao__carrinhoCompras");
    carrinhoCompras.classList.toggle("ativado");

    if (carrinhoCompras.classList.contains("ativado")) {

        event.currentTarget.setAttribute("aria-expanded", "true");

    } else {

        event.currentTarget.setAttribute("aria-expanded", "false");

    }

    // FECHAR CARRINHO DE COMPRAS
    const btnFecharCarrinho = document.querySelector(".botaoFecharCarrinho");

    btnFecharCarrinho.addEventListener('click', () => {
        
        carrinhoCompras.classList.remove("ativado");

    })
} 

const btnAbrirCarrinho = document.querySelector(".navegacao__botaoAbrirCarrinho");
btnAbrirCarrinho.addEventListener("click", abrirCarrinho);