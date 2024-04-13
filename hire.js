const hireForm = document.getElementById("hire-form");
const talentForm = document.getElementById("talent-form");
const talentButton = document.getElementById("talent-button");
talentButton.addEventListener("click", () => {
  hireForm.style.display = "none";
  talentForm.style.display = "block";
});