import { Animal } from './Animal.js';

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido,aullar) {
        super(nombre, edad, img, comentarios, sonido);
        this._aullar = aullar;
    }
    // Otros métodos específicos
}