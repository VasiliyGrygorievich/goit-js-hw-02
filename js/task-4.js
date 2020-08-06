'use strict'


const formatString = function (string) {
    if (string.length >= 40) {
      const range = string.slice(0, 39);
      string = range + "...";
    }
    return string;
  };
  
  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  
  console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
  
  console.log(formatString("Curabitur ligula sapien."));
  
  console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));