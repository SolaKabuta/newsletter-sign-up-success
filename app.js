console.log("Yeaah")

//
const form = document.getElementById('form');

// We store the email value input
const mailInput = document.getElementById('mail-input').value.trim();

// 
const mailLabel = document.getElementById('mail-label');

// We store the sucess message
const sucess = document.getElementById('success-message');

// Email Regex (not quite sure about the regex rule here..)
function verifyEmail(email) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

// CLICK EVENT
// Then we add the event listener on the first button
form.addEventListener("submit", function(e) {
  e.preventDefault()
  
  const mail = mailInput.trim(); 
  
  if (!verifyEmail(mail)) {
    alert("invalid mail")
    return;
  } 
  
  if (verifyEmail(mail)) {
   
   // We create the error message
   const error = document.createElement('p');
   error.classList.add('text-red', 'font-bold', 'text-xs');
   error.textContent = "Valid email required";
   
   // We append the error next to mail label
   mailLabel.append(error)
   
   mailInput.classList.remove('border-gray-400/90');
   mailInput.classList.add('bg-red-200', 'text-red-600', 'border-red-500');
  return;
 } 
 
  console.log(`Yaaaay it worked!`);
  setTimeout(() => {
    form.submit();
    // We hide the form
    document.getElementById('form').classList.add('hidden')
    
    // And then display the success message
    success.classList.remove('hidden');
    success.classList.add('block');
  },1700) 
});


