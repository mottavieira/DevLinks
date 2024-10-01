function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar2.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros e casaco preto, sem barba e fundo azul."
    )
  } else {
    // se tiver sem light mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/Avatar1.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
