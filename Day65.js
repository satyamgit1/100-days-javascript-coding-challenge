//* code 78: Make alternate character to upper case
function alternateText(str){
  var char = str.toLowerCase().split('')
      for(var i=0; i <char.length; i=i+2){
         char[i]=char[i].toUpperCase()
      }
  return char.join('')
}
console.log(alternateText("Priya Bagde")) //"PrIyA BaGdE"
//* OR
let alt = "Priya Bagde"
alt = alt.split("")
  .map((letter,index)=>(index%2)==0 ? letter.toUpperCase(): letter.toLowerCase())
  .join("")
console.log(alt) //"PrIyA BaGdE"