var names = ['Anton', 'Bea', 'Carl'];

var person = {
  name: 'P',
  greet: function () { names.forEach((name) => console.log(this.name + ' says hi to ' + name)) }
};

person.greet();



var base = {
  number: 1,
  increase: function () { numbers.forEach((number) => console.log(this.number + number)) }
}

base.increase();
