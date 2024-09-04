/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace area {
    //% block
    //Calcula el area del circulo
    export function circulo(radio: number) {
        return Math.PI * radio * radio;
    }
    //% block
    //Calcula el area de un rectangulo
    export function rectangulo(largo: number, ancho: number) {
        return largo * ancho;
    }
    //% block
    //Calcula el area de un rectangulo
    export function triangulo(base: number, altura: number) {
        return base * altura / 2;
    }
}