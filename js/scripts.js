var convert = function(gallons){
  return gallons * 3.78541;
};
var gallons = parseInt(prompt('Enter mass in Gallons: '));
alert('You have converted ' + gallons + ' gallons to ' + convert(gallons) + ' Litres.');
