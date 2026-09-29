// ✅ 1. Capturamos el contenedor principal de la aplicación de Vite
const appContenedor = document.querySelector('#app') || document.body;

// ⚠️ 2. El string malicioso del hacker ético para el laboratorio de seguridad
const payloadHacker = `<img src="avatar-roto.png" onerror="console.error('🔥 CRÍTICO XSS: ¡El script del atacante ha vulnerado el DOM de Penguin y ha robado tus tokens!');">`;

// ======================================================================
// ✅ EL BLINDAJE CORPORATIVO (Tu primera victoria lógica de la Fase 2):
// ======================================================================
// Usamos textContent para forzar al navegador a tratar el string como texto plano.
// El navegador desactivará automáticamente las etiquetas < y >, neutralizando el hackeo.
appContenedor.textContent = payloadHacker;
