const makeBigger = () => {
   const curr1 = document.querySelector("h1").style.fontSize;
   const curr2 = document.querySelector(".content").style.fontSize;
   if (curr1) {
      document.querySelector("h1").style.fontSize = String(parseFloat(curr1) + 1) + "em";
      document.querySelector(".content").style.fontSize = String(parseFloat(curr2) + 1) + "em";
   }
   else {
      document.querySelector("h1").style.fontSize = "3em";
      document.querySelector(".content").style.fontSize = "2.4em"
   }
};

const makeSmaller = () => {
   const curr1 = document.querySelector("h1").style.fontSize;
   const curr2 = document.querySelector(".content").style.fontSize;
   if (curr1) {
      document.querySelector("h1").style.fontSize = String(parseFloat(curr1) - 1) + "em";
      document.querySelector(".content").style.fontSize = String(parseFloat(curr2) - 1) + "em";
   }
   else {
      document.querySelector("h1").style.fontSize = "1em";
      document.querySelector(".content").style.fontSize = "0.4em"
   }
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
