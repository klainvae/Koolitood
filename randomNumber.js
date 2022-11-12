let randomNumber = (Math.ceil(Math.random()*10)) 
console.log(randomNumber) 
let i = 0
do {
let int = window.prompt("Sisesta üks number 1-10-ni") 
    
if(int == randomNumber) {
    window.alert("Yay! Arvasid õige numbri ära!"); break
}
else if(int == randomNumber+1 || int == randomNumber-1)
    window.alert("Ai, sa pakkusid väga lähedale.") 
else if(int > 10) 
    window.alert('Sisesta number mis on väiksem kui 11.') 
else if(int < 1) 
    window.alert('Sisesta number mis on suurem kui 0') 
else if(isNaN(int)) 
    window.alert('See ei ole number.') 
else  
    window.alert('Sorry, ' + int + ' ei ole õige number.')
    i += 1
} while (i < 3)
