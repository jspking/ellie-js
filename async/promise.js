'use strict'

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejectec
// Procuder vs Consumer

// 1. Producer
// when new Promise is created. the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing somethind....')
    setTimeout(() => {
        resolve('crong')
        // reject(new Error('no network'))

    }, 2000)
})


// 2. Consumers: then, catch, finally

promise //
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally')
    })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000)
})

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000)
    })
})
.then(num => console.log(num))


// 4. Error Handlingn -- 4-1 테스트를 위해서 주석처리 했다. 
// const getHen = () => 
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve('🐔️'), 1000)
//     })

// const getEgg = hen => 
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${hen} => 🥚️`), 1000)
//     })

// const cook = egg => 
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${egg} => 🍤️`), 1000)
//     })

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))

// 위의 것을 아래 처럼 축약해서 사용할 수 있다.
// getHen() 
//     .then(getEgg)
//     .then(cook)
//     .then(console.log)


// 4-1. Error handling example
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔️'), 1000)
    })

const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚️`)), 1000)
    })

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍤️`), 1000)
    })

getHen()
    .then(hen => getEgg(hen))
    .catch(error => {
        return '🥖️'
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
