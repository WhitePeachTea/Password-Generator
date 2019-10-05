document.getElementById("generate").addEventListener("click", function(){

var Lowercase = "abcdefghijklmnopqrstuvwxyz";

var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Numeric = "0123456789";

var Speical = "!@#$%^&*()-+><?";

var chars = '';

var passlength = prompt("How Long Should You Password Be? (must be between 8 and 128 characters)");

if (passlength < 8 || passlength >128) {
    alert("must be between 8 and 128 characters");
    prompt("How Long Should You Password Be? (must be between 8 and 128 characters)");
} else {
if (confirm("Do You Want Lowercase Characters in Your Password?")) {
    var chars = chars.concat(Lowercase);
} else {
}
    
if (confirm("Do You Want Uppercase Characters in Your Password?")) {
    var chars = chars.concat(Uppercase);
} else {
}
    
if (confirm("Do You Want Numeric Characters in Your Password")) {
    var chars = chars.concat(Numeric);
} else {
}
    
if (confirm("Do You Want Speical Characters in Your Password?")) {
    var chars = chars.concat(Speical);
} else {
} 

function GeneratePassword() {
    var password = "";
    for (i=0;i<passlength;i++) {
      password += chars.charAt(Math.floor(Math.random()*chars.length));
      console.log(password);
    }
    return password;
}
document.getElementById("password").innerText = GeneratePassword();
}
}
)


document.getElementById("copy").addEventListener("click", function() {
    var copyText = document.getElementById("password");

    copyText.select();

    copyText.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);}
)