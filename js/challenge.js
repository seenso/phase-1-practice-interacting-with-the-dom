document.addEventListener("DOMContentLoaded", () => {
  let counterText = document.querySelector("#counter").innerText;
  const addBtn = document.querySelector("#plus");
  const subBtn = document.querySelector("#minus");
  const heartBtn = document.querySelector("#heart");
  const pauseBtn = document.querySelector("#plus");

  //timer increment
  let counter = parseInt(counterText);
    // setInterval(counter += 1, 1000);


  //add button
  addBtn.addEventListener("click", () => {
    counter += 1;
    counterText = counter
    console.log("I clicked the add button", counterNumber, counterText)

  });

  //minus button


  //heart button


  //pause/resume button
});