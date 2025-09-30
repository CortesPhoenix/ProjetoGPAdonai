const btnLojas = document.getElementById('btnLojas');
const modal = document.getElementById('modalLojas');
const closeModal = document.getElementById('closeModal');

// abre o modal
btnLojas.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

// fecha pelo X
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// fecha clicando fora do conteúdo
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});