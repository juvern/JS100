let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

const removeIndex = energy.findIndex((element) => element === 'fossil')

energy.splice(removeIndex,1);
energy.push('geothermal');

console.log(energy);