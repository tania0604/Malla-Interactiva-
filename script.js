function mostrar(tema) {
    let texto = "";

    if (tema === "tema1") {
        texto = "Contenido del Tema 1";
    } else if (tema === "tema2") {
        texto = "Contenido del Tema 2";
    } else if (tema === "tema3") {
        texto = "Contenido del Tema 3";
    } else if (tema === "tema4") {
        texto = "Contenido del Tema 4";
    }

    document.getElementById("contenido").innerHTML = texto;
}
