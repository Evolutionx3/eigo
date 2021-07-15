function playAudio(url) {
    new Audio(url).play();
  }

const submitButton = document.querySelector("#submit");
const form1 = document.querySelector("#ex-1");

let answer = new Array(5);


answer[0] = "hello";
answer[1] = "hi";
answer[2] = "good-morning";
answer[3] = "good-evening";
answer[4] = "good-afternoon";

function showResults() {
  for(let j=0; j<5; j++) {
    currQuestion = j*2;
    for (let i=0; i<2; i++) {
      if (form1.elements[i+currQuestion].checked) {
        if (form1.elements[i+currQuestion].value == answer[j]) {
          form1.elements[i+currQuestion].nextElementSibling.classList.add("correct-answer");
          form1.elements[i+currQuestion+1].nextElementSibling.classList.remove("wrong-answer");
        } else {
          form1.elements[i+currQuestion].nextElementSibling.classList.add("wrong-answer");
          form1.elements[i+currQuestion-1].nextElementSibling.classList.remove("correct-answer");
        }
      }
    }
  }
  showButton();
}

function showButton() {
  form1.nextElementSibling.classList.remove("hidden");
}