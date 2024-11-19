let seccionActual = 0;

// Lista de imágenes del robot para cada sección
const robotImages = [
  "robot.png",
  "robot1.png",
  "robot2.png",
  "robot3.png",
  "robot4.png",
  "robot5.png",
];

// Cambia la imagen del robot al avanzar de sección
function cambiarRobot(indice) {
  const robotImg = document.getElementById("robot");
  robotImg.src = robotImages[indice];
}

// Navegar entre secciones
function irSeccion(indice) {
  seccionActual = indice;

  // Actualizar posición del contenedor
  const container = document.getElementById("container");
  container.style.transform = `translateX(-${indice * 100}%)`;

  // Cambiar imagen del robot
  cambiarRobot(indice);
}

// Evaluar el quiz
function evaluarQuiz() {
  let puntuacion = 0;

  const respuestas = {
    pregunta1: "Levadura",
    pregunta2: "Lúpulo",
    pregunta3: "Agua"
  };

  for (let pregunta in respuestas) {
    const seleccion = document.querySelector(`input[name="${pregunta}"]:checked`);
    if (seleccion && seleccion.value === respuestas[pregunta]) {
      puntuacion++;
    }
  }

  const resultado = document.getElementById("quiz-resultado");
  resultado.innerHTML = `<p>Tu puntuación es ${puntuacion}/3.</p>`;

  if (puntuacion === 3) {
    resultado.innerHTML += `<button onclick="irSeccion(6)">Siguiente</button>`;
  } else {
    resultado.innerHTML += `<button onclick="reiniciarQuiz()">Reintentar</button>`;
  }
}

// Reiniciar el quiz
function reiniciarQuiz() {
  document.getElementById("quiz-container").innerHTML = quizHTML;
  document.getElementById("quiz-resultado").innerHTML = "";
}

// Contenido del quiz
const quizHTML = `
  <div>
    <p>1. ¿Qué transforma los azúcares en alcohol?</p>
    <input type="radio" name="pregunta1" value="Levadura"> Levadura<br>
    <input type="radio" name="pregunta1" value="Azúcar"> Azúcar<br>
  </div>
  <div>
    <p>2. ¿Qué ingrediente aporta amargor?</p>
    <input type="radio" name="pregunta2" value="Lúpulo"> Lúpulo<br>
    <input type="radio" name="pregunta2" value="Malta"> Malta<br>
  </div>
  <div>
    <p>3. ¿Qué ingrediente inicia el proceso?</p>
    <input type="radio" name="pregunta3" value="Agua"> Agua<br>
    <input type="radio" name="pregunta3" value="Malta"> Malta<br>
  </div>
  <button onclick="evaluarQuiz()">Enviar Respuestas</button>
`;

// Insertar el contenido del quiz al cargar la página
document.getElementById("quiz-container").innerHTML = quizHTML;

// Bloquear el desplazamiento manual en la página
window.addEventListener("scroll", (e) => {
  window.scrollTo(0, 0);
});
