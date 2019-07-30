class UI{
	constructor(){
		this.profile= document.getElementById('profile')
	}
	clearText(){
		this.profile.innerHTML= ''
	}
	clearAlert(){
		let cAlert= document.querySelector('.alert')
		if(cAlert){
			cAlert.remove()
		}
	}
	showError(msg, cName){
		this.clearAlert()
		let up = document.querySelector('.searchContainer')
		let down= document.querySelector('.search')

		let div= document.createElement('div')
		div.className= `${cName} alert-danger`
		div.appendChild(document.createTextNode(msg))

		up.insertBefore(div,down)
		setTimeout(()=>{
			document.querySelector('.alert').remove()
		},3000)
	}
	showProfile(info){
			this.profile.innerHTML=
			`
			<div class = "card card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img class="img-fluid mb-2" src="${info.avatar_url}">
						<a href="${info.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
					</div>
					<div class= "col-md-9">
						<span class="badge badge-primary">Public Repos:${info.public_repos}</span>
						<span class="badge badge-secondary">Public Gists:${info.public_gists}</span>
						<span class="badge badge-success">Followers:${info.followers}</span>
						<span class="badge badge-primary">Following:${info.following}</span>
						<br> <br>
						<ul class="list-group">
							<li class= "list-group-item">Company:${info.company}</li>
							<li class= "list-group-item">Website/Blog:${info.blog}</li>
							<li class= "list-group-item">Location:${info.location}</li>
							<li class= "list-group-item">Member Since:${info.created_at}</li>
						</ul>
					</div>
				</div>
			</div>
			<h3 class="page heading mb-3">Latest Repos</h3>
			<div id="repos"> </div>
			`
	}
	showRepos(datas){
		let oPut= "";
		datas.forEach((repo)=>{
		oPut+=
		`
		<div class= "card card-body mb-2">
			<div class="row">
				<div class= "col-md-6">
					<a href="${repo.html_url}" target="_blank">${repo.name}</a>
				</div>
				<div class= "col-md-6">
					<span class="badge badge-secondary">Stars:${repo.stargazers_count}</span>
						<span class="badge badge-success">Watchers:${repo.watchers_count}</span>
						<span class="badge badge-primary">Forks:${repo.forks_count}</span>
				</div>
			</div>
		</div>
		`
		})
		document.getElementById('repos').innerHTML= oPut
	}
}