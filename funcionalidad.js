
const panel =
document.getElementById("panel");

const car =
document.getElementById("car");

const title =
document.getElementById("title");

const description =
document.getElementById("description");

const panelImage =
document.getElementById("panelImage");

function changeImage(newImage){

    car.classList.add("fade");

    setTimeout(()=>{

        car.src = newImage;

        car.classList.remove("fade");

    },300);

}

function showInfo(part){

    panel.classList.add("active");

    if(part === "capo"){

        changeImage("img/capo.png");

        title.innerHTML = "CAPÓ";

        description.innerHTML =
        "Capó de diseño aerodinámico con líneas agresivas que realzan la deportividad del vehículo.";

        panelImage.src =
        "img/capo.png";
    }

    if(part === "puerta1"){

        changeImage("img/puerta1izq.png");

        title.innerHTML =
        "PUERTA DELANTERA";

        description.innerHTML =
        "Puertas deportivas con diseño aerodinámico y apertura premium.";

        panelImage.src =
        "img/puerta1izq.png";
    }

    if(part === "puerta2"){

        changeImage("img/puerta2izq.png");

        title.innerHTML =
        "PUERTA TRASERA";

        description.innerHTML =
        "Amplio espacio interior con acabados deportivos.";

        panelImage.src =
        "img/puerta2izq.png";
    }

    if(part === "puerta3"){

        changeImage("img/puerta3dere.png");

        title.innerHTML =
        "PUERTA DERECHA";

        description.innerHTML =
        "Sistema de apertura suave y materiales premium.";

        panelImage.src =
        "img/puerta3dere.png";
    }

    if(part === "puerta4"){

        changeImage("img/puerta4dere.png");

        title.innerHTML =
        "PUERTA TRASERA DERECHA";

        description.innerHTML =
        "Comodidad y estilo en cada detalle.";

        panelImage.src =
        "img/puerta4dere.png";
    }

    if(part === "baul"){

        changeImage("img/baul.png");

        title.innerHTML = "BAÚL";

        description.innerHTML =
        "Gran capacidad de almacenamiento ideal para viajes y uso diario.";

        panelImage.src =
        "img/baul.png";
    }

}

function closePanel(){

    panel.classList.remove("active");

    changeImage("img/carro2.png");

}
