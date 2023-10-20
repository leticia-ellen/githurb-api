
const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class ="info">
                            <img src="${user.avatarUrl}" alt= "Foto de perfil" />
                            <div class= "data">
                            <h1> ${user.name ?? "não possui nome 😒"}</h1>
                             <p> ${user.bio ?? "não possui bio"} </p>
                             <p> Seguidores: ${user.followers } </p>
                             <p> Seguindo: ${user.following } </p>
                            </div>
                            </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank" >
                                                                     ${repo.name}
                                                                     <span>
                                                                     <p>🍴 ${repo.forks}</p>
                                                                     <p>⭐ ${repo.stargazers_count}</p>
                                                                     <p>👀 ${repo.watchers_count}</p>
                                                                     <p>🌅 ${repo.language}</p></span>
                                                                     </a></li>`);
        
        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class= "repositories section" >
                                           <h2>Repositórios</h2>
                                           <ul> ${repositoriesItens} </ul>
                                           </div >`

        }

        let eventsItens = ""
    user.events.forEach(events => eventsItens += `<li><a href="${events.repo.url}" target="_blank" >${events.repo.name}</a><p>-${events.type} </p></li>`);
        
        if(user.events.length > 0) {
            this.userProfile.innerHTML += `<div class= "events section" >
                                           <h2>Eventos</h2>
                                           <ul> ${eventsItens}</ul>
                                           </div >`

        }
    }
}

export { screen }