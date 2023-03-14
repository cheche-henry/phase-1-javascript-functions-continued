// code your solution here
// Define the saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
  }

  wrapAdjective("%")("a dedicated programmer");
  // Define the wrapAdjective function
function wrapAdjective(string = "*") {
    return function(adjective = "special") {
      return `You are ${string}${adjective}${string}!`;
    }
  }