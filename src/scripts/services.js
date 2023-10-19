import { baseUrl, repositoriesQuantity } from "./variables.js"

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()

}

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repo?per_page=${repositoriesQuantity}`)
    return await response.json()

}

export{ getUser, getRepos}