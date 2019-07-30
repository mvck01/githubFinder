class Github{
	constructor(){
		this.client_id='17ee6d2b6ef1bf02ef7b'
		this.client_secret='190b4dfcd52cd01e027db614332b81f0587869d4'
		this.repos_count=5;
		this.repos_sort='created: asc'
	}
	async getUser(name){
		let ogApi= await fetch(`https://api.github.com/users/${name}?client_secret=${this.client_secret}&client_id=${this.client_id}`)

		let repoApi=await fetch(`https://api.github.com/users/${name}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_secret=${this.client_secret}&client_id=${this.client_id}`) 

		let respApi = await ogApi.json()
		let repsApi= await repoApi.json()
		return{
			profile: respApi,
			repos: repsApi
		}
	}
}