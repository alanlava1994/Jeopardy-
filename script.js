  const categories = [  "Caricaturas/Anime", "Ciudad Juárez/El Paso", "Matemáticas/Ciencias", "Música", "Cultura General"];
  const questionImage = document.getElementById("question-image");
  const questionVideo = document.getElementById("question-video");
  const questions = {

    "Caricaturas/Anime": [
      { text: "¿Como se llama este personaje", answer: "Cometin", image:"https://img.mvsnoticias.com/2HlYdCOc_ioyPU2ANM5i0_xSG2R5LuMZYOWDqLmPMxI/rs:fit:2000:0:0/q:65/aHR0cHM6Ly9hc3NldHMubXZzbm90aWNpYXMuY29tL2ZvdG9ncmFmaWFzLzIwMjQvMi8xLzU5NjMyMC5wbmc" },
      { text: "¿En que se transforma el siguiente personaje de Ranma 1/2 al mojarse?", answer: "Un Gato", image:"https://static.wikia.nocookie.net/ranma/images/2/24/Shampoo_Anime.jpg/revision/latest?cb=20160728230924&path-prefix=es" },
      { text: "¿Que # de unidad de EVA maneja Asuka?", answer: "EVA-02", image: "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2026/01/neon_genesis_evangelion_asuka_langley_soryu_eva-02.jpg?resize=860%2C484&ssl=1" },
      { text: " ¿Qué deporte le gusta a Arnold?", answer: "Beisbol" ,image:"https://img.buzzfeed.com/buzzfeed-static/static/2021-02/10/16/enhanced/aef01414c8be/enhanced-9787-1612976379-1.jpg?output-format=auto&output-quality=auto"},
      { text: "¿Cual es el nombre completo de Carlitos?", answer: "Carlitos Finster", image:"https://files.catbox.moe/2iwyya.png" },
      { text: "¿Cual fue la primer pelicula Animada de Barbie?", answer: "Barbie en el Cascanueces", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Barbie_Logo.svg/3840px-Barbie_Logo.svg.png" }
    ],
    "Ciudad Juárez/El Paso": [
      { text: "¿Qué equipo representaba a Juárez en la Primera División de México entre 2008 y 2010 ?", answer: "Los Indios de Ciudad Juárez."},
      { text: "¿En donde se utilizaban estas llaves?", answer: " Moyland", image:"https://files.catbox.moe/z48kfm.png" },
      { text: "En donde se encuentra la siguiente ubicacion?", answer: "Glorieta Carlos Amaya y Aztecas" ,image: "https://files.catbox.moe/f27qbj.png" },
      { text: "¿Cuál es el Super Mercado Gonzalez que queda mas cerca de la casa de Maye y Saul?", answer: "Jilotepec Manuel J Clouthier", image:"https://yt3.googleusercontent.com/ytc/AIdro_ngokbrpcya5qmWjLEmkFDBayTOuJkCzl0MNyjLvq9q7A=s900-c-k-c0x00ffffff-no-rj" },
      { text: "¿Cuantos Walmart SUPERCENTER ubicados en West Side existen y donde estan?", answer: "2: Mesa Street y North Desert Av", image:"https://dnclcgcvl4f14.cloudfront.net/siila-cm/prd/1280w/7404-1685638375234.jpg" },
      { text: "¿En donde se encuentra el siguiente lugar?", answer: "Bassett", image:"https://files.catbox.moe/boagln.jpg" }
    ],
    "Matemáticas/Ciencias": [
      { text: "Resuelve el siguiente problema", answer: "1",image:"https://www.orientacionandujar.es/wp-content/uploads/2019/03/calculo-mental-figuras-colores_page-0002.jpg" },
      { text: "Si un número aumenta 20% y después disminuye 20%, ¿queda igual, mayor o menor que el original?", answer: "Menor" },
      { text: "Resuelve el siguiente problema", answer: "24" , image:"https://la100.cienradios.com/resizer/v2/AWOIDWMKHZGY3AJU6LJJ7UHM64.jpg?auth=48165bbeaec039b78e7e9fccc0e8aeaac08fec3addc880c4b28e2b7c067bbb74&width=1440&height=720" },
      { text: "¿Qué planeta posee actualmente el mayor número conocido de lunas?", answer: "Saturno" ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sistema_Solar_tama%C3%B1o_a_escala.svg/330px-Sistema_Solar_tama%C3%B1o_a_escala.svg.png?utm_source=es.wikibooks.org&utm_campaign=index&utm_content=thumbnail" },
      { text: "Cual es la formula del teorema de Pitágoras?", answer: "a² + b² = c²", image:"https://files.catbox.moe/stjik2.png" },  
      { text: "¿Qué partícula subatómica determina qué elemento químico es un átomo?", answer: "Proton", image:"https://www.electrontools.com/Home/WP/wp-content/uploads/2019/04/atomo-modelo1.jpg" }
    ],
    "Música": [
      
      { text: "Completa la cancion", answer: "Ya no soy, ya no soy La infantil criatura, la inocencia se acabó (eh, eh, eh) Ya no soy, ya no soy La de ese cuerpo extraño, ahora siente el corazón, eh", video: "https://files.catbox.moe/y2dswd.mov" },
      { text: "Completa la cancion:", answer:"El sábado que te besé Te hubiera tenido hasta el lunes No supe que inventar para que no se vaya De mis manos tu perfume", video: "https://files.catbox.moe/yj0j8q.mov" },
      { text: "Completa la cancion", answer: "Baila, baila esta cumbia Un ritmo, ritmo sin igual Nadie se quede sentado Todos, vamos a bailar", video:"https://files.catbox.moe/iccrgn.mov" },
      { text: "Completa la cancion", answer: "No me preguntes por qué He sido bueno contigo Solo sé que eres, mi religión Qué me importa si le llaman Fanatismo", video:"https://files.catbox.moe/thk9tv.mov" },
      { text: "Completa la cancion", answer: "Y muy tarde comprendí Que no te debía amar Porque ahora pienso en ti Más que ayer, mucho más", video:"https://files.catbox.moe/uf5vwx.mov" },
      { text: "Completa la cancion", answer: "Chiquitita, you and I cry But the sun is still in the sky and shinin' above you Let me hear you sing once more like you did before", video:"https://files.catbox.moe/hk5sz9.mov" }
    ],
    "Cultura General": [
      { text: "¿Qué año llegó Cristóbal Colón a América?", answer: "1492", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Columbus_Taking_Possession.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled" },
      { text: "¿Qué selección nacional ha ganado más Copas Mundiales de Fútbol?", answer: "Brasil", image:"https://library.sportingnews.com/styles/crop_style_16_9_1200_webp/s3/2025-11/World-Cup-2026-umbrella-FTR-%281%29.jpg.webp?itok=ONyifzqE" },
      { text: "¿Cómo se apellida Soraya?", answer: "Montenegro", image:"https://img.buzzfeed.com/buzzfeed-static/static/2020-05/26/17/enhanced/0d6633c92f9c/enhanced-1205-1590514042-33.jpg?output-format=auto&output-quality=auto" },
      { text: "¿Qué edificio gubernamental se encuentra a un costado del Zócalo de la Ciudad de México y es sede del gobierno de la capital?", answer: "Palacio de Gobierno", image: "https://www.ciudadespatrimonio.mx/wp-content/uploads/2024/06/zocalo-cdmx.jpg"},
      { text: "¿Cual de las perdidas se lanzo desde un balcón?", answer: "Paola", image:"https://scontent.fcjs4-1.fna.fbcdn.net/v/t39.30808-6/484530728_1195105108650529_1539336993838533381_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFpfm-Et0oQLhA2IiFz5NzJZRalSdl2yfNlFqVJ2XbJ88Scx3NuFUVS0-te3e2wbWWmS2Ut32x1UgWdmj_YLVPO&_nc_ohc=QuCWP8ff7VMQ7kNvwEeZUQq&_nc_oc=AdokX58EzACdHluG3fKaeTT2kT4KXQVBk21Dgv4jNhKIa90kQrM799nK-r7mgQLC8p6rnMW_KcBDytUy1Vrea4Md&_nc_zt=23&_nc_ht=scontent.fcjs4-1.fna&_nc_gid=V6kPl7YKG_YISdvNsymKNQ&_nc_ss=7b2a8&oh=00_AQKJ-8Yd8o0BhummHQ6syTdwTGz_Qw2Y4YqIjNq2gQxODg&oe=6AA16CB6" },
      { text: "¿Qué objeto compra la Chilindrina para participar en el sorteo de un viaje a Acapulco?", answer: "producto para limpiar cosas de plata ", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94LsqYizv7sHelEdnFT3hjHPc56UBRtz8VWiDeGnxBSvXDupKagDYqtk&s=10" }
    ]
  };
  
 

/* --- Elementos DOM --- */
const board = document.getElementById("board");
const modal = document.getElementById("modal");
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const answerContent = document.getElementById("answer-content");
const modalButtons = document.getElementById("modal-buttons");
const close = document.getElementById("close");
const modalContent = document.querySelector(".modal-content");

const timerDisplay = document.getElementById("timer");
const stealBanner = document.getElementById("steal-banner");
const stealUI = document.getElementById("steal-ui");
const stealYesBtn = document.getElementById("steal-yes");
const stealNoBtn = document.getElementById("steal-no");

/* --- Estado --- */
let currentCategory = null;
let currentIndex = null;
let currentValue = 0;
let currentCell = null;
let currentTeam = 1;
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

/* --- Timer --- */
let timerDuration = 25;
let timerInterval;

/* --- Robo --- */
let stealPending = false;
let stealingTeam = null;

/* --- Crear tablero --- */
function createBoard() {
  categories.forEach(category => {
    const header = document.createElement("div");
    header.classList.add("cell");
    header.textContent = category;
    header.style.cursor = "default";
    header.style.backgroundColor = "var(--disabled)";
    board.appendChild(header);
  });

  for (let i = 0; i < 6; i++) {
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

/* --- Mostrar pregunta --- */
function showQuestion(category, index, value, cell) {
  currentCategory = category;
  currentIndex = index;
  currentValue = value;
  currentCell = cell;
  updateActiveTeam();

  const question = questions[category][index];
  questionText.textContent = question.text;
  answerContent.textContent = question.answer;

  setModalTeamColor(currentTeam);

  if (question.image) {
    questionImage.src = question.image;
    questionImage.classList.remove("hidden");
    questionVideo.classList.add("hidden");
  } else if (question.video) {
    questionVideo.src = question.video;
    questionVideo.classList.remove("hidden");
    questionImage.classList.add("hidden");
  } else {
    questionImage.classList.add("hidden");
    questionVideo.classList.add("hidden");
  }

  // Reset
  hideStealUI();
  answerText.classList.add('hidden');
  modalButtons.classList.remove('hidden');
  modal.classList.remove("hidden");

  // Inicia el temporizador
  startTimer();
}

/* --- Botones Correcto/Incorrecto --- */
function confirmAnswer(isCorrect) {
  stopTimer();

  // bloquear botones para evitar doble click
  modalButtons.classList.add('hidden');

  if (isCorrect) {
    // Si acertaron: mostrar la respuesta, sumar puntos y mostrar OK.
    answerText.classList.remove('hidden');

    if (currentTeam === 1) score1.textContent = parseInt(score1.textContent) + currentValue;
    else score2.textContent = parseInt(score2.textContent) + currentValue;

    showOkButton();
  } else {
    // Si fallaron: NO mostrar la respuesta aún. Iniciar flujo de robo.
    startStealFlow();
  }
}


/* --- Flujo de robo --- */
function startStealFlow() {
  stealPending = true;
  stealingTeam = currentTeam === 1 ? 2 : 1;
  setModalTeamColor(stealingTeam);

  stealBanner.classList.remove('hidden');
  stealUI.classList.remove('hidden');
  stopTimer();

  const stealTextElem = document.getElementById('steal-text');
  stealTextElem.textContent = `ROBO DE PUNTOS — Turno del Equipo ${stealingTeam}`;
}

/* --- Resultado del robo --- */
stealYesBtn.addEventListener('click', () => handleStealResult(true));
stealNoBtn.addEventListener('click', () => handleStealResult(false));

function handleStealResult(wasCorrect) {
  if (!stealPending) return;

  // Si el equipo que robó acertó, sumar puntos a ese equipo
  if (wasCorrect) {
    if (stealingTeam === 1) score1.textContent = parseInt(score1.textContent) + currentValue;
    else score2.textContent = parseInt(score2.textContent) + currentValue;
  }

  // finalizar estado de robo y ocultar UI de robo
  stealPending = false;
  hideStealUI();

  // Mostrar la respuesta AHORA (independientemente de wasCorrect)
  answerText.classList.remove('hidden');

  // Mostrar el botón OK para cerrar y marcar la celda
  showOkButton();
}

/* --- Botón OK para cerrar --- */
function showOkButton() {
  // Si ya existe un OK en el modal, no creamos otro
  const existing = document.getElementById('ok-btn');
    updateActiveTeam();
  if (existing) return;

  const okBtn = document.createElement('button');
  okBtn.id = 'ok-btn';
  okBtn.textContent = "OK";
  okBtn.style.marginTop = "20px";
  okBtn.style.fontSize = "1.5rem";
  okBtn.style.padding = "10px 20px";
  okBtn.onclick = () => {
    finishQuestion();
  };

  document.querySelector(".modal-content").appendChild(okBtn);
}

/* --- Utilidades --- */
function hideStealUI() {
  stealBanner.classList.add('hidden');
  stealUI.classList.add('hidden');
}

function setModalTeamColor(team) {
  // Fondos tenues: rojo para el Equipo 1 y verde para el Equipo 2.
  modalContent.style.backgroundColor = team === 1 ? "#f8d7da" : "#d1e7dd";
}

function finishQuestion() {
  stopTimer();
  hideStealUI();
  stealPending = false;
  stealingTeam = null;

  modal.classList.add('hidden');
  if (currentCell) currentCell.classList.add("used");

  const okBtn = document.getElementById('ok-btn');
  if (okBtn) okBtn.remove();

  currentTeam = currentTeam === 1 ? 2 : 1;
  updateActiveTeam();
}

function startTimer() {
  clearInterval(timerInterval);
  let timeLeft = timerDuration;
  timerDisplay.textContent = `⏱️ ${timeLeft}`;
  timerDisplay.style.color = "green";

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏱️ ${timeLeft}`;

    if (timeLeft <= 3) timerDisplay.style.color = "red";
    else if (timeLeft <= 6) timerDisplay.style.color = "orange";
    else timerDisplay.style.color = "green";

    if (timeLeft <= 0) clearInterval(timerInterval);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

/* --- Cerrar modal manualmente --- */
close.addEventListener("click", () => {
  // Cerrar descarta la pregunta; se marca usada para que no pueda puntuarse otra vez.
  finishQuestion();
});
function updateActiveTeam() {
  const team1 = document.querySelector('.team1');
  const team2 = document.querySelector('.team2');

  if (currentTeam === 1) {
    team1.style.opacity = 1;   // 🔆 Equipo 1 activo
    team2.style.opacity = 0.5; // 🔅 Equipo 2 en espera
    team1.style.transform = "scale(1.1)";
    team2.style.transform = "scale(1)";
  } else {
    team1.style.opacity = 0.5;
    team2.style.opacity = 1;
    team2.style.transform = "scale(1.1)";
    team1.style.transform = "scale(1)";
  }
}

/* --- Inicializar tablero --- */
createBoard();
