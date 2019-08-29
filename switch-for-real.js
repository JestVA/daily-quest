// I never seem to remember switch syntax properly. Always have to Google it.
// So here it is again, practicing a SWITCH statement just for practice

const sc = floor => {
    let dutchAct;
    
    switch(true) {
      case (floor <= 1):
        dutchAct = "";
        break;
      case (floor <= 6):
        dutchAct = "Aa~ ".repeat(floor - 1) + "Pa! Aa!";
        break;
      case (floor > 6):
        dutchAct = "Aa~ ".repeat(floor - 1) + "Pa!";
        break;
    }
    
    return dutchAct
  }

// Less verbose
function sc(floor){
    if(floor <= 1) return "";
    
    return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
  }

// Nice thing here is how you can return something conditionally 
'Aa~ '.repeat(2) + 'Pa!' + (1<=6 ? ' Aa!': '');
// When I want to evaluate / return something in JS I should first wrap it in round paranthesis. I do not know why I find it difficult to remember.. prolly because I think about the paranthesis as reserved to Boolean expressions and something does not click
// Like in one line functions where it is used as implicit return 