//destructuring of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor  1st way

const {courseInstructor: instructor} = course  //renaming can also done this is destructuring

console.log(instructor);

//json apis
// {
//   "name":"hitesh",
// "coursename":"js in hindi",
//  "price":"free"
//}