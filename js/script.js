let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;
    else slideIndex = index;
    slides[slideIndex].classList.add("ativo");
}

function mudarSlide(direcao) {
    mostrarSlide(slideIndex + direcao);
}

mostrarSlide(0);
setInterval(() => mudarSlide(1), 5000);

function mostrarDestaque() {
    const textoDestaque = document.getElementById("textoDestaque");
    if (textoDestaque.textContent === "") {
        textoDestaque.textContent = "Destaque do dia: Picanha Grelhada por R$ 89,90!";
        textoDestaque.style.color = "#d35400";
    } else {
        textoDestaque.textContent = "";
    }
}