/*
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

const bmi = (w, h) => {
    const result = w / Math.pow(h, 2) 
    return result <= 18.5 ? bmi.tag[1] : 
           result <= 25.0 ? bmi.tag[2] :  
           result <= 30 ? bmi.tag[3] :
           bmi.tag["default"]
}  

bmi.tag = {
	1: "Underweight",
	2: "Normal",
	3: "Overweight",
	default: "Obese"
}

// In this kata I wanted to use an object with key-value pairs as the tests for "ifs". Only managed to get the structure I still ended up using conditional ternary operator

/*
*** This is the default parameter assignment I was looking for.

I was trying to make it in the "h" parameter. As it turns out you need to create
an extra one  (like bmi here) where you do the calculations. 

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
*/



