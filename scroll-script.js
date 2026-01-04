const sections = ['#profile', '#career', '#experience', '#coaching-experience', '#qualifications'];
for (const section of sections) {
  const element = document.querySelector(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
