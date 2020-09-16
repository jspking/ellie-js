'use strict'

// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// Object = { key: value}

// 1. Literals and properties
const obj1 = {} // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name)
    console.log(person.age)
}

const ellie = {name: 'ellie', age: 4}
print(ellie)

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true 
console.log(ellie.hasJob)

// can delete properties later
delete ellie.hasJob
console.log(ellie.hasJob)


// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name'])  // <-- computed property
ellie['hasJob'] = true
console.log(ellie.hasJob)

function printValue(obj, key) {
    console.log(obj[key])
}

printValue(ellie, 'name')
printValue(ellie, 'age')


// 3. Property value shorthand

const person1 = {name: 'bob', age:2}
console.log(person1)
const person2 = {name: 'steve', age:3}
const person3 = {name: 'dave', age:4}
const person4 = makePerson('ellie', 30)
console.log(person4)
function makePerson(name, age) {
    return {
        // name: name,
        // age: age,
        // 원래는 위와 같이 하는 것이 맞지만,  value와 key가 위 예제와 같이 이름이 같다면 아래처럼 간단하게 표시할 수 있다.
        name,
        age
    }
}

// 4.Constructor Function
const person5 = new Person('ellie obj', 30)
console.log(person5)
console.log("이거 질문하자. {} 로 만든 객체랑, 아래 함수로 만든 객체랑 출력하면 그 결과 포멧이 다른 이유가???")
function Person(name, age) {
    // this = {}
    this.name = name
    this.age = age
    // return this
}

// 5. in perator: perperty existence check( key in obj)
console.log('name' in ellie)
console.log('age' in ellie)
console.log('random' in ellie)
console.log(ellie.random)

// 6. for.. in vs for.. of
// for (key in obj)
for (const key in ellie) {
    console.log(key)
}

// for (value of interable)
const array = [1,2,3,45]
for (const value of array) {
    console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'}
const user2 = user

console.log(user)

// old way
const user3 = {}
for (const key in user ) {
    user3[key] = user[key]
}
console.clear()
console.log(user3)
user2.name = 'coder'
console.log(user3)

const user4 = {}
Object.assign(user4, user)
console.log(user4)

// another example
const fruit1 = {color:'red'}
const fruit2 = {color:'blue', size:'big'}
const fruit3 = {color:'black'}
const mixed = Object.assign({}, fruit1, fruit2, fruit3)
console.log(mixed)


