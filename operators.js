'use strict'

const value1 = false
const value2 = false

console.log(`or: ${value1 || value2 || check()}`)

console.log(`and: ${value1 || value2 || check()}`)

function check() {
    for (let i =0 ; i < 10; i++ ) {
        console.log('!!')
    }
    return true
}

/*
// nullableObject && nullableObject.something

if ( nullableObject != null) {
    jullableObject.something
}
*/

const stringFive = '5'
const numberFive = 5

console.log(stringFive == numberFive)
console.log(stringFive != numberFive)

console.log(stringFive === numberFive)
console.log(stringFive !== numberFive)

const ellie1 = {name: 'ellie'}
const ellie2 = {name: 'ellie'}
const ellie3 = ellie1
console.log(ellie1 == ellie2)
console.log(ellie1 === ellie2)
console.log(ellie1 === ellie3)

console.log(`0 == false: ${0 == false}`)
console.log(`0 === false: ${0 === false}`)
console.log(`'' == false: ${'' == false}`)
console.log(`'' === false: ${'' === false}`)
console.log(`null == undefined: ${null == undefined}`)
console.log(`null === undefined: ${null === undefined}`)