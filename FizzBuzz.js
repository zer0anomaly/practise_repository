for(i = 1; i <= 100; i++){
	let nwvar = i % 3
	let nwvartwo = i % 5
	if (nwvar == 0 && nwvartwo == 0){
		console.log("FizzBuzz")
	}else if (nwvar == 0 ){
		console.log("Fizz")
	}else if(nwvartwo == 0){
		console.log("Buzz")
	}else{
		console.log(i)
	}	
}