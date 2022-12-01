function suma(a, b) {
    return a + b;
}

const Persona = {
    nombre: "Juanito",
};

function getNombre() {
    return Persona.nombre;
}

console.log(suma(3, 4));

exports.suma = suma;
exports.getNombre = getNombre;