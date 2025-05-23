console.log("Yeaah");

// Inputs 
const form = document.getElementById('form');
const mailInput = document.getElementById('mail-input');
const mailLabel = document.getElementById('mail-label');
const success = document.getElementById('success-message');

// Email verification 
function verifyEmail(email) {
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

// Submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = mailInput.value.trim();

  // We delete the error
  const existingError = mailLabel.querySelector('p');
  if (existingError) {
    existingError.remove();
  }

  // Email verification
  if (!verifyEmail(email)) {
    // Error Message
    const error = document.createElement('p');
    error.classList.add('text-red', 'font-bold', 'text-xs');
    error.textContent = "Valid email required";

    // Add a message next to mail label
    mailLabel.appendChild(error);

    // Add class to the error message
    mailInput.classList.remove('border-gray-400/90');
    mailInput.classList.add('bg-red-200', 'text-red-600', 'border-red-500');
    mailInput.value.textContent = " ";
    return;
  }

  // Styles reset
  mailInput.classList.remove('bg-red-200', 'text-red-600', 'border-red-500');
  mailInput.classList.add('border-gray-400/90');

  console.log(`Yaaaay it worked!`);

  // Success message display
  setTimeout(() => {
    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.classList.add('block');
  }, 700);
  
  
});

// Dismiss button event
let dismiss = document.getElementById("dismiss")

dismiss.addEventListener("click", function(e) {
  e.preventDefault()
    success.classList.add("hidden")
    setTimeout(() =>{
      // reload the page after 1s
      location.reload();
    },1000)
})
