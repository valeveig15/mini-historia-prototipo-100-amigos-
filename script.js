// ===================================================================================
// REFERENCIAS A ELEMENTOS DEL HTML Y CONFIGURACIÓN INICIAL
// ===================================================================================

let text = document.querySelector("#text");
let form = document.querySelector("#form");
let answer = document.querySelector("#answer");
let restart = document.querySelector("#restart");
let sceneIndicator = document.querySelector("#sceneIndicator");

let escena;

inicio();
answer.focus();

// ===================================================================================
// UTILIDADES
// ===================================================================================

function ocultarForm() {
  form.style.display = "none";
}

function mostrarForm() {
  form.style.display = "flex";
  answer.focus();
}

function ocultarRestart() {
  restart.style.display = "none";
}

function mostrarRestart() {
  restart.style.display = "block";
  restart.focus();
}

function actualizarEscena(nombre) {
  escena = nombre;
  sceneIndicator.textContent = "Escena: " + escena;
}

function finalizarEscena(nombre, contenido) {
  actualizarEscena(nombre);
  text.textContent = contenido;
  ocultarForm();
  mostrarRestart();
}

function opcionInvalida() {
  text.textContent += `

Esa opción no existe. Escribe el número de una de las opciones disponibles.
`;
}

// ===================================================================================
// ENVÍO DEL FORMULARIO
// ===================================================================================

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let respuesta = answer.value.trim();
  answer.value = "";
  answer.focus();

  if (escena === "INICIO") {
    if (respuesta === "1") {
      irConTuAmiga();
    } else if (respuesta === "2") {
      hacerFilaDeLaCantina();
    } else if (respuesta === "3") {
      acercarteAlChico();
    } else if (respuesta === "4") {
      irAlRinconTranquilo();
    } else {
      opcionInvalida();
    }

  } else if (escena === "IR_CON_TU_AMIGA") {
    if (respuesta === "1") {
      sentarteJuntoAElla();
    } else if (respuesta === "2") {
      sentarseApartada();
    } else if (respuesta === "3") {
      ahoraVoy();
    } else {
      opcionInvalida();
    }

  } else if (escena === "SENTADAS_AL_LADO") {
    if (respuesta === "1") {
      respuestaNormal();
    } else if (respuesta === "2") {
      chiste();
    } else if (respuesta === "3") {
      demasiadoCorto();
    } else {
      opcionInvalida();
    }

  } else if (escena === "AHORA_VOY") {
    if (respuesta === "1") {
      hacerFilaDeLaCantina();
    } else if (respuesta === "2") {
      volverConTuAmigaSinComprar();
    } else if (respuesta === "3") {
      acercarteAlChico();
    } else {
      opcionInvalida();
    }

  } else if (escena === "HACER_FILA_DE_LA_CANTINA") {
    if (respuesta === "1") {
      comprarAlgoSalado();
    } else if (respuesta === "2") {
      comprarAlgoDulce();
    } else if (respuesta === "3") {
      comprarAgua();
    } else if (respuesta === "4") {
      escaparDeLaFila();
    } else if (respuesta === "5") {
      preguntarPrecios();
    } else {
      opcionInvalida();
    }

  } else if (escena === "PREGUNTAR_PRECIOS") {
    if (respuesta === "1") {
      comprarAlgoSalado();
    } else if (respuesta === "2") {
      comprarAlgoDulce();
    } else if (respuesta === "3") {
      comprarAgua();
    } else if (respuesta === "4") {
      guardarDinero();
    } else {
      opcionInvalida();
    }

  } else if (escena === "A_DONDE_IR") {
    if (respuesta === "1") {
      volverConTuAmigaConCompra();
    } else if (respuesta === "2") {
      acercarteAlChicoConCompra();
    } else if (respuesta === "3") {
      comerEnRinconTranquilo();
    } else {
      opcionInvalida();
    }

  } else if (escena === "ACERCARTE_AL_CHICO") {
    if (respuesta === "1") {
      ayudarAlChicoABuscar();
    } else if (respuesta === "2") {
      preguntarQuePerdio();
    } else if (respuesta === "3") {
      fingirQuePasabas();
    } else {
      opcionInvalida();
    }

  } else if (escena === "AYUDAR_AL_CHICO_A_BUSCAR") {
    if (respuesta === "1") {
      darseloNormal();
    } else if (respuesta === "2") {
      hacerChisteConElChico();
    } else if (respuesta === "3") {
      ponerteNerviosaConElChico();
    } else {
      opcionInvalida();
    }

  } else if (escena === "PREGUNTAR_QUE_PERDIO") {
    if (respuesta === "1") {
      ayudarAlChicoABuscar();
    } else if (respuesta === "2") {
      desearleSuerte();
    } else if (respuesta === "3") {
      mirarDebajoDeLaMesa();
    } else {
      opcionInvalida();
    }

  } else if (escena === "RINCON_TRANQUILO") {
    if (respuesta === "1") {
      observarDesdeElRincon();
    } else if (respuesta === "2") {
      descansarEnElRincon();
    } else if (respuesta === "3") {
      mirarDebajoDelBanco();
    } else if (respuesta === "4") {
      volverAlRuido();
    } else {
      opcionInvalida();
    }

  } else if (escena === "OBSERVAR_DESDE_EL_RINCON") {
    if (respuesta === "1") {
      irConTuAmiga();
    } else if (respuesta === "2") {
      acercarteAlChico();
    } else if (respuesta === "3") {
      hacerFilaDeLaCantina();
    } else {
      opcionInvalida();
    }

  } else if (escena === "MIRAR_DEBAJO_DEL_BANCO") {
    if (respuesta === "1") {
      guardarPulsera();
    } else if (respuesta === "2") {
      dejarPulsera();
    } else {
      opcionInvalida();
    }
  }
});

// ===================================================================================
// REINICIO
// ===================================================================================

restart.addEventListener("click", () => {
  inicio();
});

// ===================================================================================
// ESCENA INICIAL
// ===================================================================================

function inicio() {
  actualizarEscena("INICIO");

  text.textContent = `
Suena la alarma del recreo. Tienes algo de hambre, pero hay mucha gente en la cantina.

Ves a tu amiga en una mesa con varias personas que no conoces. Ella te hace una seña para que vayas.

También querías comprar algo de comer, pero si tardas mucho puede que se acabe lo que querías.

Al mismo tiempo, el chico que te gusta está sentado cerca de la ventana, revisando su mochila como si hubiera perdido algo.

¿Qué haces?

1. Ir con tu amiga.
2. Hacer la fila de la cantina.
3. Acercarte al chico que te gusta.
4. Irte a un rincón tranquilo para alejarte del bochinche de gente.
`;

  mostrarForm();
  ocultarRestart();
}

// ===================================================================================
// RUTA: IR CON TU AMIGA
// ===================================================================================

function irConTuAmiga() {
  actualizarEscena("IR_CON_TU_AMIGA");

  text.textContent = `
Tu amiga te sonríe con entusiasmo y te invita a sentarte con ella.

Las pulseras de sus brazos suenan cuando te saluda con la mano.

¿Qué haces?

1. Sentarte al lado de ella.
2. Sentarte un poco apartada.
3. Decir "ahora voy" y comprar algo primero.
`;
}

function sentarteJuntoAElla() {
  actualizarEscena("SENTADAS_AL_LADO");

  text.textContent = `
Te sientas al lado de tu amiga. Ella intenta incluirte en la conversación.

Todo va bastante bien hasta que alguien que no conoces te mira y pregunta:

"¿Y vos de dónde venís?"

¿Qué haces?

1. Responder normal.
2. Hacer un chiste.
3. Decir algo demasiado corto.
`;
}

function respuestaNormal() {
  finalizarEscena(
    "RESPUESTA_NORMAL",
    `
Respondes de forma normal.

La conversación sigue sin ponerse rara. Tu amiga sonríe, cambia un poco el tema y te incluye en una anécdota del grupo.

Al final terminas sentada con ellos durante todo el recreo. No fue la conversación más emocionante del mundo, pero salió bien.
`
  );
}

function chiste() {
  finalizarEscena(
    "CHISTE",
    `
Haces un chiste.

Por un segundo nadie responde y parece que todo va a salir mal.

Entonces tu amiga se ríe. Después se ríe otra persona. Después otra.

La conversación se vuelve mucho más fácil y alguien te pregunta otra cosa. Esta vez ya no se siente como un interrogatorio.
`
  );
}

function demasiadoCorto() {
  finalizarEscena(
    "DEMASIADO_CORTO",
    `
Respondes algo demasiado corto.

La conversación queda medio incómoda. Tu amiga intenta salvar el momento cambiando de tema, pero tú quedas con la sensación de que podrías haber dicho algo más.

No pasa nada terrible, pero el recreo se vuelve un poco más silencioso.
`
  );
}

function sentarseApartada() {
  finalizarEscena(
    "SENTARSE_APARTADA",
    `
Te sientas un poco apartada.

Tu amiga nota que estás nerviosa y no te presiona. La conversación grupal sigue, pero no quedas en el centro.

Escuchas más de lo que hablas. De vez en cuando tu amiga te mira para asegurarse de que sigues ahí.

No participas mucho, pero tampoco te quedas completamente sola.
`
  );
}

function ahoraVoy() {
  actualizarEscena("AHORA_VOY");

  text.textContent = `
Le dices a tu amiga:

"Ahora voy, me compro algo primero."

Ella asiente y te señala la cantina.

Ahora tienes que decidir rápido, porque el recreo no dura para siempre.

1. Ir a hacer la fila de la cantina.
2. Arrepentirte y volver con tu amiga sin comprar nada.
3. Cambiar de idea y acercarte al chico que te gusta.
`;
}

function volverConTuAmigaSinComprar() {
  finalizarEscena(
    "VOLVER_CON_TU_AMIGA_SIN_COMPRAR",
    `
Vuelves con tu amiga sin comprar nada.

Ella te mira la mano vacía y dice:

"¿No ibas a comprar algo?"

Tú dices que al final no tenías tanta hambre.

Ella no insiste y te hace lugar en la mesa. La conversación sigue, aunque ahora no tienes comida y te arrepientes un poquito.
`
  );
}

// ===================================================================================
// RUTA: CANTINA
// ===================================================================================

function hacerFilaDeLaCantina() {
  actualizarEscena("HACER_FILA_DE_LA_CANTINA");

  text.textContent = `
Vas a la cantina.

La fila parece avanzar lentísimo, pero finalmente llega tu turno.

La señora de la cantina te mira con paciencia.

"¿Qué vas a querer?"

1. Algo salado.
2. Algo dulce.
3. Agua.
4. Nada, escapar.
5. Preguntar precios.
`;
}

function comprarAlgoSalado() {
  actualizarEscena("A_DONDE_IR");

  text.textContent = `
Compras algo salado.

Sales de la fila con tu comida en la mano. Ahora tienes que decidir dónde comer antes de que termine el recreo.

1. Volver con tu amiga.
2. Acercarte al chico que te gusta.
3. Irte a un rincón tranquilo.
`;
}

function comprarAlgoDulce() {
  actualizarEscena("A_DONDE_IR");

  text.textContent = `
Compras algo dulce.

No era exactamente lo que habías planeado, pero se ve rico. Ahora tienes que decidir dónde comer.

1. Volver con tu amiga.
2. Acercarte al chico que te gusta.
3. Irte a un rincón tranquilo.
`;
}

function comprarAgua() {
  actualizarEscena("A_DONDE_IR");

  text.textContent = `
Compras agua.

Es la opción más simple, pero también la más segura. Sales de la fila y miras alrededor.

1. Volver con tu amiga.
2. Acercarte al chico que te gusta.
3. Irte a un rincón tranquilo.
`;
}

function escaparDeLaFila() {
  finalizarEscena(
    "ESCAPAR_DE_LA_FILA",
    `
Cuando llega tu turno, te pones nerviosa y sales de la fila sin comprar nada.

La señora de la cantina alcanza a decir:

"¿No querías nada?"

Pero ya estás caminando hacia otro lado.

No compraste comida, pero al menos escapaste de la presión del momento.
`
  );
}

function preguntarPrecios() {
  actualizarEscena("PREGUNTAR_PRECIOS");

  text.textContent = `
Preguntas los precios.

La señora de la cantina responde con calma y te muestra las opciones.

Ahora eliges con más información.

1. Comprar algo salado.
2. Comprar algo dulce.
3. Comprar agua.
4. Guardar el dinero y no comprar nada.
`;
}

function guardarDinero() {
  finalizarEscena(
    "GUARDAR_DINERO",
    `
Decides guardar el dinero.

La señora de la cantina no se molesta. Solo asiente y atiende a la siguiente persona.

Sales de la fila sin comida, pero con la sensación de que quizá más tarde ese dinero puede servir para otra cosa.
`
  );
}

function volverConTuAmigaConCompra() {
  finalizarEscena(
    "VOLVER_CON_TU_AMIGA_CON_COMPRA",
    `
Vuelves con tu amiga llevando tu compra.

Ella te hace un lugar en la mesa y alguien comenta lo que compraste.

Eso sirve como excusa para entrar en la conversación sin tener que inventar un tema de la nada.

Terminas comiendo con el grupo.
`
  );
}

function acercarteAlChicoConCompra() {
  finalizarEscena(
    "ACERCARTE_AL_CHICO_CON_COMPRA",
    `
Te acercas al chico que te gusta con tu compra en la mano.

Él sigue revisando su mochila. Nota que estás cerca y levanta la vista.

Por un momento no sabes si ofrecer ayuda, hablar de la comida o fingir que pasabas casualmente.

Al final le preguntas si perdió algo.

La conversación empieza un poco rara, pero empieza.
`
  );
}

function comerEnRinconTranquilo() {
  finalizarEscena(
    "COMER_EN_RINCON_TRANQUILO",
    `
Te vas a un rincón tranquilo con tu comida.

Desde ahí puedes ver todo sin tener que participar.

Tu amiga sigue en la mesa, el chico de la ventana sigue buscando algo y la fila de la cantina empieza a desaparecer.

Comes en paz, aunque con la sensación de que tal vez podrías haber hecho algo más.
`
  );
}

// ===================================================================================
// RUTA: CHICO QUE TE GUSTA
// ===================================================================================

function acercarteAlChico() {
  actualizarEscena("ACERCARTE_AL_CHICO");

  text.textContent = `
Te acercas al chico que te gusta.

Está sentado cerca de la ventana, revisando su mochila con cara de haber perdido algo.

Cuando te ve, levanta la mirada.

"Creo que se me cayó algo", dice.

¿Qué haces?

1. Ayudarlo a buscar.
2. Preguntar qué perdió.
3. Fingir que solo pasabas por ahí.
`;
}

function ayudarAlChicoABuscar() {
  actualizarEscena("AYUDAR_AL_CHICO_A_BUSCAR");

  text.textContent = `
Te agachas para ayudarlo a buscar.

Después de unos segundos encuentras algo debajo de una silla. Parece ser el estuche de sus lentes.

Cuando se lo alcanzas, quedas mucho más cerca de su cara de lo que esperabas.

¿Qué haces?

1. Dárselo normal.
2. Hacer un chiste para disimular.
3. Ponerte nerviosa y dárselo rápido sin decir mucho.
`;
}

function darseloNormal() {
  finalizarEscena(
    "DARLO_NORMAL",
    `
Le das el estuche intentando actuar normal.

Él sonríe y dice:

"Gracias, pensé que lo había perdido."

Después se ríe con una voz más grave de lo que esperabas.

Tú respondes algo simple y la conversación termina bien.
`
  );
}

function hacerChisteConElChico() {
  finalizarEscena(
    "CHISTE_CON_EL_CHICO",
    `
Haces un chiste para disimular los nervios.

Por suerte, él se ríe.

No una risa enorme, sino una risa baja, grave y tranquila.

Eso hace que la situación se vuelva menos incómoda y un poco más peligrosa para tu estabilidad emocional.
`
  );
}

function ponerteNerviosaConElChico() {
  finalizarEscena(
    "PONERTE_NERVIOSA",
    `
Te pones nerviosa y le das el estuche demasiado rápido.

Él alcanza a decir gracias, pero tú ya estás mirando hacia otro lado.

La escena termina sin desastre, aunque queda la sensación de que podrías haber hablado un poco más.
`
  );
}

function preguntarQuePerdio() {
  actualizarEscena("PREGUNTAR_QUE_PERDIO");

  text.textContent = `
Le preguntas qué perdió.

Él responde:

"El estuche de mis lentes. Creo que estaba por acá."

La conversación es más tranquila porque todavía no te agachaste a buscar nada.

¿Qué haces?

1. Ayudarlo a buscar.
2. Decirle que ojalá lo encuentre e irte.
3. Mirar debajo de la mesa sin decir nada.
`;
}

function desearleSuerte() {
  finalizarEscena(
    "DESEARLE_SUERTE",
    `
Le dices que ojalá lo encuentre.

Él te agradece, aunque parece un poco sorprendido de que no te quedes a ayudar.

Te vas antes de que la conversación pueda ponerse incómoda.

No pasó nada malo, pero tampoco pasó demasiado.
`
  );
}

function mirarDebajoDeLaMesa() {
  finalizarEscena(
    "MIRAR_DEBAJO_DE_LA_MESA",
    `
Miras debajo de la mesa sin decir nada.

Ahí está el estuche.

Lo señalas y él se agacha para agarrarlo.

"Ah, gracias", dice sonriendo.

Fue una ayuda silenciosa, un poco rara, pero efectiva.
`
  );
}

function fingirQuePasabas() {
  finalizarEscena(
    "FINGIR_QUE_PASABAS",
    `
Finges que solo estabas pasando por ahí.

Él vuelve a revisar su mochila.

Tú sigues caminando como si tuvieras un destino clarísimo, aunque en realidad no sabes muy bien a dónde vas.

Logras evitar la conversación, pero también pierdes la oportunidad de hablar con él.
`
  );
}

// ===================================================================================
// RUTA: RINCÓN TRANQUILO
// ===================================================================================

function irAlRinconTranquilo() {
  actualizarEscena("RINCON_TRANQUILO");

  text.textContent = `
Te vas a un rincón tranquilo para alejarte del bochinche.

Desde ahí puedes ver la cantina, la mesa de tu amiga y al chico que te gusta cerca de la ventana.

También notas algo debajo de un banco.

¿Qué haces?

1. Observar desde el rincón.
2. Quedarte descansando un rato.
3. Mirar debajo del banco.
4. Volver al ruido.
`;
}

function observarDesdeElRincon() {
  actualizarEscena("OBSERVAR_DESDE_EL_RINCON");

  text.textContent = `
Observas desde el rincón.

Ves que tu amiga sigue haciéndote señas, la fila de la cantina se está acortando y el chico que te gusta todavía parece estar buscando algo.

¿Qué haces ahora?

1. Ir con tu amiga.
2. Acercarte al chico que te gusta.
3. Hacer la fila de la cantina.
`;
}

function descansarEnElRincon() {
  finalizarEscena(
    "DESCANSAR_EN_EL_RINCON",
    `
Decides quedarte en el rincón un rato más.

El ruido sigue, pero desde lejos molesta menos.

Cuando el recreo está por terminar, te levantas con más calma.

No hablaste con nadie en ese momento, pero tampoco tuviste que forzarte.
`
  );
}

function mirarDebajoDelBanco() {
  actualizarEscena("MIRAR_DEBAJO_DEL_BANCO");

  text.textContent = `
Te agachas y miras debajo del banco.

Hay una pulsera vieja.

No parece de nadie que esté cerca, pero por alguna razón te llama la atención.

¿Qué haces?

1. Guardarla.
2. Dejarla donde está.
`;
}

function guardarPulsera() {
  finalizarEscena(
    "GUARDAR_PULSERA",
    `
Guardas la pulsera.

No sabes por qué, pero sientes que no es un objeto cualquiera.

Cuando vuelves a mirar el recreo, todo parece igual que antes, aunque la escena se siente un poquito más rara.
`
  );
}

function dejarPulsera() {
  finalizarEscena(
    "DEJAR_PULSERA",
    `
Decides dejar la pulsera donde está.

Te levantas y vuelves a mirar el recreo.

La pulsera sigue debajo del banco, como si estuviera esperando a que alguien más la encuentre.
`
  );
}

function volverAlRuido() {
  actualizarEscena("INICIO");

  text.textContent = `
Vuelves al centro del recreo.

Todo sigue más o menos igual, aunque ahora queda menos tiempo para decidir.

Tu amiga sigue en la mesa, la cantina sigue llena y el chico que te gusta continúa cerca de la ventana.

¿Qué haces?

1. Ir con tu amiga.
2. Hacer la fila de la cantina.
3. Acercarte al chico que te gusta.
4. Volver al rincón tranquilo.
`;
}
