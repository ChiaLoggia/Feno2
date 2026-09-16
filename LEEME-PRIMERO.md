# Masterclass JPP — versión mock

Esta carpeta está lista para subir a un repositorio público llamado `Feno2` en la cuenta `chialoggia`.

URL esperada: `https://chialoggia.github.io/Feno2/`

## Qué hace esta versión

- Permite recorrer todas las pantallas.
- Incluye las diez preguntas de Juan Pablo Paz.
- Aprueba con 4 respuestas correctas sobre 10.
- Muestra cuál es la respuesta correcta sin inventar explicaciones.
- Incluye la encuesta de opinión y datos demográficos.
- Permite visualizar y descargar el certificado.

## Qué no hace

- No se conecta a Supabase.
- No transmite ni guarda respuestas.
- No guarda nombres, DNI ni correos.
- No valida duplicados.

Para probar el certificado, utilizá datos ficticios. Todo desaparece al cerrar o actualizar la página.

## Subir a GitHub

1. Creá en tu cuenta un repositorio público y vacío llamado `Feno2`.
2. Descomprimí el ZIP.
3. Subí **los archivos que están dentro de la carpeta**, no el ZIP ni una carpeta exterior. `index.html` debe quedar en la raíz.
4. Entrá en **Settings > Pages**.
5. En **Build and deployment**, seleccioná **Deploy from a branch**.
6. Seleccioná rama `main`, carpeta `/ (root)` y presioná **Save**.
7. Esperá a que GitHub Pages termine antes de volver a subir archivos.

## Archivos editables

- `CUESTIONARIO-EDITABLE.js`
- `INTRODUCCION-EDITABLE.js`
- `OPINION-EDITABLE.js`
- `APARIENCIA-EDITABLE.css`
- `fenomenautas-logo.png` manteniendo el mismo nombre

## Archivos que no se deben editar

- `index.html`
- `MOTOR-NO-EDITAR.js`
- `SUPABASE-EDITABLE.js` (mantiene activado el modo demostración)
