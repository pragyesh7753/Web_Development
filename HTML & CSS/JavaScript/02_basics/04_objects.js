// const tinderUser = new Object() // Singleton Object
const tinderUser = {}  //Non Singleton Object


tinderUser.id = "123abc"
tinderUser.name = "Alice"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pragyesh",
            lastname: "Seth"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

const users = [
    {

    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {

    },
    {

    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

// const { courseInstructor } = course
const { courseInstructor: instructor } = course
console.log(instructor);


// const navbar=({company})=>{

// }

// navbar(company="pks")  // destructuring

// {
//     "name": "pragyesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]