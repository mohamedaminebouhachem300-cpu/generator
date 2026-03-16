// --- Mission 1: Image Upload Logic ---

// 1. Select the elements
const avatarInput = document.getElementById('avatar-upload');
const dropZone = document.getElementById('drop-zone');
const uploadContent = document.getElementById('upload-content');
const displayAvatar = document.getElementById('display-avatar'); // The img on the ticket

// 2. Make the custom box clickable
dropZone.addEventListener('click', () => {
    avatarInput.click();
});

// 3. Handle the file selection and preview
avatarInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        // Validation: Check if it's an image
        if (!file.type.startsWith('image/')) {
            alert("Please upload an image file (PNG or JPG).");
            return;
        }

        // Validation: Check size (500KB)
        if (file.size > 500 * 1024) {
            alert("File is too large! Please upload an image under 500KB.");
            this.value = ""; // Reset the input
            return;
        }

        // Processing: Read the file and show a preview
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Update the upload box UI to show the image preview
            uploadContent.innerHTML = `
                <div class="preview-wrapper">
                    <img src="${e.target.result}" class="avatar-preview">
                    <div class="change-actions">
                        <button type="button" class="btn-remove">Remove image</button>
                        <button type="button" class="btn-change">Change image</button>
                    </div>
                </div>
            `;
            
            // Inject the image into the final ticket (ready for Mission 3)
            displayAvatar.src = e.target.result;
            
            // Optional: Add logic for the "Remove" button if you want to get fancy
            document.querySelector('.btn-remove')?.addEventListener('click', (e) => {
                e.stopPropagation(); // Stop from clicking the dropZone again
                resetUpload();
            });
        };

        reader.readAsDataURL(file);
    }
});

// Helper function to reset the upload state
function resetUpload() {
    avatarInput.value = "";
    displayAvatar.src = "";
    uploadContent.innerHTML = `
        <div class="icon-box">
            <img src="./assets/images/icon-upload.svg" alt="Upload Icon">
        </div>
        <p id="upload-text">Drag and drop or click to upload</p>
    `;
}

const ticketForm = document.getElementById('ticket-form');

ticketForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the form from submitting immediately
    
    let isFormValid = true;

    // 1. Validate Avatar
    if (!avatarInput.files[0]) {
        alert("Please upload an avatar!");
        isFormValid = false;
    }

    // 2. Validate Text Inputs
    const inputs = [
        { id: 'name', msg: 'Please enter your full name.' },
        { id: 'email', msg: 'Please enter a valid email address.', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        { id: 'github', msg: 'Please enter your GitHub username.' }
    ];

    inputs.forEach(inputObj => {
        const inputElement = document.getElementById(inputObj.id);
        const errorSpan = inputElement.nextElementSibling; // The span we added
        
        let isValid = inputElement.value.trim() !== "";
        
        // Extra check for email pattern
        if (inputObj.id === 'email' && isValid) {
            isValid = inputObj.pattern.test(inputElement.value);
        }

        if (!isValid) {
            showError(inputElement, errorSpan, inputObj.msg);
            isFormValid = false;
        } else {
            clearError(inputElement, errorSpan);
        }
    });

    // If everything is perfect, move to Mission 3
    if (isFormValid) {
        generateTicket(); 
    }
});

function showError(input, span, message) {
    input.classList.add('input-error'); // Adds a red border
    span.textContent = message;
    span.classList.remove('hidden');
}

function clearError(input, span) {
    input.classList.remove('input-error');
    span.classList.add('hidden');
}

function generateTicket() {
    // 1. Capture the data from the form
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userGithub = document.getElementById('github').value;

    // 2. Inject data into the Success Header
    document.getElementById('display-name-header').textContent = userName;
    document.getElementById('display-email').textContent = userEmail;

    // 3. Inject data into the Ticket Card
    document.getElementById('display-name-ticket').textContent = userName;
    
    // Ensure GitHub handle has the "@" symbol
    const githubHandle = userGithub.startsWith('@') ? userGithub : `@${userGithub}`;
    document.getElementById('display-github').textContent = githubHandle;

    // 4. Generate a unique Ticket Number (e.g., #00143)
    const randomID = Math.floor(Math.random() * 99999).toString().padStart(5, '0');
    document.querySelector('.ticket-number').textContent = `#${randomID}`;

    // 5. The Big Swap (Hide Form, Show Ticket)
    const formSection = document.getElementById('form-section');
    const successSection = document.getElementById('success-section');

    formSection.classList.add('hidden');
    successSection.classList.remove('hidden');

    // Scroll to the top so the user sees their name immediately
    window.scrollTo({ top: 0, behavior: 'smooth' });
}