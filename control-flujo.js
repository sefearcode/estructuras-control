// =============================
// VALIDACIÓN DE FORMULARIO
// =============================
console.log("=== VALIDACIÓN DE FORMULARIO DE REGISTRO ===\n");

// Función para validar un registro
function validarRegistro(usuario) {
  try {
    // Verificar que el objeto exista
    if (!usuario || typeof usuario !== "object") {
      throw new Error("Los datos del usuario no son válidos.");
    }

    // =============================
    // 1️⃣ Validar nombre
    // =============================
    if (!usuario.nombre || usuario.nombre.trim() === "") {
      throw new Error("❌ El nombre no puede estar vacío.");
    }

    // =============================
    // 2️⃣ Validar email con expresión regular
    // =============================
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(usuario.email)) {
      throw new Error("❌ El correo electrónico no es válido.");
    }

    // =============================
    // 3️⃣ Validar edad (usando if/else y switch)
    // =============================
    if (typeof usuario.edad !== "number" || isNaN(usuario.edad)) {
      throw new Error("❌ La edad debe ser un número.");
    }

    if (usuario.edad < 18 || usuario.edad > 99) {
      throw new Error("❌ La edad debe estar entre 18 y 99 años.");
    }

    // Clasificar edad con switch
    let categoria;
    switch (true) {
      case usuario.edad >= 18 && usuario.edad <= 25:
        categoria = "Joven adulto";
        break;
      case usuario.edad <= 40:
        categoria = "Adulto";
        break;
      case usuario.edad <= 60:
        categoria = "Adulto maduro";
        break;
      default:
        categoria = "Adulto mayor";
        break;
    }

    // =============================
    // 4️⃣ Validar contraseña
    // =============================
    let password = usuario.password;
    if (typeof password !== "string" || password.length < 8) {
      throw new Error("❌ La contraseña debe tener al menos 8 caracteres.");
    }

    let tieneMayus = /[A-Z]/.test(password);
    let tieneMinus = /[a-z]/.test(password);
    let tieneNum = /[0-9]/.test(password);
    let tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!tieneMayus || !tieneMinus || !tieneNum || !tieneEspecial) {
      throw new Error("❌ La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales.");
    }

    // =============================
    // 5️⃣ Resultado final
    // =============================
    let mensaje = (usuario.edad >= 18 && usuario.edad <= 30)
      ? "✅ Registro exitoso: ¡Bienvenido joven usuario!"
      : "✅ Registro exitoso: ¡Bienvenido al sistema!";

    console.log(`${mensaje}`);
    console.log(`Categoría de edad: ${categoria}`);
    console.log(`Usuario: ${usuario.nombre} (${usuario.email})`);

  } catch (error) {
    console.error(`⚠️ Error en el registro: ${error.message}`);
  }
}

// =============================
// EJEMPLOS DE PRUEBA
// =============================

// ✅ Ejemplo válido
validarRegistro({
  nombre: "Sebastián Araya",
  email: "seba.araya@example.com",
  edad: 28,
  password: "ClaveSegura#123"
});

// ❌ Ejemplo con errores
console.log("\n--- PRUEBA CON ERRORES ---");
validarRegistro({
  nombre: "",
  email: "correo_invalido",
  edad: 15,
  password: "1234"
});
