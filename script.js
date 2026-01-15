async function enviarPregunta() {
  const preguntaInput = document.getElementById("pregunta");
  const respuestaDiv = document.getElementById("respuesta");

  const pregunta = preguntaInput.value;

  if (!pregunta) {
    respuestaDiv.innerText = "Por favor escribe una pregunta.";
    return;
  }

  respuestaDiv.innerText = "Pensando...";

  try {
    const response = await fetch("http://localhost:5678/webhook-test/chat-ia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pregunta })
    });

    const data = await response.json();
    respuestaDiv.innerText = data.respuesta;
  } catch (error) {
    respuestaDiv.innerText = "Error al conectar con el asistente IA.";
  }
}

