// Funcion que nos dice si el elemento es visible dentro de la pantalla
const isIntersecting = (entry) => {
  return entry.isIntersecting //true (dentro de la pantalla)
}

const accion = (entry) => {
  const nodo = entry.target
  console.log('Get it')
  // Desregistrar imagen observada
  observer.unobserve(nodo)
}
// instanciar API IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion)
})

export const registerImage = (image) => {
  observer.observe(image);
}
