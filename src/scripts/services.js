import { baseUrl, repositoriesQuantity, eventsQuantity } from "./variables.js"


async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
    
}


async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
    
}

async function getEvents(userName) {
   const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
   return await response.json()
    
}


export{ getUser, getRepositories, getEvents}