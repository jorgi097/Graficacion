import { fillCircule } from './circulodda';

const circuloBressenham = (radius, xCenter = 0, yCenter = 0) => {
    const points = []; // Arreglo de puntos de todos los octantes
    const table = []; // Arreglo de valores de la tabla de decisión

    let p = 5 / 4 - radius; // Valor inicial de p (Puede ser 1-r)

    let x = 0; // Inicializar x en 0
    let y = radius; // Inicializar y en el radio

    while (x < y) {
        table.push(p);

        if (p < 0) {
            p += 2 * x + 1; // Calculo de parametro de decisión
        } else {
            y--; // Solo disminuimos y si p es negativo
            p += 2 * (x - y) + 1; // Calculo de parametro de decisión
        }
        if (x === y - 1) table.push(p);

        points.push([x, y]); // Añadir el punto (x, y) al arreglo de puntos
        x++; // Siempre incrementar x
    }

    const { circule: fullCircule, octants } = fillCircule(points, table); // Se obtiienen los demas octantes

    const finalCircule = fullCircule.map(([x, y]) => [
        x + xCenter,
        y + yCenter,
    ]);
    finalCircule.push([xCenter, yCenter]); // Añade el centro

    // Añade el centro
    const finalOctants = octants.map(octant =>
        octant.map(([x, y]) => [x + xCenter, y + yCenter])
    );

    const data = {
        points: finalCircule,
        octants: finalOctants,
        radius: radius,
        xCenter: xCenter,
        yCenter: yCenter,
        table: table,
    };

    return data;
};

export default circuloBressenham;
