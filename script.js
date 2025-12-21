// Abrir modal
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    modal.style.display = 'block';
  });
});

// Cerrar modal al hacer click en "x"
document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', () => {
    span.closest('.modal').style.display = 'none';
  });
});

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', e => {
  if(e.target.classList.contains('modal')){
    e.target.style.display = 'none';
  }
});