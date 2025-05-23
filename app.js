console.log("Yeaah")

// We store the email value input
const mailInput = document.getElementById('mail-input').value;

//
const mailLabel = document.getElementById('mail-label');

// We store the sucess message
const sucess = document.getElementById('success-message');

// Email Regex (not quite sure about the regex rule here..)
function verifyEmail(email) {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}

// Then we add the event listener on the first button
document.getElementById("subscribe").addEventListener("click", function(e) {
  setTimeout(handler)
 e.preventDefault()
  const mail = mailInput.trim(); 
 if (verifyEmail(mail) && mailInput !== "" && mailInput !== " ") {
   console.log(`Yaaaay it worked!`);
   
 } else {
   alert("It didn't work sorry");
   
   // We create the error message
   const error = document.createElement('p');
   error.classList.add('text-red', 'font-bold', 'text-xs');
   error.textContent = "Valid email required";
   
   // We append the error next to mail label
   mailLabel.append(error)
   
   mailInput.classList.remove('border-gray-400/90');
   mailInput.classList.add('text-red');
   mailInput.classList.add('border-red', 'bg-red');
 } 
  
});


