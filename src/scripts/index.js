import { getUser, getRepos } from "./services.js"
import {user} from "./objects.js"
import { screen  } from "./screen.js"

const button = document.getElementById("btn-search")
const inputSearch = document.getElementById("input-search")


button.addEventListener("click", () => {
    const userName = document.getElementById("input-search").value;
    if(userName.lenght === 0){
        alert("Preencha o campo com o nome do usuario do GitHub")
        return
    }
    getUserData(userName)
})

inputSearch.addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.which || e.keycode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(userName.lenght === 0){
            alert("Preencha o campo com o nome do usuario do GitHub")
            return true
        }
        getUserData(userName)
    }
})

async function getUserData(userName) {
    const userResponse =  await getUser(userName)
    const repositoriesResponse =  await getRepos(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    console.log(user)

    screen.renderUser(user)
    }
