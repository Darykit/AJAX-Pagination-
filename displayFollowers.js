const section = document.querySelector('.followers');
const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');

const display = (followers) => {
 
 
 const newFollowers = followers.map((follower)=>{
 const  {avatar_url: image, login, html_url} = follower;
 return `<article class ="card">
 <img src = "${image}" alt ="${login}"/>
 <h4>${login}</h4>
 <a href ="${html_url}" class="btn">view profile</a>
 </article>`
 }).join('');
 container.innerHTML = newFollowers;
}

export default display
