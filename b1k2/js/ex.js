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
  function getData(url,callback){
    fetch(url)
    .then((result) => 
        result.json()
    )
    .then((data)=>{
        callback(data);
        console.log(data)
    })
    .catch((err)=>{
        console.log("Loi");
    })
  }
  function redenderProduct(products){
    console.log("product",products);
  }
  
  getData("https://60ae0d5e80a61f00173324bc.mockapi.io/products",redenderUser);
  