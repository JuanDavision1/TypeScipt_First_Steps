"use strict";
exports.__esModule = true;
exports.mostrar = exports.persona = exports.nombre = void 0;
// modulos son paqueñas porciones de coodigo, reutilizables
// ya no solo dentor del mismo archivo sino en archivos exteriores
//cualquier clade o interfaz se puede exportar
//esa variable se hace exportar con el export
exports.nombre = 'manuep';
var persona = /** @class */ (function () {
    function persona() {
    }
    return persona;
}());
exports.persona = persona;
var mostrar = function (dat) {
    console.log('mostrar');
};
exports.mostrar = mostrar;
var personita = /** @class */ (function () {
    function personita(nombre, edad, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
    personita.prototype.mostrar = function () {
        console.log + (this.nombre);
    };
    return personita;
}());
exports["default"] = personita;
