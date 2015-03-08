(function () {
	var PoneyJS = {};

	PoneyJS.walkThroughRainbows = function (array, f) {
		// TODO : check if array is defined

		return array.map(f);
	};

	PoneyJS.keepTheRainAway = function (array, f) {
		// TODO : check if array is defined

		return array.filter(f);
	};

	PoneyJS.getAUnicorn = function (array, f) {
		var found = array.filter(f);

		return (found.length > 0) ? found[0] : null;
	};

	PoneyJS.makeALittlePoney = function (array, f, initial) {
		// TODO : check if the array is defined

		return array.reduce(array, f, initial)
	};

	PoneyJS.fromYourPoney = function (message) {
		console.log('Your poney wants to tell you that : ' + message);
	};

	PoneyJS.areUnicornsReal = function (value) {
		return !!value;
	};

	PoneyJS.messageFromSatan = function (error) {
		throw new Error(error);
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = PoneyJS;
	} else if (window !== undefined) {
		window.PoneyJS = PoneyJS;
	}
}());