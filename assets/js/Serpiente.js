import { Animal } from './Animal.js';

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido,siseo) {
        super(nombre, edad, img, comentarios, sonido);
        this._siseo = siseo;
    }
    // Otros métodos específicos
}