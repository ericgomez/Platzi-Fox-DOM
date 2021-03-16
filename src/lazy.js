// Funcion que nos dice si el elemento es visible dentro de la pantalla
const isIntersecting = (entry) => {
  return entry.isIntersecting //true (dentro de la pantalla)
}

const loadImage = (entry) => {
  const container = entry.target // representa el contenedor en este caso al div
  const imagen = container.firstChild
  const url = imagen.dataset.src 

  //Cargar la imagen 
  imagen.src = url

  console.log(container.nodeName)
  // Desregistrar imagen observada
  observer.unobserve(container)
}
// instanciar API IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
  observer.observe(image);
}
