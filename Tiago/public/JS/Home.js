  // Seleciona a barra lateral e o botão de minimizar/expandid
  const sidebar = document.querySelector('.sidebar');
  const toggleButton = document.querySelector('.big-small-bar');
  
  // Alterna entre os estados de minimizado e expandido
  toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('minimized');
  });

  $(".big-small-bar").click(function () {
    $(".Pmenu").toggle();
  });