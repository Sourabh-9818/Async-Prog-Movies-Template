function signup(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;  
    var pass = document.getElementById('password').value;

    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('added');
}

function login(e){
    event.preventDefault();
    var username = document.getElementById('username').value;  
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        result.innerText='wrong User';
    }else if(username == data.username && pass == data.password){
        result.innerText='You are Successfully Logged In';
        window.location.href="index.html"
    }else{
        result.innerText='wrong password';
    }
}