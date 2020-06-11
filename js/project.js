
document.getElementById('button').addEventListener 
('click', getUsers);

function getUsers() {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.github.com/users';

    xhr.open('GET', url, true);
    
    xhr.onload = function() {
        var users = JSON.parse(this.responseText);

        var output = '';

        for(var i in users) {
            output +=
            '<div class="users">' +
            '<img src="'+users[i].avatar_url+' "width="70" height="70">'+
            '<ul>' +
            '<li>User Name: '+users[i].login+'</li>'+
            '<li>ID: '+users[i].id+'</li>'+
            '</ul>'
            '</div>'
        }

        document.getElementById('container').innerHTML =output;

    }

    xhr.send();
}
















