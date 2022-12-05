var elApp = document.getElementById("app");

function recuperarDados() {
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users/ruannysil");
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            // console.log(JSON.parse(xhr.responseText));
            var res = JSON.parse(xhr.responseText);

            var name = res.name;
            var avatar_url = res.avatar_url;
            var followers = res.followers;
            var bio = res.bio;

            var elAvatar = document.createElement("img");
            elAvatar.setAttribute("width", "128");
            elAvatar.setAttribute("src", avatar_url);

            var elName = document.createElement("p");
            elName.style.color = "#ffff";
            elName.style.fontSize = "20px";
            elName.innerText = name;

            var elFollower = document.createElement('p');
            elFollower.style.color = "#ffff";
            elFollower.style.fontSize = "20px";
            elFollower.innerText = followers;

            var elBio = document.createElement("p");
            elBio.style.color = "#ffff";
            elBio.style.fontSize = "20px";
            elBio.innerText = bio;

            elApp.appendChild(elAvatar);
            elApp.appendChild(elName);
            elApp.appendChild(elFollower);
            elApp.appendChild(elBio);
        }
    };
}