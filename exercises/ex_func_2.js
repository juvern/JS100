function calculateBMI(heightInCentimeters, weightInKilograms) {
	let heightInMeters = heightInCentimeters / 100;
	return (weightInKilograms / (heightInMeters**2)).toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"