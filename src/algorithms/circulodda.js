const circulodda = (radius, xCenter = 0, yCenter = 0) => {
    const points = []; // Arreglo de puntos de todos los octantes

    let x = 0,
        y = radius; // Inicializar variables en 0 y radio

    while (x <= y) {
        y = Math.round(Math.sqrt(radius * radius - x * x));
        // Calcular 8 octantes usando simetría
        // Octante 1 y 5
        points.push([xCenter + x, yCenter + y]);
        points.push([xCenter - x, yCenter - y]);

        // Octante 2 y 6
        points.push([xCenter + y, yCenter + x]);
        points.push([xCenter - y, yCenter - x]);

        // Octante 3 y 7
        points.push([xCenter + y, yCenter - x]);
        x;
        points.push([xCenter - y, yCenter + x]);

        // Octante 4 y 8
        points.push([xCenter + x, yCenter - y]);
        points.push([xCenter - x, yCenter + y]);
        x++;
    }

    return points;
};

export default circulodda;
