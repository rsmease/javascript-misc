function greet(myName, yourName){
  return "Hello " + yourName + ", my name is " + myName;
}

class Person {
  constructor(name) {
    this.name = name;
  }

  greet(otherName) {
    return "Hello " + otherName + ", my name is " + this.name;
  }
}
