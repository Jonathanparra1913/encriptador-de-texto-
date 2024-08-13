const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muñeco = document.getElementById("muñeco");
const rigthInfo = document.getElementById("rigthInfo");
const rigth = document.getElementById("rigth");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    muñeco.classList.add("oculto");
    ingresoTexto.value= "";
    rigthInfo.style.display = "none";
    botonCopiar.style.display = "block";
    rigth.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function encriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][0])) {
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            }
        }
        return newText;
    }

    remplace(encriptar(texto));
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText;
        

    }
    function desencriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            }
        }
        return newText;
    }

    const textoDesencriptado = desencriptar(texto);
    remplace(textoDesencriptado);
});

botonCopiar.addEventListener ("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy')
    alert("texto copiado");

    mensajeFinal.innerHTML = ""
    muñeco.classList.remove("oculto");

    rigthInfo.style.display = "block";
    botonCopiar.style.display = "none"
    rigth.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();




})