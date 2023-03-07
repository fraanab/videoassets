const navbtn = document.querySelector('#navbtn')
const navbar = document.querySelector('nav')
const outside = document.querySelector('main')

openNav = () => {
	navbar.style.width= '80%'
}
closeNav = () => {
	navbar.style.width = '0'
}

const myFunction = (n) =>{
	if (n.matches){
		navbtn.addEventListener('click', openNav)
		outside.addEventListener('click', closeNav)
	}else{
		navbar.style.width = '80%'
		outside.removeEventListener('click', closeNav)
	}
}
let n = window.matchMedia("(max-width: 600px)")
myFunction(n)
n.addListener(myFunction)