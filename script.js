
function gerarRobo() {
    
    const baseUrl = 'https://robohash.org/';

    
    const textoAleatorio = new Date().getTime().toString();

    
    const avatarUrl = `${baseUrl}${textoAleatorio}`;

    
    const avatarImg = document.getElementById('avatar');

    
    avatarImg.src = avatarUrl;
}


const botaoFabricarRobo = document.querySelector('.botao');
botaoFabricarRobo.addEventListener('click', gerarRobo);


gerarRobo();
