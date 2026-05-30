
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

        changeImage("capo.png");

        title.innerHTML = "MISION Y VISION";

        description.innerHTML =
        "Visión Ser responsable, profesional y honesto, llegar a tener una empresa de las importantes, buen padre de familia, todo bajo los valores y principios y mi Misión es Ser un universitario comprometido y ayudar en el bienestar social mediante la educación actuando con integridad y responsabilidad.";

        panelImage.src =
        "capo.png";
    }

    if(part === "puerta1"){

        changeImage("puerta1izq.png");

        title.innerHTML =
        "PRINCIPIOS Y VALORES";

        description.innerHTML =
        "Principios son Respeto: Respetando a mis padres, hermanos, mayores y a todas las personas; seguir con humildad aun cuando culmine mis estudios, tenga mi negocio y cumpla mis metas; cumpliendo con todo lo que se me asigne en la vida estudiantil, laboral, familiar y cualquier actividad. Cumplir a cabalidad con todo y nunca caer en algo deshonesto, continuar diciendo la verdad sea como sea y nunca perder la confianza que me han dado todas las personas.";

        panelImage.src =
        "puerta1izq.png";
    }

    if(part === "puerta2"){

        changeImage("puerta2izq.png");

        title.innerHTML =
        "AREAS DE APOYO";

        description.innerHTML =
      "Ciudadana, Espiritual, Sociocultural <br><br> Intelectual, Física, Emocional, Trabajo, Financiera, Familia";
        panelImage.src =
        "puerta2izq.png";
    }

    if(part === "puerta3"){
        
        changeImage("puerta3dere.png");
        
        title.innerHTML =
        "OBJETIVOS DE META";

        description.innerHTML =
        "Mi visión: Ser profesional, honesto y formar una familia con valores.<br><br>Mi objetivo: Graduarme, emprender y apoyar a mi familia.<br><br>Corto plazo: Aprobar estudios y ahorrar. Fortalezas: responsabilidad. Debilidades: distracciones. Principios: respeto.<br><br>Mediano plazo: Continuar la universidad y emprender. Fortalezas: esfuerzo. Debilidades: inseguridad. Principios: perseverancia.<br><br>Largo plazo: Graduarme, tener una empresa y ayudar a mis padres. Fortalezas: liderazgo. Debilidades: estrés. Principios: integridad y responsabilidad.";
        panelImage.src =
        "puerta3dere.png";
    }

    if(part === "puerta4"){

        changeImage("puerta4dere.png");

        title.innerHTML =
        "ESTRATREGIAS";

        description.innerHTML =
       "A corto plazo: Organizarme y ahorrar.<br><br>A mediano plazo: Estudiar y emprender.<br><br>A largo plazo: Trabajar con responsabilidad y alcanzar mis metas.";
        panelImage.src =
        "puerta4dere.png";
    }

    if(part === "baul"){

        changeImage("baul.png");

        title.innerHTML = "CRONOGRAMA";

        description.innerHTML =
        "01	Aprobar mis estudios universitarios	 Jun2026,  02 Ser más responsable y disciplinado May2026,03	Ahorrar dinero para mi futuro Jun2026, 04 Obtener experiencia laboral Jun2026,05 Continuar la universidad Feb2027,06	Empezar mi negocio propio Sep2028,07 Cierre de Pensum Nov2030,08 Tener una empresa estable Ene2030";

        panelImage.src =
        "baul.png";
    }

}

function closePanel(){

    panel.classList.remove("active");

    changeImage("carro2.png");

}
