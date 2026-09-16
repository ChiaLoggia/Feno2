/* EDITABLE: preguntas, opciones, respuesta correcta y puntaje de aprobación. */
window.QUESTIONNAIRE_DATA = [
  {
    slug: "masterclass-jp",
    presenter: "Juan Pablo Paz",
    title: "Masterclass de Juan Pablo Paz",
    passingScore: 4,
    questions: [
      {
        number: 1,
        prompt: "¿Cuál fue el aporte revolucionario de Newton respecto al movimiento?",
        options: [
          { key: "A", text: "Demostró que los cuerpos celestes se mueven de manera diferente a los objetos terrestres, y describió las leyes de cada caso por separado." },
          { key: "B", text: "Descubrió que la gravedad actúa solo sobre los cuerpos celestes y propuso extender esa idea a los objetos terrestres." },
          { key: "C", text: "Mostró que un mismo conjunto de leyes matemáticas explica tanto el movimiento de los cuerpos celestes como el de los objetos en la Tierra." }
        ],
        correct: "C",
        feedback: "",
        scored: true
      },
      {
        number: 2,
        prompt: "Las leyes de Newton aplicadas a la fuerza de gravedad permitieron explicar:",
        options: [
          { key: "A", text: "La forma de las órbitas de los planetas." },
          { key: "B", text: "Las regularidades que había observado Kepler en el movimiento de los planetas." },
          { key: "C", text: "La predicción de nuevos fenómenos." },
          { key: "D", text: "Todas son correctas." }
        ],
        correct: "D",
        feedback: "",
        scored: true
      },
      {
        number: 3,
        prompt: "La física newtoniana tenía una limitación que abrió el camino a nuevas teorías. ¿Cuál era esa limitación?",
        options: [
          { key: "A", text: "Las leyes de Newton no podían explicar el movimiento de los planetas más alejados del Sol." },
          { key: "B", text: "Las leyes de Newton suponían que dos objetos podían ejercer fuerzas entre sí de manera instantánea, lo cual resultaba problemático." },
          { key: "C", text: "Newton no logró expresar sus leyes en forma matemática, lo que dificultaba su aplicación." }
        ],
        correct: "B",
        feedback: "",
        scored: true
      },
      {
        number: 4,
        prompt: "¿Qué aporta el concepto de “campo” en física?",
        options: [
          { key: "A", text: "Reemplaza la idea de fuerzas directas entre objetos por la de una entidad que se extiende en el espacio y a través de la cual los objetos interactúan." },
          { key: "B", text: "Describe cómo los objetos generan fuerzas que viajan instantáneamente de uno a otro a través del vacío." },
          { key: "C", text: "Explica el movimiento de los objetos sin necesidad de considerar ningún tipo de interacción entre ellos." }
        ],
        correct: "A",
        feedback: "",
        scored: true
      },
      {
        number: 5,
        prompt: "¿Qué limitación tuvo la teoría de campos de Maxwell?",
        options: [
          { key: "A", text: "No logró unificar la electricidad y el magnetismo en un solo modelo, que siguieron siendo fenómenos separados." },
          { key: "B", text: "Resolvió el problema de la acción a distancia, pero su descripción del átomo predecía que este sería inestable y no podría existir." },
          { key: "C", text: "Fue un avance teórico importante, pero no tuvo aplicaciones experimentales que permitieran verificarla." }
        ],
        correct: "B",
        feedback: "",
        scored: true
      },
      {
        number: 6,
        prompt: "Después de Maxwell, ¿qué pasó con las leyes de Newton?",
        options: [
          { key: "A", text: "Se demostró que son incorrectas y quedaron sin aplicación." },
          { key: "B", text: "Se adoptó una forma distinta de concebir las interacciones entre objetos, más general y que resuelve limitaciones de la física newtoniana." },
          { key: "C", text: "Se comprobó que los campos electromagnéticos son más importantes que la gravedad en todos los fenómenos físicos." }
        ],
        correct: "B",
        feedback: "",
        scored: true
      },
      {
        number: 7,
        prompt: "Las ondas electromagnéticas…",
        options: [
          { key: "A", text: "…viajan en el vacío a la velocidad de la luz, aproximadamente 300.000 kilómetros por segundo." },
          { key: "B", text: "…“llevan energía” proporcional a su frecuencia: a mayor frecuencia, mayor energía." },
          { key: "C", text: "…incluyen a la luz visible, las ondas de radio y los rayos X, que son todas ondas electromagnéticas, pero con distintas frecuencias." },
          { key: "D", text: "Todas las anteriores son correctas." }
        ],
        correct: "D",
        feedback: "",
        scored: true
      },
      {
        number: 8,
        prompt: "La física argentina Gabriela González tuvo un rol central en la detección de las ondas gravitacionales, lo que permitió:",
        options: [
          { key: "A", text: "Confirmar la teoría del Big Bang." },
          { key: "B", text: "Medir por primera vez la distancia exacta entre galaxias." },
          { key: "C", text: "Corroborar una de las predicciones de la Relatividad General de Einstein." }
        ],
        correct: "C",
        feedback: "",
        scored: true
      },
      {
        number: 9,
        prompt: "Según la física moderna, ¿qué es la fuerza gravitatoria que describió Newton?",
        options: [
          { key: "A", text: "Una fuerza real que existe en la naturaleza y que Newton descubrió tal como es: dos objetos se atraen entre sí a través del espacio vacío." },
          { key: "B", text: "Un modelo matemático extraordinariamente útil para predecir el movimiento de los cuerpos, pero que la Relatividad General de Einstein reemplazó por una descripción más profunda: la curvatura del espacio-tiempo." },
          { key: "C", text: "Una hipótesis que Newton propuso pero que nunca pudo verificarse experimentalmente, y que hoy se considera superada." }
        ],
        correct: "B",
        feedback: "",
        scored: true
      },
      {
        number: 10,
        prompt: "Para la ciencia, un modelo es:",
        options: [
          { key: "A", text: "Una hipótesis que todavía no fue comprobada experimentalmente y que busca explicar un fenómeno real." },
          { key: "B", text: "Una representación exacta y completa de un fenómeno real, que permite describirlo y predecirlo con total precisión." },
          { key: "C", text: "Una representación simplificada de un fenómeno real que permite describir, explicar o predecir su comportamiento, con ciertas limitaciones." }
        ],
        correct: "C",
        feedback: "",
        scored: true
      }
    ]
  }
];
