const circuloBressenham = (radius, xCenter = 0, yCenter = 0) => {
    const points = []; // Arreglo de puntos de todos los octantes

    let p = 5 / 4 - radius; // Valor inicial de p (Puede ser 1-r)

    let x = 0; // Inicializar x en 0
    let y = radius; // Inicializar y en el radio

    while (x < y) {
        if (p < 0) {
            p += 2 * x + 1;  // Calculo de parametro de decisión
        } else {
            y--; // Solo disminuimos y si p es negativo
            p += 2 * (x - y) + 1; // Calculo de parametro de decisión
        }

        // Calcular 8 octantes usando simetría
        points.push([xCenter + x, yCenter + y]);
        points.push([xCenter - x, yCenter + y]);
        points.push([xCenter + x, yCenter - y]);
        points.push([xCenter - x, yCenter - y]);
        points.push([xCenter + y, yCenter + x]);
        points.push([xCenter - y, yCenter + x]);
        points.push([xCenter + y, yCenter - x]);
        points.push([xCenter - y, yCenter - x]);

        x++; // Siempre aumentamos x
    }

    points.push([xCenter, yCenter]); // Centro del círculo


    const data = {
        points: points,
        radius: radius,
        xCenter: xCenter,
        yCenter: yCenter,
    }; // Datos del circulo

    return data;
};

export default circuloBressenham;
