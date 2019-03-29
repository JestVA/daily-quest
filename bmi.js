/*
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

const bmi = (w, h) => {

	const result = { w / h**h } 
	return bmi.tag(result) || bmi.tag(default)

}  






bmi.tag = {
	<= 18.5: "Underweight",
	<= 25.0: "Normal",
	<= 30.0: "Overweight",
	default: "Obese"
}



