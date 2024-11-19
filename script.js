let seccionActual = 0;

function irSeccion(indice) {
  seccionActual = indice;
  const container = document.getElementById('container');
  container.style.transform = `translateX(-${indice * 100}%)`;
}

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
}

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

document.getElementById("quiz-container").innerHTML = quizHTML;
