let  github= new Github()
let ui=  new UI();

let sUser= document.querySelector('#searchUser')

sUser.addEventListener('keyup',  getText)

function getText(e){
	let text= e.target.value;
	if(text !== ""){
		github.getUser(text)
		.then((data)=>{
			if(data.profile.message==='Not Found'){
				ui.clearAlert()
				ui.showError(`Error, Not Found`, 'alert')
			}else{
				ui.showProfile(data.profile)
				ui.showRepos(data.repos)
			}
		})
		.catch((err)=>err)
	}else{
		ui.clearText()
	}
}