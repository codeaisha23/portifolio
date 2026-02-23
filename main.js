function calculate(operator) {
	let n1 =parseFloat(documment.getElementById("num1").value);
	let n2 =parseFloat(documment.getElementById("num2").value);
	let result;
	if(isNaN(n1) || isNaN(n2)){
		documment.getElementById("result").textcontent = "enter  valid numbers";
		return;
	}
	switch(operator){
	case "+": result= n1 + n2; break;
    case "-": result= n1 - n2; break;
	case "*": result= n1 * n2; break;
	case "/":
			if (n2 ===0){
			result = "can not divide by 0";

			}
				else{
					result = n1 / n2;
			}
					break;
	case"%": 
		   result = n1 % n2;
				break;
	case"^":
			result = math.pow(n1, n2);
				break;  
	}
	documment.getElementById("result").textcontent = "result: " + result;
}