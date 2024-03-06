import { Animal } from './Animal.js';

export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido,chillar) {
        super(nombre, edad, img, comentarios, sonido);
        this._chillar = chillar;
    }
    // Otros métodos específicos
}