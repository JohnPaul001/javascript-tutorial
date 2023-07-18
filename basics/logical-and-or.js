let temp = 55

// logical and operator. True if both sides are true . False if both sides are false
// logical or operator- True if atleast both side is true . False otherwise
if (temp >=60 && temp <=90){
console.log('It is pretty nice out')
}else if (temp <=0 || temp>=120){
    console.log('Do not go outside')
}else {
    console.log('Do what you want')
}
    
let isGuestOneVegan = true
let isGuestTwoVegan = false
if (isGuestOneVegan && isGuestTwoVegan ){
console.log('Only offer up vegan dishes')
}else if (isGuestOneVegan  || isGuestTwoVegan ){
console.log('Make sure to offer up some vegan options')
}else {
    console.log('Offer up anything on the menu')
}