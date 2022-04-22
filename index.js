console.log("Working");
//Write one example explaining how you can write a callback function 

const addLoc = (nameofLocation) =>{
    return ("im Adi from " + nameofLocation);
}
const address = (location,callbackFunction)=>{
    console.log(callbackFunction(location));
}
address("Tripura",addLoc);

//Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

const printNumber = () => {
    console.log("showing Numbers");
    setTimeout(()=>{
        console.log("1");

        setTimeout(()=>{
            console.log("2");

            setTimeout(()=>{
                console.log("3");

                setTimeout(()=>{
                    console.log("4");

                    setTimeout(()=>{
                        console.log("5");

                        setTimeout(()=>{
                            console.log("6");
                        },1000 );
                    },1000 );
                },1000 );
            },1000 );
        },1000 );
    },1000 );
}
printNumber();

//Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

let promise = new Promise((resolve,reject) =>{
    resolve();
})
promise.then(()=>{
    setTimeout(()=>{
        console.log("a");
    },1000);
}).then(()=>{
    setTimeout(()=>{
        console.log("b");
    },2000);
}).then(()=>{
    setTimeout(()=>{
        console.log("c");
    },3000);
}).then(()=>{
    setTimeout(()=>{
        console.log("d");
    },4000);
})


//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let promise1 = (arg) => new Promise((resolve,reject)=>{
    if (arg == "yes"){
        return resolve();
    } 
    else{
        return reject();
    }
})

promise1("yes").then(()=>{
    console.log("promise Resolve");
}).catch(()=>{
    console.log("Promise Rejected");
})

//Create examples to explain async await function

async function  tryingPromises(){
    console.log("Inside the function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
}
 console.log("Before calling the function");
 let data = tryingPromises();
 console.log("After calling the function");
 console.log(data);
 data.then((res)=>{
     console.log(res);
 });
 console.log("End of code");
