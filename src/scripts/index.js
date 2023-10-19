import { getUser, getRepositories } from "./services.js"
import {user} from "./objects.js"
import { screen  } from "./screen.js"


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(userName.length === 0){
        alert("Preencha o campo com o nome do usuario do GitHub")
        return
    }
   getUserData(userName)
})

document.getElementById('input-search').addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.which || e.keycode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(userName.length === 0){
            alert("Preencha o campo com o nome do usuario do GitHub")
            return true
        }
        getUserData(userName)
    }
})

async function getUserData(userName) {
    const userResponse =  await getUser(userName)
    const repositoriesResponse =  await getRepositories(userName)
   
    user.setInfo(userResponse)
    
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
    }
