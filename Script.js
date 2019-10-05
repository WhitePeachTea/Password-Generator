function GeneratePassword() {
    var password = '';
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+';
    for (i=74;i>=0;i--) {
      var i = Math.floor(Math.random()*chars.length+Math.floor(Math.random()));
      password = password + chars.charAt(i)
    }
    if (password.length >= 8) {
        return password;
    }
    else if (password.length >=128 ){
        return GeneratePassword();
    }
    else {
        return GeneratePassword();
    }
};


document.getElementById("generate").addEventListener("click", function(){
    document.getElementById("password").innerText = GeneratePassword();});


document.getElementById("copy").addEventListener("click", function() {
    var copyText = document.getElementById("password");

    copyText.select();

    copyText.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);}
)