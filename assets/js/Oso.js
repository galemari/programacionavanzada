import { Animal } from './Animal.js';

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido,gruñir) {
        super(nombre, edad, img, comentarios, sonido);
        this._gruñir = gruñir;
    }
    // Otros métodos específicos
}