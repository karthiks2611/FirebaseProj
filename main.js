// Your web app's Firebase configuration

// Reference Messages collection

/*Once you added your firebase configuration, uncomment this*/
 // var messagesRef = firebase.database().ref('messages');


// Listen for form Submit
document.getElementById("contactForm").addEventListener('submit',submitForm);

function submitForm(e) {
    e.preventDefault();
    
    var name = getInputVal('name');
    var com = getInputVal('company');
    var em = getInputVal('email');
    var ph = getInputVal('phone');
    var msg = getInputVal('message');

    //Save Message
    saveMessage(name,com,em,ph,msg);

    //Show Alert	
    setTimeout(function() {document.querySelector('.alert').style.display = 'block' },3000);

    //Clear form
    document.getElementById("contactForm").reset();
}

//Function to get Form Values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save Message to FireBase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
