
function sum(num1, num2, callback) {
    callback(num1 + num2);
}


sum(2, 10,(result)=>{
    console.log(`A soma é ${result}`)
})