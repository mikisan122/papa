async function cargarNoticias() {
    const response = await fetch("/news");
    const data = await response.json();
    const noticiasDiv = document.getElementById("noticias");

    noticiasDiv.innerHTML = "";

    if (data.feed) {
        data.feed.forEach(noticia => {
            const noticiaHTML = `
                <div class="noticia">
                    <h3>${noticia.title}</h3>
                    <p>${noticia.summary}</p>
                    <a href="${noticia.url}" target="_blank">Leer más</a>
                </div>
            `;
            noticiasDiv.innerHTML += noticiaHTML;
        });
    } else {
        noticiasDiv.innerHTML = "<p>No se encontraron noticias.</p>";
    }
}
