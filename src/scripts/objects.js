const user = {
    avatarUrl:"",
    name:"",
    bio:"",
    userName: "",
    repositories: {},
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRepositories(getRepos){

        this.repositories = getRepos
    }
}
export{ user}