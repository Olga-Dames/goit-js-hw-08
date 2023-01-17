const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', onInputChange);
// formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

const userData= {};

// populateFormInputs();

function onInputChange(e) {
    userData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}


// function onFormSubmit(e) {
//     e.preventDefault();

//     localStorage.removeItem(STORAGE_KEY);
//     e.target.reset();
//     console.log(`${formValue}`);
// }

// function populateFormInputs(e) {
//     const savedData = localStorage.getItem(STORAGE_KEY);

//     if(savedData) {
//         // 
//         console.log(JSON.parse(savedData))
        
//     }
// }