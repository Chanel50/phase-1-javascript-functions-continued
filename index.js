
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  
  const myFunction = function() {
   
  };
  
 
  const myAnonymousFunction = function() {
  
  };
  
  // Define a Function Using a Function Expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  
  (function() {
    
  })();
  
  
  function outerFunction() {
    const outerVar = "I'm in outer function";
    
    function innerFunction() {
      const innerVar = "I'm in inner function";
      console.log(outerVar); 
    }
    
    innerFunction();
  }
  
  
  function demoChain(name) {
    const part1 = "hi";
    return function() {
      const part2 = "there";
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    };
  }
  
  
  function closureExample() {
    const outerVar = "I'm from outer function";
    
    return function() {
      console.log(outerVar); 
    };
  }
  
  
  function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
 
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("awesome")); 
  
 
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
  };
  
