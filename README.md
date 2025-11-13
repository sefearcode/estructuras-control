# Estructuras de Control en JavaScript

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Finalizado-success)

Ejercicio práctico que demuestra el uso de estructuras de control en JavaScript:  
`if/else`, `switch`, `for...of`, `try/catch` y operador ternario.

## 🚀 Ejecución

1. Clonar el repositorio:
   ```bash
   git clone git@github.com:sefearcode/estructuras-control.git
   cd estructuras-control
Ejecutar con Node.js:

node control-flujo.js

📘 Descripción

El programa valida un formulario de registro aplicando diferentes estructuras de control:

Verifica nombre, correo, edad y contraseña.

Usa try/catch para manejar errores.

Aplica switch y operador ternario para clasificar resultados.

📋 Reglas de validación

Campo	Validación	Estructura usada
Nombre	No puede estar vacío	if/else
Email	Debe tener formato válido (nombre@dominio.com)	Expresión regular + if
Edad	Debe ser un número entre 18 y 99	if/else + switch
Contraseña	Mínimo 8 caracteres, incluye mayúscula, minúscula, número y símbolo	Expresiones regulares + try/catch

🧠 Conceptos aplicados

Condicionales (if, else if, else)

Iteraciones (for...of)

Manejo de errores (try/catch)

Expresiones regulares

Operador ternario

💻 Salida esperada (output)
=== VALIDACIÓN DE FORMULARIO DE REGISTRO ===

✅ Registro exitoso: ¡Bienvenido joven usuario!
Categoría de edad: Adulto
Usuario: Sebastián Araya (seba.araya@example.com)

--- PRUEBA CON ERRORES ---
⚠️ Error en el registro: ❌ El nombre no puede estar vacío.

📂 Autor: sefearcode
🗓️ Proyecto: Práctica de estructuras de control en JavaScript
