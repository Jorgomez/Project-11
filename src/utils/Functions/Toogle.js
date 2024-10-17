export const Toggle = () => {
  const element = document.querySelector('.genre') // Selecciona el elemento con la clase 'genre'

  if (element) {
    // Verifica si el elemento existe
    element.classList.toggle('active') // Añade o elimina la clase 'active'
  }
}
