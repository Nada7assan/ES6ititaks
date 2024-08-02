// 1. Make your own interface to create tabs and display usernames by requesting users from the link below using 

let container = document.getElementsByClassName("container")[0];
let btn = document.getElementsByTagName("button");
let post = document.getElementsByClassName("post")[0];

function displayUser (user){
    user.forEach(e => {
     container.innerHTML += `<button onclick="getPost(${e.id})">${e.name}</button>`;
    });
    getPost(user[0].id);
}


fetch("https://jsonplaceholder.typicode.com/users")
.then((user)=>user.json())
.then(function (data){
    displayUser(data);
})
.catch((error)=>console.log(error));


// When a user tab is clicked display its posts’ titles by requesting the posts from the link below using Ajax ES6 fetch function:


function displayPost (user){
    post.innerHTML ="";
    user.forEach(e => {
     post.innerHTML += `<p>${e.title}</p>`;
    });
}

async function getPost(userId){
    try {
        let result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        let userArr = await result.json();
        displayPost(userArr);
    }
    catch (error) {
        console.log(error);
      }
    }

