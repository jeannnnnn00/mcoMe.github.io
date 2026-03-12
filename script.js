
// Page Navigation
document.querySelectorAll("nav button, aside button").forEach(btn => {
    btn.addEventListener("click", () => {
      const pageId = btn.getAttribute("data-page");
      document.querySelectorAll(".page").forEach(sec => sec.classList.add("hidden"));
      document.getElementById(pageId).classList.remove("hidden");
    });
  });
  
  
  // Activity 1: Alert
  
  document.getElementById("act1_btn").addEventListener("click", () => {
    alert("Welcome to JavaScript!");
    console.log("This is my first JS program.");
  });
  
  
  // Activity 2: 
  
  document.getElementById("act2_btn").addEventListener("click", () => {
    let name = "Jean";
    let age = 20;
    let isStudent = true;
    console.log(name, age, isStudent);
    alert("My name is " + name + ". I am " + age + " years old.");
  });
  
   // Activity 3:
 
  document.getElementById("act3_btn").addEventListener("click", () => {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers!");
      return;
    }
  
    let sum = num1 + num2;
    let diff = num1 - num2;
    let prod = num1 * num2;
    let quot = num1 / num2;
  
    console.log("Sum:", sum);
    console.log("Difference:", diff);
    console.log("Product:", prod);
    console.log("Quotient:", quot);
  
    alert(
      "Calculator Results:\n" +
      "Sum: " + sum + "\n" +
      "Difference: " + diff + "\n" +
      "Product: " + prod + "\n" +
      "Quotient: " + quot
    );
  });
  
 
  // Activity 4: User Input

  document.getElementById("act4_btn").addEventListener("click", () => {
    let userName = prompt("Enter your name:");
    let favNumber = prompt("Enter your favorite number:");
    alert("Hello " + userName + "! Your favorite number is " + favNumber + ".");
  });

  // Activity 5: Conditional
  document.getElementById("act5_btn").addEventListener("click", () => {
    let userAge = prompt("Enter your age:");
    if (userAge >= 18) {
      alert("You are eligible.");
    } else {
      alert("You are not eligible.");
    }
  });
  

  // Activity 6:

  document.getElementById("act6_btn").addEventListener("click", () => {
    let start = parseInt(prompt("Enter the starting number:"));
    let end = parseInt(prompt("Enter the ending number:"));
  
    if (isNaN(start) || isNaN(end)) {
      alert("Please enter valid numbers!");
      return;
    }
  
    let forLoopResult = "";
    for (let i = start; i <= end; i++) {
      console.log(i);
      forLoopResult += i + " ";
    }
  
    let whileLoopResult = "";
    let j = end;
    while (j >= start) {
      console.log(j);
      whileLoopResult += j + " ";
      j--;
    }
  
    alert(
      "Loop Results:\n" +
      "For loop (" + start + " to " + end + "): " + forLoopResult + "\n" +
      "While loop (" + end + " to " + start + "): " + whileLoopResult
    );
  });
  
  
  // Activity 7:
  
  document.getElementById("act7_btn").addEventListener("click", () => {
    alert("Button Clicked!");
  });
  