const tinderUser = new Object()
tinderUser.id ="123"
tinderUser.name ="krishna"
tinderUser.isLoggedIn =true
console.log(tinderUser);
const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName: {
            firstName : "Balireddy",
            lastName: "Krishna",
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);
const users = [
    {
        id: 1,
        email: "qQ@gmail.com"
    },
    {
        id: 2,
        email: "qQ@gmail.com"
    },
    {
        id: 3,
        email: "qQ@gmail.com"
    }
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js name Hindi",
    price: 999,
    courseInstructor: "Ram"
}

const {courseInstructor: instructor} = course
console.log(instructor);


