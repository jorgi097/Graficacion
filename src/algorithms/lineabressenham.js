const lineaBressenham = (x1, y1, x2, y2) => {

    // Calcular de diferencias con valor absoluto
    let deltaX = Math.abs(x2 - x1);
    let deltaY = Math.abs(y2 - y1);

    // Calcular incrementos
    const xIncrement = x1 > x2 ? -1 : 1;
    const yIncrement = y1 > y2 ? -1 : 1;

    const m = deltaY / deltaX; // Calcular pendiente

    // Definir el eje principal
    let swapAxis = false;
    if (deltaY > deltaX) {
        // Intercambiar valores si el eje principal es Y
        [deltaX, deltaY] = [deltaY, deltaX];
        swapAxis = true; // Flag para intercambio de ejes
    }

    // Calcular parámetro inicial
    let p = 2 * deltaY - deltaX;

    const points = [[x1, y1]]; // Arreglo de puntos de la linea con valor inicial

    for (let index = 0; index < deltaX; index++) {
        if (p >= 0) {
            if (swapAxis) {
                x1 += xIncrement;
            } else {
                y1 += yIncrement;
            }

            p -= 2 * deltaX; // Solo se resta esto si el parametro de decision es mayor o igual a cero
        }

        if (swapAxis) {
            y1 += yIncrement;
        } else {
            x1 += xIncrement;
        }

        p += 2 * deltaY; // Siempre se aumenta esto en el parametro independiente de si el parametro de desición es mayor o igual a cero


        points.push([x1, y1]); // Agregar siguiente punto
    }

    const data = {points: points, m:m, deltas:{deltaX:deltaX, deltaY:deltaY}, increments:{xIncrement:xIncrement, yIncrement:yIncrement}}; // Datos de la linea

    return data; // Retornar arreglo de puntos
};

export default lineaBressenham; // Exportar función