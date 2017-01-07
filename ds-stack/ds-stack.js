var Stack = function() {
	var newObject = {};
	

	newObject.storage = [];


	newObject.add = function(value){
		newObject.storage.push(value);
	}

	newObject.remove = function(){
		newObject.storage.pop();
	}

	return newObject;
};