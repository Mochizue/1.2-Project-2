// Onload animation

window.onload = function(){

  let mainPage = document.querySelector(".main-content-container");
  mainPage.classList.add("show");

}

// Window audio toggler

let bgm = new Audio("./Music/Soundtrack.mp3");
bgm.volume = 0.1;
bgm.play();

let isplaying = true;

let bgm_btn = document.querySelector("#headphones");
bgm_btn.addEventListener("click", function(){

  if(isplaying){

    bgm.pause();
    isplaying = false;
    bgm_btn.setAttribute("class", "fa-solid fa-volume-xmark");

  }else{

    bgm.play();
    isplaying = true;
    bgm_btn.setAttribute("class", "fa-solid fa-volume-high");

  }

})

// Sidebar toggle

let sb_open_btn = document.querySelector(".burger-menu");
let sb_close_btn = document.querySelector(".close-sb");
let sidebar = document.querySelector(".side-bar");

sb_open_btn.addEventListener("click", function(){

  sidebar.classList.add("sb-activate");
  sidebar.classList.remove("sb-close");

})

sb_close_btn.addEventListener("click", function(){

  sidebar.classList.add("sb-close");
  sidebar.classList.remove("sb-activate");

})

// Calculator

let calculator_btn = document.querySelector(".calculator");
calculator_btn.addEventListener("click", function calculator(){

    let firstNum = prompt("🚀 Enter first number:");
        firstNum = Number(firstNum);
    let secondNum = prompt("🚀 Enter second number: ");
        secondNum = Number(secondNum);

    if (isNaN(firstNum) || isNaN(secondNum)) {

      alert("❌ Please enter a valid number!");
      calculator();

    }

    let operation = prompt("🚀 Enter operation:\nA = Addition\nS = Subtraction\nM = Multiplication\nD = Division\nMod = Modulo");
        operation = operation.toLowerCase();
      
    if(operation === "a"){

      alert(`🚀 Sum: ${firstNum + secondNum}`);

    }else if(operation === "s"){

      alert(`🚀 Difference: ${firstNum - secondNum}`);

    }else if(operation === "m"){

      alert(`🚀 Product: ${firstNum * secondNum}`);

    }else if(operation === "d"){

      alert(`🚀 Quotient: ${firstNum / secondNum}`);

    }else if(operation === "mod"){

      alert(`🚀 Remainder: ${firstNum % secondNum}`);

    }else{

      alert("❌ Please refer only to the letters provided!");

    }

});

// BMI Calculator

let BMI_calc_btn = document.querySelector(".BMI-calculator");
BMI_calc_btn.addEventListener("click", function BMIcalc(){

  let weight = prompt("🚀 Enter weight: ");
  let height = prompt("🚀 Enter height: ");
      weight = Number(weight);
      height = Number(height);
  
  let BMIresult = 0;

  if(isNaN(weight) || isNaN(height)){

    alert("❌ Please enter a valid number!");
    BMIcalc();

  }

  BMIresult = weight / Math.pow(height, 2);

  if(BMIresult >= 40.0){

    alert(`🚀 Weight: ${weight}\n🚀 Height: ${height}\n🚀 BMI: ${Math.round(BMIresult)}\n🚀 Result: Obese`);

  }else if(BMIresult > 25.0 && BMIresult <= 39.9){

    alert(`🚀 Weight: ${weight}\n🚀 Height: ${height}\n🚀 BMI: ${Math.round(BMIresult)}\n🚀 Result: Overweight`);

  }else if(BMIresult > 18.5 && BMIresult <= 24.9){

    alert(`🚀 Weight: ${weight}\n🚀 Height: ${height}\n🚀 BMI: ${Math.round(BMIresult)}\n🚀 Result: Normal`);

  }else{

    alert(`🚀 Weight: ${weight}\n🚀 Height: ${height}\n🚀 BMI: ${Math.round(BMIresult)}\n🚀 Result: Underweight`);

  }

});

// Life till 100 years old

let age_calc = document.querySelector(".Life-till-100-years-old");
age_calc.addEventListener("click", function ageCalc(){

  let age = prompt("🚀 Enter age: ");
      age = Number(age);

  let agediff = 100 - age;

  if(isNaN(age)){

    alert("❌ Please enter a valid number!");
    ageCalc();

  }

  days = agediff * 365;
  weeks = agediff * 52;
  months = agediff * 12;

  alert(`🚀 Age: ${age}\n🚀 Days left: ${days}\n🚀 Weeks left: ${weeks}\n🚀 Months left: ${months}`);

});

// Love calculator

let love_calc = document.querySelector(".love-calculator");
love_calc.addEventListener("click", function loveCalc(){

  let randomNum = Math.floor(Math.random() * 100);

  let name = prompt("💞 Enter your name:");
      name = name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();

  let crush = prompt("💞 Enter your crush's name:");
      crush = crush.slice(0,1).toUpperCase() + crush.slice(1,crush.length).toLowerCase();

  alert(`💞 Name: ${name}\n💞 Crush: ${crush}\n💞 Love percentage: ${randomNum}%`);

});
