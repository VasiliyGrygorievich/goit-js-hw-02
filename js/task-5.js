'use strict'

const checkForSpam = function (message) {
    let wordCheck;
    const text = message.toLowerCase();

    if (text.includes("spam") || text.includes("sale")) {    
        wordCheck = "true";
    } else {
        wordCheck = "false";
    }
    return wordCheck;
  };
  
  console.log(checkForSpam("Latest technology news")); 
  
  console.log(checkForSpam("JavaScript weekly newsletter")); 
  
  console.log(checkForSpam("Get best sale offers now!")); 
  
  console.log(checkForSpam("[SPAM] How to earn fast money?")); 