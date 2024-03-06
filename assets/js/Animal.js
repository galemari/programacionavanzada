
export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        if (value.length < 3) {
            alert("El nombre es muy corto");
            return;
        }
        this._nombre = value;
    }

    get edad() {
        return this._edad;
    }

    set edad(value) {
        if(isNaN(value)){
            alert("Solo se pueden ingresar números");
            return;
        }
        this._edad = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get comentarios() {
        return this._comentarios;
    }

    set comentarios(value) {
        if(value.length < 20 || value.length > 100){
            alert("Escribe una oración entre 20 a 100 caracteres.");
            return;
        }
        this._comentarios = value;
    }

    get sonido() {
        return this._sonido;
    }

    set sonido(value) {
        this._sonido = value;
    }
}
