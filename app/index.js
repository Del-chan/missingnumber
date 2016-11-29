module.exports = {

	findMissing:  function(arr1, arr2){
		var smaller = Math.min(arr1.length, arr2.length) === arr1.length ? arr1 : arr2;
		var bigger = Math.max(arr1.length, arr2.length) === arr1.length ? arr1 : arr2;

		for(var i = 0; i < bigger.length; i++){
			if(smaller.indexOf(bigger[i]) === -1){
				return bigger[i];
			 
			}	
		}
	return 0;
	}

}