// Write your solution below:
// console.log("hello")

let makeUnique = (letterString) =>{
    let newString =""
    for (let i = 0; i < letterString.length; i++) {
    if (newString.includes(letterString[i])) {
    } else {
        newString += letterString[i]
        }
    }
    return newString
}

console.log(makeUnique("hello World"))