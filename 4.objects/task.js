function Student(name, gender, age) {
    // Ваш код
      this.name = name;
      this.gender = gender;
      this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  if (this.subject === undefined){
    this.subject = subjectName;
  }
}

Student.prototype.addMark = function (...mark) {
  if (this.marks === undefined){
    this.marks = [...mark];
  }
  else{
    this.marks.push(...mark);
  }
}

Student.prototype.exclude = function (reason){
  if (this.excluded === undefined){
    delete this.subject; 
    delete this.marks;
    this.excluded = reason;
  }
  
}
// ваш код для остальных методов

Student.prototype.getAverage = function (){
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++){
    sum += this.marks[i];
  }
  this.average = sum / this.marks.length;
}
