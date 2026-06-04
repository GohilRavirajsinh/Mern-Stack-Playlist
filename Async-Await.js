// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function mains () {
    
    console.log("Loading modules")
    
    console.log("Do Something else")
    
    console.log("Load Data")
    
    let data = await getData()
    
    // Using Async Await
    console.log(data)
    
    console.log("Process Data")
    
    console.log("task 2")
}
mains()
// data.then((v) => {
//     console.log(data)
    
//     console.log("Process Data")
    
//     console.log("task 2")
// })