// js for siderbar
const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.querySelector("aside");
const mainContent = document.querySelector("main");

toggleBtn.addEventListener("click", () =>{
    sidebar.classList.toggle("collapsed"); 
    mainContent.classList.toggle("expanded")});

    // Activity 1 
    function activity_1(msg) {
        alert(msg);
        console.log(msg);
    }
    
    documen.getElementById("act1_btn")
.addEventListener("click" , function() {
    activity_1("This is activity 1. Welcome!");
})

// Activity 2 
function activity_2(name, age, isStudent){
    console.log('My name is', name,'.I am ', age,'years old.');
}

document.getElementById("act2_btn").addEventListener("click", function() {
    let name = "Summer Jean Manaog";
    let age = 20;
    let isStudent = true;
    activity_2(name,age,isStudent);
});

// Activity 3
function activity_3(num1,num2){
    console.log("The number declared are:", num1," and ", num2);
    console.log("Addition:", num1 + num2);
    console.log("Subtraction:", num1 - num2);
    console.log("Multiplication:", num1 * num2);
    console.log("Division:", num1 / num2);
}

document.getElementById("act3_btn").addEventListener("click", function (){
    let num1 = 7;
    let num2 = 9;
    activity_(num1,num2);
});
    
// Activity 4
function activity_4(){
    let name = prompt("What is your name?");
    let fav_num = prompt("What is your favorite number?");
    alert("Hello" + name + "!Your favorite number is " +fav_num + ".");
}

document.getElementById("act4_btn").addEventListener("click", activity_4);

// Activity 5
function _5() {
    let age = prompt("What is your age?");
    if (age >=20) {
        alert("You are eligible!");
    }else if (age < 20 && age >= 0){
        alert("You are not eligible!");
    }else{
        alert("Your input is invalid!");
    }
}

document.getElementById("act5_btn").addEventListener("click", activity_4);

// Activity 6 
function activity_6() {
    for (let i =1; i <=10; i++) {
        console.log(i);
    }

    let j =10;
    while (j >=1){
        console.log(j);
        j--;
    }


}
 
document.getElementById("act6_btn").addEventListener("click", activity_6);

// Activity 7
function activity_7(msg){
    alert(msg);
    console.log(msg);
}

 
    documen.getElementById("act1_btn")
.addEventListener("click" , function() {
    activity_7("This is activity 1. Welcome!");

})
