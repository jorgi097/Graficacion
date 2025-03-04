export const lineaBressenha = (x1, y1, x2, y2) => {
    // Entrada de variables

    // Calcular de diferencias con valor absoluto
    let deltaX = Math.abs(x2 - x1);
    let deltaY = Math.abs(y2 - y1);

    // Calcular incrementos
    const xIncrement = x1 > x2 ? -1 : 1;
    const yIncrement = y1 > y2 ? -1 : 1;

    // Definir el eje principal
    let swapAxis = false;
    if (deltaY > deltaX) {
        // Intercambiar valores si el eje principal es Y
        [deltaX, deltaY] = [deltaY, deltaX];
        swapAxis = true; // Flag para intercambio de ejes
    }

    // Calcular parámetro inicial
    let p = 2 * deltaY - deltaX;

    const points = [[p, x1, y1]]; // Arreglo de puntos de la linea con valor inicial

    for (let index = 0; index < deltaX; index++) {
        // Si el parametro de decisión es mayor o igual a cero
        if (p >= 0) {
            if (swapAxis) {
                x1 += xIncrement;
            } else {
                y1 += yIncrement;
            }

            p -= 2 * deltaX; // Solo se resta esto si el parametro es mayor o igual a cero
        }

        if (swapAxis) {
            y1 += yIncrement;
        } else {
            x1 += xIncrement;
        }

        p += 2 * deltaY; // Siempre se aumenta esto en el parametro independiente de si el parametro es mayor o igual a cero

        points.push([p, x1, y1]); // Agregar siguiente punto
    }
    return points; // Retornar arreglo de puntos
};

const result = lineaBressenha(3, 5, 17, 23); // Llamada a la función

console.log(result); // Mostrar resultado en consola
