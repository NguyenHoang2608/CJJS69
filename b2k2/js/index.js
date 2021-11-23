// setTimeout(()=>{
// console.log("Hoc CI")
// },3000) 


// setTimeout(()=>{
//     console.log("di lam ve")
//     setTimeout(()=>{
//         console.log("Hoc CI")
//         setTimeout(()=>{
//             console.log("di ngu")
//             },6000) 
//         },3000) 
//     },1000) 


// //let promise

// let myPromise = new Promise(
//     function(resole,reject){
//         resole();
//     }
// );

// myPromise
// .then(function(){
//     console.log("successful");
// })
// .catch(function(){
//     console.log("fail");
// })
// .finally(function(){
//     console.log("bye bye");
// })


// let myPromise = new Promise(
//     function(resole,reject){
//         // resole(
//         //     [
//         //         {
//         //             id:2,
//         //             name:"mindX",
//         //         },
//         //         {
//         //             id:1,
//         //             name:"Ci",
//         //         },
//         //     ]
//         // );
//         reject(
//             {
//                 code: 404,
//                 mess:"loi 404",
//             },
            
            
//         )
//     }
// );

// myPromise
// .then(function(dl){
//     console.log(dl);
// })

// .catch(function(err){
//     console.log(err);
//     if(err.code === 404){
//         alert("Not found");
//     }
// })

// .finally(function(){
//     console.log("bye bye");
// })
    

// let reg = fetch("https://60ae0d5e80a61f00173324bc.mockapi.io/products");

// reg.then(function(respone){
//     if(respone.ok){
//         return respone.json();
//     }else{
//         console.log("faile");
//     }
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err);
// })


// <img src="${user.image}">
//promise
function redenderUser(users){
    //const { data } = users;
    console.log("users",users);
    let useStr = "";

    users.forEach((user) => {
        console.log(user)
        useStr += `
        <div class="abc">
        <img src="${user.image}">
         <h2>Name:${user.name}</h2>
         <p>Error:${user.errorDescription}</p>
         <p>Sku:${user.sku}</p>
         <p>ID:${user.id}</p>
         <p>Color:${user.color}</p>
         </div>
        `;
    console.log(user);

    });
    document.getElementById("container_product").innerHTML = useStr;
    console.log(useStr);
}
// function getData(url,callback){
//     fetch(url)
//     .then((result) => 
//         result.json()
//     )
//     .then((data)=>{
//         callback(data);
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log("Loi");
//     })
// }
function redenderProduct(products){
    console.log("product",products);
}

getData1("https://60ae0d5e80a61f00173324bc.mockapi.io/products",redenderUser);


// function getData(url,callback){
//     fetch(url)
//     .then((result) => 
//         result.json()
//     )
//     .then((data)=>{
//         callback(data);
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log("Loi");
//     })
// }
// function redenderProduct(products){
//     console.log("product",products);
// }
//Async
async function getData1(url,callback){
    try {
        const request = await fetch(url);
        const response = await request.json();
        callback(response);
    } catch (error) {
        console.log(error);
    }
}