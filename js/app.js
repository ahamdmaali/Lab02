'use strict'
let wlc = prompt('Welcome To Guess Game.. Please answer Yes or No , Type Your Name  :) ')
alert ('Hello'+  ' ' + wlc + ' '+ 'The Game will Start')

let jump = prompt('Can cats jump six times their length ?') ;
if (jump === 'YES' || jump ==='yes' || jump ==='y' || jump ==='Y' || jump ==='Yes'){
    alert ('Your answer is corect')
}else {
    alert ( 'Your answer is wrong')
}

let cheese = prompt('Can cats eat cheese ?');
if (cheese === 'YES' || cheese === 'yes' || cheese === 'y' || cheese === 'Y' || cheese === 'Yes') {
    alert ('Your answer is corect')
}else {
    alert ( 'Your answer is wrong')
;}
let swim = prompt('Can cats swim in water ?');
if (swim === 'YES' || swim ==='yes' || swim ==='y' || swim ==='Y' || swim ==='Yes'){
    alert ('Your answer is corect')
}else if (swim ==='No' ||swim === 'no' || swim ==='n' || swim ==='N'){
    alert ( 'Your answer is wrong ')
} 

let forest = prompt('Can cats live in forests?');
if (forest === 'No' || forest ==='no' || forest ==='n' || forest ==='N' ){
    alert ('Your answer is corect')
}else {
    alert ( 'Your answer is wrong')
}
let grass = prompt('Do cats eat grass?');
if (grass === 'YES' || grass ==='yes' || grass ==='y' || grass ==='Y' || grass ==='Yes' ){
    alert ('Your answer is corect' + ' ' + 'cat may graze on grass to boost its vitamin levels.')
}else {
    alert ( 'Your answer is wrong'+ ' ' +'cat may graze on grass to boost its vitamin levels.') 
}

alert ('Thanks You For Joining My Guess Cat Game '+  ' ' + wlc + ' ' ) 

document.write ("Hello " + wlc + "! How are you today? , Did You like this Game :D");
console.log(jump); console.log(cheese); console.log(swim) ; console.log(forest); console.log(grass);