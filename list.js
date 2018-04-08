const numArray = [1, 2, 3, 4, 8, 9, 5];

document.querySelector("#listButton").addEventListener("click", listNumber);

function listNumber() {
  const listNumber = numArray.map(num => `<li>${num}</li>`).join("");
  const listArea = document.querySelector(".listNumber");
  listArea.innerHTML = listNumber;
}
