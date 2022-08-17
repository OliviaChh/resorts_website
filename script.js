
/* Donate Money btn
--------------------------------------------------------------------------------------------------------------- */
//click button 55$ it will auto input in text space
function five() {
  document.getElementById("money").value = "55";
}
//click button 95$ it will auto input in text space
function nine() {
  document.getElementById("money").value = "95";
}
//click button 150$ it will auto input in text space
function ten() {
  document.getElementById("money").value = "150";
}

/* Submit btn
--------------------------------------------------------------------------------------------------------------- */
//Complete the donete form it will alert success
function submitBtnClick() {

  //precpndition credit should be filled
  if (document.getElementById("credit").value != ""){ 
    window.alert("Cat Thank you !");
  }
  return false;
};
//Complete the FAQ form it will alert success
function faqsubmit() {

  //precondition name and mail should be filled
  if((document.getElementById("name").value != "") && (document.getElementById("email").value != "")){ 
    window.alert("Thank your questions !");
    return false;
  }
};
// Booking After choosing date alert success otherwise alert choose date
function booksubmit() {
  if (document.getElementById("choosedate").value != ""){ 
    window.alert("Success Book !");
  }else{
    window.alert("Please Select Date");
  }
};

/* Drop down list
--------------------------------------------------------------------------------------------------------------- */
//A drop down list to show more info
//First list
function btnClick(){
  var box = document.getElementsByClassName('dropdownbox')[0];
  var ani = document.getElementsByClassName('boxshow')[0];
  box.addEventListener('webkitAnimationEnd', () => {
      if (box.classList.contains("boxhide")){
        box.style.display = 'none'; // at first the list is hide so display none
      }
  });
  //if show event exist remove it and add hide even in order to hide
  if (box.classList.contains("boxshow")){ 
    box.classList.remove("boxshow");
    box.classList.add("boxhide");
  }else{ //if hide event exist remove it and add show even in order to show
    if (box.classList.contains("boxhide")){
      box.classList.remove("boxhide");
    }
    box.style.display = 'block';//when it show the display is block
    box.classList.add("boxshow");
  }
}
//Second list the 
// The function comment is same as First list 
function btnClick1(){
  var box = document.getElementsByClassName('dropdownbox1')[0];
  var ani = document.getElementsByClassName('boxshow')[0];
  box.addEventListener('webkitAnimationEnd', () => {
      if (box.classList.contains("boxhide")){
        box.style.display = 'none';
      }
  });
  if (box.classList.contains("boxshow")){
    box.classList.remove("boxshow");
    box.classList.add("boxhide");
  }else{
    if (box.classList.contains("boxhide")){
      box.classList.remove("boxhide");
    }
    box.style.display = 'block';
    box.classList.add("boxshow");
  }
}
//Third list
// The function comment is same as First list
function btnClick2(){
  var box = document.getElementsByClassName('dropdownbox2')[0];
  var ani = document.getElementsByClassName('boxshow')[0];
  box.addEventListener('webkitAnimationEnd', () => {
      if (box.classList.contains("boxhide")){
        box.style.display = 'none';
      }
  });
  if (box.classList.contains("boxshow")){
    box.classList.remove("boxshow");
    box.classList.add("boxhide");
  }else{
    if (box.classList.contains("boxhide")){
      box.classList.remove("boxhide");
    }
    box.style.display = 'block';
    box.classList.add("boxshow");
  }
}
//Forth list
// The function comment is same as First list
function btnClick3(){
  var box = document.getElementsByClassName('dropdownbox3')[0];
  var ani = document.getElementsByClassName('boxshow')[0];
  box.addEventListener('webkitAnimationEnd', () => {
      if (box.classList.contains("boxhide")){
        box.style.display = 'none';
      }
  });
  if (box.classList.contains("boxshow")){
    box.classList.remove("boxshow");
    box.classList.add("boxhide");
  }else{
    if (box.classList.contains("boxhide")){
      box.classList.remove("boxhide");
    }
    box.style.display = 'block';
    box.classList.add("boxshow");
  }
}
/* Guess Number
------------------------------------------------------------------------------------------- */
//To guess a number
var correctNum = 8; 
window.onload = guessFunction;
function guessFunction() {
//when user cliclk button then do guessAns function
document.getElementById('guessbtn').onclick = function(evt) { 
guessAns();
}
}
//input a number to the textarea 
function guessAns() {
  var textNum = document.getElementById('guessfield').value;
  var textPrecent = parseInt(textNum);

  //Smaller than the correct number
  if (textPrecent < correctNum) {
    document.getElementById("ans").innerHTML = "Too Less";
  // Same as correct number
  } else if (textPrecent == correctNum) {
    document.getElementById("ans").innerHTML = "Bingo!!! Check Adopt to see cat picture";
  // Bigger than the correct number
  } else if (textPrecent > correctNum) {
    document.getElementById("ans").innerHTML = "Too Much";
  // Not number
  } else if (!textPrecent) {
    document.getElementById("ans").innerHTML = "Number only";
  }
}
