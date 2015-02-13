 function squareNumber(num){
	var result = (num * num);
	console.log("The result of squaring the number " + num  + " is "+ result);
	return result;
}

function halfNumber(num){
	var result = (num / 2);
	console.log("Half of " + num + " is " + result);
	return result;
}

function percentOf(x,y) {
	var percentResult = (x/y)*100;
	console.log(x + " is " + percentResult + "% of " + y + ".");
	return percentResult;

}

function areaOfCircle(radius) {
	var area = (Math.PI * (radius*radius));
	console.log("The area for a circle with radius " + radius +  " is " + area + ".");
	return area;

}

function finalResult(num) {
    var a = halfNumber(num);
	var b = squareNumber(a);
	var c = areaOfCircle(b);
	var d = percentOf(c,b);
   
}

finalResult(6);

