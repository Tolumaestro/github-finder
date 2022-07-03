class Github{
    constructor(){
        this.client_id = "47a6ac040582e029d608";
        this.client_secret = "2eab519c01a1054886b5d6f90aa8ef28e169ba3b";
        this.repos_count = 5;
        this.repos_sort = "created: asc"
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}