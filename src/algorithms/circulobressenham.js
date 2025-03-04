export const circuloBressenham = (r, xCenter = 0, yCenter = 0) => {
    const points = []; // Arreglo de puntos de todos los octantes

    let p = 5 / 4 - r; // Valor inicial de p (Puede ser 1-r)

    let x = xCenter; // Inicializar x en el centro
    let y = r; // Inicializar y en el radio

    points.push([xCenter, yCenter + r]); // Primer punto

    while (x < y) {
        x++; // Siempre aumentamos x
        if (p < 0) {
            p += 2 * x + 1;
        } else {
            y--; // Solo disminuimos y si p es negativo
            p += 2 * (x - y) + 1;
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
    }

    return points;
};

const result = circuloBressenham(10, 1, 1);
console.log(result);
