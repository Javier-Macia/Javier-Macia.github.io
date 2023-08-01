const summaryContainers = document.querySelectorAll('.summary-container');
summaryContainers.forEach((container, index) => {
  container.style.animationDelay = `${index * 1.4}s`;
});
