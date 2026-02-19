
function showSignup(){
  document.getElementById("signin").style.display="none";
  document.getElementById("signup").style.display="block";
}

function showSignin(){
  document.getElementById("signup").style.display="none";
  document.getElementById("signin").style.display="block";
}

function loginSuccess(){
  localStorage.setItem("loggedIn","true");
  window.location.href="home.html";
}

function signupSuccess(){
  alert("Account Created!");
  loginSuccess();
}

function openCourse(title,price){
  localStorage.setItem("courseTitle",title);
  localStorage.setItem("coursePrice",price);
  window.location.href="course-details.html";
}

function loadCourse(){
  let title=localStorage.getItem("courseTitle");
  let price=localStorage.getItem("coursePrice");

  document.getElementById("courseTitle").innerText=title;
  document.getElementById("coursePrice").innerText="Price: ₹"+price;

  document.getElementById("courseContent").classList.add("blur");
  document.getElementById("overlay").style.display="flex";
}

function submitStudent(){
  let name=document.getElementById("studentName").value;
  if(name===""){ alert("Enter details"); return; }

  localStorage.setItem("studentName",name);

  document.getElementById("overlay").style.display="none";
  document.getElementById("courseContent").classList.remove("blur");
}

function goInvoice(){
  window.location.href="invoice.html";
}

function loadInvoice(){
  document.getElementById("invName").innerText=localStorage.getItem("studentName");
  document.getElementById("invCourse").innerText=localStorage.getItem("courseTitle");
  document.getElementById("invPrice").innerText=localStorage.getItem("coursePrice");
  document.getElementById("invDate").innerText=new Date().toLocaleDateString();
}
