'use strict'
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true)
console.log(json)
json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),    
    jump()  {
        console.log(`${this.name} can jump`)
    },
}

json = JSON.stringify(rabbit)
console.log(json)

// replacer 사용하기 1 - array 형식으로 원하는 key 값만 추려내기
console.log('------------------------------- replacer 1')
json = JSON.stringify(rabbit, ["name", "color"]) // 원하는 프로퍼티만 추려서 문자열로 만들 수 있다.
console.log(json)

// replacer 사용하기 2 - key, value쌍을 iteration 하면서 처리하기. 단 return 해 주는 값이 해당 key 값으로 사용된다.
console.log('------------------------------- replacer 2')
json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'ellie' : value
}) // 원하는 프로퍼티만 추려서 문자열로 만들 수 있다.
console.log(json)


// 2. JSON to Object
// parse(json)
console.clear()

json = JSON.stringify(rabbit)
const obj = JSON.parse(json)
console.log(obj)
rabbit.jump()
// 주의사항 1
//obj.jump() <- object를 json으로 나타낼 때 method 는 빼고 되므로 json을 다시 object로 변환했을 때 method는 없다.

// 주의사항 2
console.log(rabbit.birthDate.getDate())
//console.log(obj.birthDate.getDate()) <-- 이것은 에러다.. rabbit의 birthDate 는 Date() 로 생성한 객체이지만, 이것을 stringify 하고 다시 object화 한 것은 string 이기 때문에 에러인 것이다. 

// 위 문제점 해결을 위해서 parse method의 두번째 인자인 reviver 를 사용한다.
const obj2 = JSON.parse(json, (key,value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date(value):value
})
console.log(obj2.birthDate.getDate())


// 유용한 사이트
// http://jsondiff.com/ json 객체 2개를 넣으면 다른 부분을 highlight 해 주는 사이트이다.
// https://jsonbeautifier.org/ 못생긴 json을 이쁘게 format 해서 알려주는 사이트이다.
// https://jsonparser.org/ json 문자열을 넣으면 객체로 표현해 주는 사이트
// https://jsonformatter.curiousconcept.com/ json validator 사이트.