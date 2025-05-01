const categories = ["Geografía", "Caricaturas", "Ciudad Juárez", "Matemáticas", "Música", "Cultura General"];
const questionImage = document.getElementById("question-image");
const questionVideo = document.getElementById("question-video");
    const questions = {
      "Geografía": [
        { text: "¿Cuál es la capital de India?", answer: " Nueva Delhi"},
        { text: "¿País más pequeño del mundo?", answer: "Vaticano" },
        { text: "¿Qué ciudad fue conocida como Edo hasta 1868?", answer: "Tokio, Japón"  },
        { text: "¿Cuál es la capital de Australia?", answer: "Canberra"},
        { text: "¿Cuál es el segundo país más grande del mundo en superficie?", answer: "Canadá" },
        { text: "¿Cual es el nombre del siguiente Rio:?", answer: "Río Sena", image: "https://shorturl.at/Lq7pQ" },
        { text: "¿Cuál es la capital de Islandia?", answer: "Reikiavik" },
        { text: "¿Qué cordillera separa España de Francia?", answer: "Los Pirineos" }
      ],
      "Caricaturas": [
        { text: "¿Como se llama esta caricatura?", answer: "La vida moderna de Rocko", image:"https://files.catbox.moe/d3sx59.png" },
        { text: "¿Cual es su nombre?", answer: "Spinelli", image:"https://files.catbox.moe/glzxij.png" },
        { text: "¿Cual es su nombre?", answer: "Marvin el Marciano", image: "https://easydrawingart.com/wp-content/uploads/2023/07/12-marvin-the-martian-drawing-for-kids.jpg" },
        { text: "¿Cual es su nombre?", answer: "Clifford", image:"https://files.catbox.moe/pok19i.png" },
        { text: "¿Cual es su nombre?", answer: "Oliver Atom" ,image:"https://files.catbox.moe/ky6stb.png"},
        { text: "¿Cual es el nombre de esta espatula?", answer: "Espátula Aedrodinamica con Accesorios Sinteticos y Palanca Turbo", image:"https://files.catbox.moe/qbi10c.png" },
        { text: "¿Cual es el nombre de estos 3 pokemon?", answer: "Sceptile, Magcargo, Hariyama, Sableye, Pelipper, Sandslash", image:"https://files.catbox.moe/xs6ahs.png" },
        { text: "¿En el episodio El deseo secreto, Timmy desea en secreto no envejecer nunca. ¿Cuántos años pasan antes de que se den cuenta", answer: "50 años", image:"https://files.catbox.moe/66sia0.png" }
      ],
      "Ciudad Juárez": [
        { text: "¿En donde se encuentra la siguiente escultura?", answer: "Plaza del Mariachi", image: "https://shorturl.at/aMsLt" },
        { text: "¿Cómo se llama el aeropuerto internacional de Ciudad Juárez?", answer: " Aeropuerto Internacional Abraham González" },
        { text: "¿Cuál es la carretera federal que conecta Ciudad Juárez con la ciudad de Chihuahua y continúa hacia el sur del país?", answer: "Carretera Federal 45" },
        { text: "¿Cuántos Walmart hay en total en la ciudad?", answer: "R: 6 Walmart: Plaza Monumental, Gran Patio Zaragoza, Torres del Sur, Ejército Nacional, Francisco Villarreal, Porvenir." },
        { text: "¿Dónde inicia y termina la calle Teófilo Borunda?", answer: "Blvd Oscar Flores y Blvd. Manuel Gómez Morín" },
        { text: "¿Qué número de clínica del IMSS está ubicada en la calle Valentín Fuentes y Ejército Nacional?", answer: "Hospital General de Zona IMSS No. 35" },
        { text: "¿Cuántos y cuáles cruces internacionales hay en un radio de 80 km a la redonda de Ciudad Juárez?", answer: "6 cruces internacionales: Paso del Norte, Córdova–Américas, Stanton–Lerdo, Ysleta–Zaragoza, Santa Teresa–San Jerónimo, Guadalupe–Tornillo." },
        { text: "¿En qué colonia se ubica la casa de Juan Gabriel, ubicada en la calle 16 de Septiembre?", answer: "Colonia Partido Romero" }
      ],
      "Matemáticas": [
        { text: "¿Cuánto es el 25% de 200?", answer: "50" },
        { text: "¿Cuál es el área de un triángulo con base de 10 cm y altura de 12 cm?", answer: "60 cm²" },
        { text: "Si duplicas un número y le sumas 4, el resultado es 18. ¿Cuál es el número?", answer: "7" },
        { text: "¿Cuál es el siguiente número en la secuencia: 5, 11, 17, 23, ___?", answer: "29" },
        { text: "Si la suma de los ángulos interiores de un polígono es 720°, ¿cuántos lados tiene el polígono??", answer: " 6 lados (Hexágono)" },
        { text: "Si x = 3 y y = 12, ¿cuánto vale 2xy + y²?", answer: "216" },
        { text: "Que tienen en comun?", answer: "Son numeros Imaginarios", image:"https://i.ibb.co/MxdS9zhT/Screenshot-2025-04-29-234331.png" },
        { text: "¿Resuelve: 2x+5=3x−2", answer: "x=7" }
      ],
      "Música": [
 
        { text: "Completa la cancion", answer: "Pero no me acuerdo, no me acuerdo Y si no me acuerdo no pasó, eso no pasó", video: "https://files.catbox.moe/1ufldx.mp4" },
        { text: "Completa la cancion:", answer:"Después de ocho horas de andar laborando Desesperanza se siente en el hogar", video: "https://files.catbox.moe/vlnpg6.mp4" },
        { text: "Completa la cancion", answer: "A veces creo oír que me necesitas Y alguna que otra vez siento tu mirar", video:"https://files.catbox.moe/tulzch.mp4" },
        { text: "Completa la cancion", answer: "No, no me voy a morir No voy a cambiar solo porque no estás aquí", video:"https://files.catbox.moe/z7ngqs.mp4" },
        { text: "Completa la cancion", answer: "Me va a buscar en un futuro Una edición especial", video:"https://files.catbox.moe/ojzstv.mp4" },
        { text: "Completa la cancion", answer: "Gimme, gimme, gimme a man after midnight Won't somebody help me chase these shadows away?", video:"https://files.catbox.moe/y6ilku.mp4" },
		{ text: "Completa la cancion", answer: "Tres millone' y pico en las prenda' No hace falta que me comprendan", video:"https://files.catbox.moe/hh625v.mp4" }, 
        { text: "Completa la cancion", answer: "Yo sé que el viento va y viene lejos Mis penas se llevará de veras", video: "https://files.catbox.moe/7apbzt.mp4"}
      ],
      "Cultura General": [
        { text: "¿Cual es el nombre del actor de la pelicula de interestelar?", answer: "Matthew McConaughey", image: "https://www.funcinema.com.ar/wp-content/uploads/2024/12/interestelar.jpg" },
        { text: "¿Como se llama esta escultura de Miguel Angel?", answer: "El David", image:"https://www.infobae.com/resizer/v2/BXZEX7642VCLZEDGMIVPAPF4ZU.jpg?auth=3a3a46bb69ef8f104601c16b513531d15e99e22f1fdf701495bf7132244eb1ed&smart=true&width=992&height=558&quality=85" },
        { text: "¿Como se llama esta obra y quien la pinto?", answer: "La noche estrellada por Vincent van Gogh", image:"https://www.coahuilabibliotecas.gob.mx/images23/16474297505881.jpg" },
        { text: "¿Quien es el?", answer: "Nezahualcoyotl", image: "https://i.blogs.es/b3b0cd/billete_-100_mexico_tipo_d_anverso/1366_2000.jpg" },
        { text: "¿En donde nació Frida Kahlo", answer: "Coyoacán, Mexico City" },
        { text: "¿De que marca es este logotipo?", answer: "Maserati", image:"https://i.pinimg.com/736x/f4/97/e5/f497e55fe7447ae1d2a103ea26d72558.jpg" },
        { text: "¿Cómo se llama el primer álbum de estudio de Shakira, lanzado cuando tenía solo 13 años?", answer: "Magia (1990)" },
        { text: "¿En que estado se encuentra y como se llama el siguiente monumento?", answer: "Monte Rushmore,Dakota del Sur", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mount_Rushmore_detail_view_%28100MP%29.jpg/2880px-Mount_Rushmore_detail_view_%28100MP%29.jpg"}
      ]
    };

    const board = document.getElementById("board");
    const modal = document.getElementById("modal");
    const questionText = document.getElementById("question-text");
    const answerText = document.getElementById("answer-text");
    const answerContent = document.getElementById("answer-content");
    const showAnswerButton = document.getElementById("show-answer");
    const modalButtons = document.getElementById("modal-buttons");
    const close = document.getElementById("close");

    let currentCategory = null;
    let currentIndex = null;
    let currentValue = 0;
    let currentCell = null;
    let currentTeam = 1;
    const score1 = document.getElementById("score1");
    const score2 = document.getElementById("score2");

    function createBoard() {
      categories.forEach(category => {
        const header = document.createElement("div");
        header.classList.add("cell");
        header.textContent = category;
        header.style.cursor = "default";
        header.style.backgroundColor = "var(--disabled)";
        board.appendChild(header);
      });

      for (let i = 0; i < 8; i++) {
        categories.forEach(category => {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          const value = (i + 1) * 100;
          cell.textContent = `${value}`;
          cell.addEventListener("click", () => {
            if (!cell.classList.contains("used")) {
              showQuestion(category, i, value, cell);
            }
          });
          board.appendChild(cell);
        });
      }
    }

    function showQuestion(category, index, value, cell) {
      currentCategory = category;
      currentIndex = index;
      currentValue = value;
      currentCell = cell;

      const question = questions[category][index];
      questionText.textContent = question.text;
      answerContent.textContent = question.answer;
	  if (question.special) {
  document.querySelector(".modal-content").style.backgroundColor = "red";  // Cambia el fondo a rojo
} else {
  document.querySelector(".modal-content").style.backgroundColor = "#DCDCDC";  // Restaura el fondo original
}

if (question.image) {
  questionImage.src = question.image;
  questionImage.classList.remove("hidden");

  questionVideo.classList.add("hidden");
  questionVideo.src = "";
} else if (question.video) {
  questionVideo.src = question.video;
  questionVideo.classList.remove("hidden");

  questionImage.classList.add("hidden");
  questionImage.src = "";
} else {
  questionImage.classList.add("hidden");
  questionImage.src = "";
  questionVideo.classList.add("hidden");
  questionVideo.src = "";
}
      answerText.classList.add('hidden');
      showAnswerButton.classList.remove('hidden');
      modalButtons.classList.add('hidden');
      modal.classList.remove("hidden");
    }

    function showAnswer() {
      answerText.classList.remove('hidden');
      showAnswerButton.classList.add('hidden');
      modalButtons.classList.remove('hidden');
    }

    function answer(isCorrect) {
      if (isCorrect) {
        if (currentTeam === 1) {
          score1.textContent = parseInt(score1.textContent) + currentValue;
        } else {
          score2.textContent = parseInt(score2.textContent) + currentValue;
        }
      }
      currentTeam = currentTeam === 1 ? 2 : 1;
      currentCell.classList.add("used");
      modal.classList.add("hidden");
    }

    close.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    createBoard();
