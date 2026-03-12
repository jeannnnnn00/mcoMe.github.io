// Activity 1: Change Background
document.getElementById("bgBtn").addEventListener("click", function() {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
  });
  
  // Activity 2: Dark Mode Toggle
  document.getElementById("darkBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
  
  // Activity 3: Add List Item
  document.getElementById("addItemBtn").addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "New Item";
    document.getElementById("myList").appendChild(li);
  });
  
  // Activity 4: Type & Remove Paragraph
  document.getElementById("paraInput").addEventListener("input", function() {
    document.getElementById("myPara").textContent = this.value;
  });
  
  document.getElementById("removeBtn").addEventListener("click", function() {
    let para = document.getElementById("myPara");
    let input = document.getElementById("paraInput");
    if (para) para.textContent = "";
    if (input) input.value = "";
  });
  
  // Activity 5: Character Counter
  document.getElementById("textInput").addEventListener("input", function() {
    document.getElementById("charCount").textContent = this.value.length;
  });
  
  // Activity 6: Addition Calculator
  document.getElementById("calcBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
      document.getElementById("result").textContent = num1 + num2;
    } else {
      document.getElementById("result").textContent = "Please enter valid numbers.";
    }
  });
  
  // Activity 7: Change Image
  document.getElementById("imgBtn").addEventListener("click", function() {
    let img = document.getElementById("myImage");
    img.src = img.src.includes("image1.jpg") ? "image2.jpg" : "image1.jpg";
  });
  
  // Activity 8: Mini To-Do List
  document.getElementById("addTodoBtn").addEventListener("click", function() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();
    if (task === "") return;
  
    let li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginTop = "6px";
  
    let span = document.createElement("span");
    span.textContent = task;
  
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.padding = "2px 7px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.background = "#e74c3c";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "4px";
    deleteBtn.addEventListener("click", function() {
      li.remove();
    });
  
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  });