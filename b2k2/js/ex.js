// document.addEventListener('DOMContentLoaded', async function () {
//     let ContainerProduct = document.querySelector(".container_product");
//     async function getProducts() {
//       let product = await fetch(`https://60ae0d5e80a61f00173324bc.mockapi.io/products`)
//       return await product.json()
//     }
//     console.log(getProducts());
//     async function getProductsHTML() {
//       let prsData = await getProducts();
//       console.log(prsData);
//       let allProductsHTML = '';
//       if (prsData.length) {
//         for (let j = 0; j < prsData.length; j++) {
//           if (prsData[j].image === "") {
//             console.log(prsData[j]);
//             allProductsHTML += `<div class="product">
//           <img src="${prsData[1].image}" alt="${prsData[j].name}">
//           <div class="card-body">
//             <h3><b>Name</b>: ${prsData[j].name}</h3>
//             <p><b>Error</b>: ${prsData[j].errorDescription}</p>
//             <p><b>SKU</b>: ${prsData[j].sku}</p>
//             <p><b>ID</b>: ${prsData[j].id}</p>
//             <p><b>Color</b>: 0</p>
//           </div>
//         </div>`;
//           } else {
//             console.log(prsData[j]);
//             allProductsHTML += `<div class="product">
//         <img src="${prsData[j].image}" alt="${prsData[j].name}">
//         <div class="card-body">
//           <h3><b>Name</b>: ${prsData[j].name}</h3>
//           <p><b>Error</b>: ${prsData[j].errorDescription}</p>
//           <p><b>SKU</b>: ${prsData[j].sku}</p>
//           <p><b>ID</b>: ${prsData[j].id}</p>
//           <p><b>Color</b>: 0</p>
//         </div>
//       </div>`;
//           }
//         }
//         ContainerProduct.innerHTML += allProductsHTML;
//       }
//     }
//     getProductsHTML();
//   })










//btvnb1
// function redenderUser(users){
//   //const { data } = users;
//   console.log("users",users);
//   let useStr = "";

//   users.forEach((user) => {
//       console.log(user)
//       useStr += `
//       <div class="abc">
//       <img src="${user.image}">
//        <h2>Name:${user.name}</h2>
//        <p>Error:${user.errorDescription}</p>
//        <p>Sku:${user.sku}</p>
//        <p>ID:${user.id}</p>
//        <p>Color:${user.color}</p>
//        </div>
//       `;
//   console.log(user);

//   });
//   document.getElementById("container_product").innerHTML = useStr;
//   console.log(useStr);
// }
// function getData(url,callback){
//   fetch(url)
//   .then((result) => 
//       result.json()
//   )
//   .then((data)=>{
//       callback(data);
//       console.log(data)
//   })
//   .catch((err)=>{
//       console.log("Loi");
//   })
// }
// function redenderProduct(products){
//   console.log("product",products);
// }

// getData("https://60ae0d5e80a61f00173324bc.mockapi.io/products",redenderUser);

//btvn b2

let timeEL = document.getElementById("time");
let startEL = document.getElementById("startBtn");
let pauseEL = document.getElementById("pauseBtn");
let stopEL = document.getElementById("stopBtn");
let currentTime = 0;
let interval;

function formatTime(seconds){
  let m = Math.floor(seconds/60);
  let s = seconds % 60;
  return `${m}:${s}`;
}


// timeEl.textContent = currentTime;

startEL.addEventListener("click", () => {
if (interval) {
    return;
}
interval = setInterval(() => {
    currentTime++;
    timeEL.textContent = formatTime(currentTime);
  }, 1000);
});

pauseEL.addEventListener("click",() =>{
  if (interval) {
    clearInterval(interval);
    interval = null;
}
})

stopEL.addEventListener("click", () => {
  currentTime = 0;
  timeEL.textContent =  formatTime(currentTime);
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
});

