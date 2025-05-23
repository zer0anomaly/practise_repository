function isEven(x){
	if ((x & 1) === 1){
		console.log("Odd");
	}else {
		console.log("Even")
	}
}
isEven(6)