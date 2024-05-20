const conteiner = document.getElementById('Conteiner');
const registerBtn = document.getElementById('Register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    conteiner.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    conteiner.classList.remove("active");
})