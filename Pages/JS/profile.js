function toggleEditState() {
    
    var aboutMeText = document.getElementById('about-me-text');
    var aboutMeInput = document.getElementById('about-me-input');
  
    
    if (aboutMeInput.style.display === 'none') {
      
      aboutMeInput.style.display = 'block';
      aboutMeText.style.display = 'none';
  
      
      aboutMeInput.value = aboutMeText.innerText;
    } else {
      
      aboutMeInput.style.display = 'none';
      aboutMeText.style.display = 'block';
      aboutMeText.innerText = aboutMeInput.value;
    }
  }
  
  
  document.getElementById('edit-button').addEventListener('click', toggleEditState);
  
  
  
  function toggleEditMode() {
    const aboutMeParagraph = document.querySelector('.discription p');
    const editButton = document.querySelector('.editbutton');
    const isEditable = aboutMeParagraph.isContentEditable;
  
    
    aboutMeParagraph.contentEditable = !isEditable;
    editButton.textContent = isEditable ? 'Edit' : 'Save';
  
    
    if (isEditable) {
      
      const newAboutMeText = aboutMeParagraph.innerText;
      console.log('New About Me text:', newAboutMeText);
      
    }
  }
  document.getElementById("editbutton").addEventListener("click", toggleForms);
  
  function init() {
    
    const editButton = document.querySelector('.editbutton');
    editButton.addEventListener('click', toggleEditMode);
  
    
    const profileImageInput = document.createElement('input');
    profileImageInput.type = 'file';
    profileImageInput.style.display = 'none';
    profileImageInput.addEventListener('change', (event) => handleFileInputChange(event, 'profile-image'));
    document.body.appendChild(profileImageInput);
  
    
    const profileImage = document.querySelector('.profile');
    profileImage.addEventListener('click', () => profileImageInput.click());
  
    
    const headerImageInput = document.createElement('input');
    headerImageInput.type = 'file';
    headerImageInput.style.display = 'none';
    headerImageInput.addEventListener('change', (event) => handleFileInputChange(event, 'header-image'));
    document.body.appendChild(headerImageInput);
  
    
    const headerImage = document.querySelector('.img-fluid');
    headerImage.addEventListener('click', () => headerImageInput.click());
  }
  
  
  window.onload = init;
  