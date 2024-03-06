import { Animal } from './Animal.js';

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido,rugir) {
        super(nombre, edad, img, comentarios, sonido);
        this._rugir = rugir;
    }
    // Otros métodos específicos
}