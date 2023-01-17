const person = {
    age: 20,
    name: "Sarah",
    lastName: 'Conor',
    isAlive: true,    
}

console.log(person['lastName']) 

// console.log(person.age);
// console.log(person.name);
// console.log(person.lastName);
// console.log(person.isAlive);


// for (const key in person) {
//     if (Object.hasOwnProperty.call(person, key)) {
//         console.log('key: ',key)
//         const value = person[key];
//         console.log('value:', value)
//     }
// }


// Object.keys(person).forEach((key)=>{
//     console.log(person[key])
// })



// const myName = true || "Beni"  //return first element if true or last if false
// const myName2 = true && "Beni"  //return last element if true or first if false
// const myName3 = true ?? "Beni"  //return last element if first is undefined or null else return first element
// console.log(myName)
// console.log(myName2)
// console.log(myName3)


// const myNameAgeInArray = [];

// myNameAgeInArray.push('Beni');
// myNameAgeInArray.push(25);

// myNameAgeInArray.forEach((el) => {
//     console.log(el)
// })


// const myArray = ["Beni", "Sarah", 5, true];



// myArray.push('Conor');
// myArray.unshift('blablablabl')
// myArray.shift()
// myArray.pop()
// myArray.push(20)
// myArray.splice(1, 0, 'bububu');
// myArray.splice(1, 1);

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

// myArray.forEach((e) => {
//     console.log(e)
// });

// for (const element of myArray) {
//     console.log(element)
// }


// myArray.map(); //Will speak about them latter
// myArray.filter(); //Will speak about them latter
// myArray.find(); //Will speak about them latter
