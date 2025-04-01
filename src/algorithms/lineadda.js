const lineadda = (x1, y1, x2, y2) => {
    // Calcular de diferencias con redondeo
    const deltaX = parseFloat((x2 - x1).toFixed(2));
    const deltaY = parseFloat((y2 - y1).toFixed(2));

    // Calcular el número de pasos por su valor absoluto
    const steps = Math.max(Math.abs(deltaX), Math.abs(deltaY));

    // Calcular incrementos
    const xIncrement = parseFloat((deltaX / steps).toFixed(2));
    const yIncrement = parseFloat((deltaY / steps).toFixed(2));

    // Calcular pendiente
    let m;

    if (deltaX === 0) {
        // Evitar división por cero
        m = 'INFINITO';
    } else {
        m = parseFloat((deltaY / deltaX).toFixed(2));
    }

    const points = []; // Arreglo de puntos de la linea

    let x = x1;
    let y = y1;

    for (let i = 0; i <= steps; i++) {
        // Calcular puntos de la linea
        points.push([Math.round(x), Math.round(y)]);
        x += xIncrement;
        y += yIncrement;
    }

    const data = {
        points: points,
        m: m,
        steps: steps,
        deltas: { deltaX: deltaX, deltaY: deltaY },
        incrments: { xIncrement: xIncrement, yIncrement: yIncrement },
    }; // Datos de la linea

    return data; // Retornar datos del algoritmo
};

export default lineadda;
