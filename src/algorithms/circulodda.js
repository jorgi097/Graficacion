const circulodda = (radius, xCenter = 0, yCenter = 0) => {
    const points = []; // Arreglo de puntos de todos los octantes

    let x = 0,
        y = radius; // Inicializar variables en 0 y radio

    while (x <= y) {
        y = Math.round(Math.sqrt(radius * radius - x * x));

        // Calcular 8 octantes usando simetría
        points.push([xCenter + x, yCenter + y]);
        points.push([xCenter - x, yCenter - y]);
        points.push([xCenter + y, yCenter + x]);
        points.push([xCenter - y, yCenter - x]);
        points.push([xCenter + y, yCenter - x]);
        points.push([xCenter - y, yCenter + x]);
        points.push([xCenter + x, yCenter - y]);
        points.push([xCenter - x, yCenter + y]);
        x++;
    }

    points.push([xCenter, yCenter]); // Centro del círculo

    const data = {
        points: points,
        radius: radius,
        xCenter: xCenter,
        yCenter: yCenter,
    }; // Datos del círculo

    return data;
};

export default circulodda;
