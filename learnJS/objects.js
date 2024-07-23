// objects creating
// objects contains properties

const student ={
    name : "Anjineyulu",
    place : "bangalore",
    age : 30,
    college : "sdgs college"
}
 
console.log(student.name)
console.log(student.age)

// 0r

console.log(student['name'])
console.log(student['age'])

// we can modify the values of object properties

student.place = "hyderabad"
//or
student['place'] = "hyderabad"

console.log(student.place)

// we can delete the properties of object 

delete student.college
// or
delete student['college']

console.log(student.college)

// we can add the properties to the object also

student['firstname'] = "thimmarayappa"
student['lastname'] = "anjineyulu"

// let me print student properties

console.log(student)

