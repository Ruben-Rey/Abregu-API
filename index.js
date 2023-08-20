const card = document.getElementById("card");
const productos = document.getElementById("productos");
const navbar = document.getElementById("navbar");

const urlBD = "./bbdd.json";

fetch( urlBD )
    .then( (respuesta) => respuesta.json())
    .then( (data)=>{
        CreateHeader(data);
        RecorerProductos(data.productos);
        RecorerNavbar(data.productos);
    });

function CreateHeader(data){

    let div = document.createElement("div");
    div.className = "contenedor";

    const contenido = `
        <h2>Empresa : ${data.empresa}</h2>
        <p>Empresa : ${data.ruc}</p>

        <p>Empresa : ${data.log}</p>
    `;
    div.innerHTML= contenido;
    card.appendChild(div);
}

function RecorerProductos(data){
    let categoriaB = data.categoriaB;

    categoriaB.forEach( (item) => {
        
        CreateCard(item);

    });
}

function CreateCard(item){

    let div = document.createElement("div");
    div.className = "contenedor";

    // if(item.caracteristicas.alto === undefined){
    //     item.caracteristicas.alto = " ";
    // }

    // if(item.caracteristicas.ancho === undefined){
    //     item.caracteristicas.ancho = " ";
    // }

    const contenido = `
        <h2>Modelo : ${item.modelo}</h2>
        <p>Marca : ${item.marca}</p>

        <p>Cantidad : ${item.cantidad}</p>
        <p>Precio : ${item.precio}</p>
        <p>Alto : ${item.caracteristicas.alto}</p>

        <p>Ancho : ${item.caracteristicas.ancho}</p>
    `;
    div.innerHTML= contenido;
    navbar.appendChild(div);
}



function RecorerNavbar(data){
    let categoriaB = data.categoriaB;

    categoriaB.forEach( (item, index) => {
        if (item.tipo === "A"){
            if (index < 1){
                CreateCard(item);
            }
        }

    });
}