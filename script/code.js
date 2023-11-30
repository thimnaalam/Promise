let promise = new Promise ((resolve, reject)=> {
    let numb1 = +prompt("Enter first number")
    let numb2 = +prompt("Enter second number")
    let sum = numb1 + numb2;
    if ((typeof numb1) &&( numb2 == 'number')){ 
        resolve (`The sum is ${sum}`)

    }
    reject(`${numb1} or ${numb2} is not a number`)
})
promise.then(
    completed=> console.log(completed),
    rejected=> console.log(rejected)
    )