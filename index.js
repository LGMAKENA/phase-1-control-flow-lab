function scuberGreetingForFeet(distance){
  if(distance < 400)
  {
    return"This one is on me!";
  }else if(distance>2500)
  {
    return "No can do."
  }else if(distance>2000)
  {
return "I will gladly take your thirty bucks."
  }
  
  // Write your code here!
}

function ternaryCheckCity(city){
  
  // Write your code here!
  return (city=="NYC") ? "Ok, sounds good." :  "No go."


}

function switchOnCharmFromTip(tip){
  switch(tip)
  {
    case "generous":
      return ("Thank you so much.")
      case "not as generous":
      return ("Thank you.")
 default:

       return ("Bye.")
  }

  // Write your code here!

}


console.log(scuberGreetingForFeet(2600));