let chr = "#"
for (i = 1; i < 8; i++){
	let dvded = i % 2
	if (dvded == 0){
		console.log(" " + chr + " " + chr + " " + chr + " " + chr + " " + chr + " " + chr + " " + chr + " " + chr )
	}else{
		console.log(chr + " " + chr + " " + chr + " " + chr + " " + chr + " " + chr + " " + chr + " " + chr)
	}
}