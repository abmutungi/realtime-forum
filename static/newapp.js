// import { fileURLToPath } from "url"
// import { dirname } from "path"

let posts = document.getElementById("postfeed")
let onlineUsers = document.getElementById("onlineusers")

let users = ["tb38r", "abmutungi", "eternal17", "million"]



for (let i = 0; i < 10; i++) {
    let postDivs = document.createElement("div")
    let postTitle = document.createElement("div")
    postTitle.id = i
    postTitle.className = "post-title-class"
    let postContent = document.createElement("div")
    postContent.id = i
    postContent.className = "post-content-class"

    let postFooter = document.createElement("div")
    postFooter.id = i
    postFooter.className = "post-footer-class"
    postDivs.className = "post-class "
    postDivs.id = i
    postTitle.innerText = `This is post number ${i}\n`
    postContent.innerText = " This is a post bla blablalala\n___________________________________________________"
    postFooter.innerText = `Created by abmutungi,   Date: ${new Date().toDateString()}, Comments: ${i + 13}`
    postDivs.appendChild(postTitle)
    postDivs.appendChild(postContent)
    postDivs.appendChild(postFooter)

    posts.appendChild(postDivs)
}


for (let i = 0; i < 4; i++) {
    let userDetails = document.createElement("div")
    let username = document.createElement("div")
    let imageDiv = document.createElement("div")
    let img = document.createElement("img")
    img.src = "/css/img/newcastle.png"
    img.style.width = "2vw"
    userDetails.id = i
    userDetails.className = "registered-user"
    username.innerText = `${users[i]}`
    imageDiv.append(img)
    userDetails.appendChild(username)
    userDetails.appendChild(imageDiv)
    onlineUsers.appendChild(userDetails)
}

// const filename = fileURLToPath(import.meta.url);
// const dirname = dirname(__filename);
// console.log(dirname);