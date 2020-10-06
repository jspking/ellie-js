'use strict'

// Javascript is synchronous.
// Execute the code block by order after hoisting.

// hoisting: var, function 정의가 파일의 제일 위로 올라가는 것.
console.log('1')
setTimeout(function() {
    console.log('2')
}, 1000)
console.log('3')