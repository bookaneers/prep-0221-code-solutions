var person = {
  firstName: 'Fernando',
  lastName: 'Figueiredo',
  hobby: 'Listen to vinyl records'
};
var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
person.job = 'Business Consultant';
console.log('The person\'s current job is:', person.job);
person.previousJob = 'Business Analyst';
console.log('The person\'s previous job was:', person.previousJob);
console.log('The complete person object:', person);

var myCar = {
  make: 'GM',
  model: 'Silverado',
  year: 2008
};
console.log('Car information:', myCar);
myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ' and I drive a ' +
  myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model']);
myCar['color'] = 'Blue';
console.log('Full car information:', myCar);
