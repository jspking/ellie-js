'use strict'

// async & await
// clear style of useing promise :)

// 1. async
async function fetchUser() {
    // do network request in 10 secs.....
    return 'ellie'
}

const user = fetchUser()
user.then(console.log)
console.log(user)

// 2. await 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
    await delay(1020)
    return '🍎️'
}

async function getBanana() {
    await delay(1000)
    return '🍌️'
}
/*  // 콜백 지옥 버전
function pickFruits() {
    return getApple().then(apple=> {
        return getBanana().then(banana => `${apple} + ${banana}`)
    })
}
pickFruits().then(console.log)
*/

/*  banana를 가지러 가기 전에 apple 가져오는 작업이 완료 되어야 하는 단점이 있다. 직렬적으로 수행된다.
async function pickFruits() {
    const apple = await getApple()
    const banana = await getBanana() 
    return `${apple} + ${banana}`
}
pickFruits().then(console.log)
*/

/* 병렬처리 방법
async function pickFruits() {
    // promise를 생성하면 바로 실행된다. 그러므로, getApple 이 실행되고 그 결과를 기다리지 않고, 바로 getBanana를 실행한다.
    const applePromise = getApple()
    const bananaPromise = getBanana() 
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
pickFruits().then(console.log)
*/
/*
// 3. userfule Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}
pickAllFruits().then(console.log)
*/

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log)
