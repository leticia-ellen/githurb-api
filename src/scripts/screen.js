
const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class ="info">
                            <img scr="${user.avatarUrl}" alt= "Foto de perfil" />
                            <div class= "data">
                            <h1> ${user.name ?? "não possui nome 😒"}</h1>
                            <p> ${user.bio ?? "não possui bio"} </p>
                            </div>
                            </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank" >${repo.name}</a></li>`);

        if (user.repositories.lenght) {
            this.userProfile.innerHTML += `< div class= "repositories section" >
                                           <h2>Repositórios</h2>
                                           <ul> ${repositoriesItens}</ul>
                                           </div >`

        }
    }
}

export { screen }