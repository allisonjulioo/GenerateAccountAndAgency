document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("agency");
  const generate = document.getElementById("generate");
  const ag = document.getElementById("result-ag");
  const cc = document.getElementById("result-cc");
  generateNumbers();
  input.addEventListener("keyup", function () {
    calculateAgency(input.value);
  });
  generate.addEventListener("click", function () {
    generateNumbers();
  });
  ag.addEventListener("click", function () {
    copy("result-ag");
  });
  cc.addEventListener("click", function () {
    copy("result-cc");
  });

  function calculateAgency(agencyNumber) {
    const numbers = agencyNumber.split("");
    let sumSeq = 0;
    let seq = 0;
    [...new Array(numbers.length)].forEach((_, i) => {
      seq = 5 - i;
      sumSeq += parseInt(numbers[i], 0) * seq;
    });
    return module(sumSeq, agencyNumber);
  }
  function calculateAccount(accountNumber) {
    const numbers = accountNumber.split("");
    let sumSeq = 0;
    let seq = 0;
    [...new Array(numbers.length)].forEach((_, i) => {
      seq = 9 - i;
      sumSeq += parseInt(numbers[i], 0) * seq;
    });
    return module(sumSeq, accountNumber);
  }

  function module(sumSeq, agencyNumber) {
    let result = 11 - (sumSeq % 11);
    if (result === 10) {
      result = "X";
    }
    if (result === 11) {
      result = "0";
    }
    return `${agencyNumber}-${result.toString()}`;
  }
  function generateNumbers() {
    const generate = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    resultAG = calculateAgency(generate(1000, 9999).toString());
    resultCC = calculateAccount(generate(1000000, 99999999).toString());
    ag.innerHTML = resultAG;
    cc.innerHTML = resultCC;
  }
  function copy(elementId) {
    const textarea = document.createElement("textarea");
    textarea.id = "temp_element";
    textarea.style.height = 0;
    document.body.appendChild(textarea);
    textarea.value = document.getElementById(elementId).innerText;
    var selector = document.querySelector("#temp_element");
    selector.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
});
