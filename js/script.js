// ----------------------------------------------------------- funcionamento do carrossel

var wallIndex = 1;
showWall();

function plusWalls(n) {
    showWall(wallIndex += n);
}

function showWall(n) {

    var i;
    var walls = document.getElementsByClassName("wall");
    var dots = document.getElementsByClassName("dot");

    if (n > walls.length) {
        wallIndex = 1;
    }

    if (n < 1) {
        wallIndex = walls.length;
    }

    for (i = 0; i < walls.length; i++) {
        walls[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    walls[wallIndex - 1].style.display = "block";
    dots[wallIndex - 1].style.className += " active";

}

// ----------------------------------------------------------- validação do formulário

function validacao() {
    let nome = document.getElementById("inputNome");
    let cidade = document.getElementById("inputCidade")
    let uf = document.getElementById("inputUF")
    let maravilha = document.getElementById("inputMaravilha")

    let sty1 = "2px dotted black"
    let sty2 = "2px solid #78211F"
    inputStyle(nome, sty1, sty2)
    inputStyle(cidade, sty1, sty2)
    inputStyle(uf, sty1, sty2)
    inputStyle(maravilha, sty1, sty2)
}

function inputStyle(input, style1, style2) {
    if (!input.checkValidity()) {
        input.style.border = style1
        return input.style.border
    }
    if (input.checkValidity()) {
        input.style.border = style2
        return input.style.border;

    }
}