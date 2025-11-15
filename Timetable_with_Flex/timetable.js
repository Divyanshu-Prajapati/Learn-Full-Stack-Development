const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Save and load notes for each day
days.forEach(day => {
  const textarea = document.getElementById(`notes-${day}`);
  const eraseBtn = textarea.nextElementSibling.nextElementSibling; 
  // textarea -> <br> -> button

  if (!textarea) return;

  // Load saved note
  const saved = localStorage.getItem(`notes-${day}`);
  if (saved) textarea.value = saved;

  // Save note on input
  textarea.addEventListener("input", () => {
    localStorage.setItem(`notes-${day}`, textarea.value);
  });

  // Erase only this day's textarea
  if (eraseBtn) {
    eraseBtn.addEventListener("click", () => {
      textarea.value = "";
      localStorage.removeItem(`notes-${day}`);
    });
  }
});
