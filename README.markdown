# Creador de Canciones con IA

Una aplicación web que permite a los usuarios grabar su voz, generar letras de canciones con IA, producir audio con síntesis vocal y añadir un instrumental básico. Proyecto desarrollado para mi portafolio de GitHub.
By Rebeca Romcy
## Características
- **Grabación de audio**: Captura la voz del usuario usando la API `MediaRecorder`.
- **Generación de letras**: Usa la API gratuita de Hugging Face (`google/gemma-2-2b-it` o `HuggingFaceTB/SmolLM2-1.7B-Instruct`) para crear letras personalizadas.
- **Síntesis vocal**: Genera audio de la letra con gTTS (Google Text-to-Speech).
- **Música instrumental**: Crea un bucle musical simple con Tone.js.
- **Historial**: Guarda las canciones generadas en `localStorage`.
- **Interfaz**: Diseño moderno y responsivo con Tailwind CSS.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/AI-Song-Creator.git
   ```
2. Instala las dependencias:
   ```bash
   cd AI-Song-Creator
   npm install
   ```
3. Configura tu API Key de Hugging Face:
   - Obtén una clave en [Hugging Face](https://huggingface.co/settings/tokens).
   - Reemplaza `YOUR_HF_API_KEY` en `index.html` con tu clave.
4. Inicia el servidor:
   ```bash
   npm start
   ```
5. Abre `http://localhost:3000` en tu navegador.

## Uso
1. Ingresa un tema o género (ej. "pop", "amor") en el campo correspondiente.
2. Graba tu voz con los botones "Grabar" y "Detener".
3. Genera una letra con el botón "Generar letra con IA".
4. Haz clic en "Crear Canción" para generar el audio de la letra y un instrumental.
5. Revisa el historial de canciones para cargar canciones anteriores.

## Tecnologías
- **Frontend**: HTML, JavaScript, Tailwind CSS, Tone.js
- **Backend**: Node.js, Express, gTTS
- **API**: Hugging Face Inference API
- **Audio**: Web Audio API (`MediaRecorder`)

## Limitaciones
- La API gratuita de Hugging Face tiene límites de solicitudes por hora (error 429).
- gTTS genera audio hablado, no cantado. Para clonación de voz, considera APIs como ElevenLabs o Coqui TTS.
- El instrumental de Tone.js es básico. APIs como Soundraw o Mubert pueden generar música más avanzada (de pago).

## Próximos pasos
- Implementar clonación de voz con Coqui TTS o ElevenLabs.
- Mejorar la generación musical con APIs avanzadas.
- Añadir opciones para descargar la canción generada.
- Publicar la app en un servicio como Vercel o Netlify.

## Licencia
MIT
