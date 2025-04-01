const getFullEllipse = points => {
    // Arreglos de los cuadrantes
    const quadrant1 = [];
    const quadrant2 = [];
    const quadrant3 = [];
    const quadrant4 = [];

    // Llenar los cuadrantes con los puntos del primer cuadrante
    points.forEach(point => {
        const x = point[0];
        const y = point[1];
        quadrant1.push([x, y]);
        quadrant2.push([x, -y]);
        quadrant3.push([-x, y]);
        quadrant4.push([-x, -y]);
    });

    // Concatenar los cuadrantes para obtener la elipse completa
    const fullElipse = quadrant1.concat(quadrant2, quadrant3, quadrant4);
    const quadrants = [
        [...quadrant1],
        [...quadrant2],
        [...quadrant3],
        [...quadrant4],
    ];
    return { fullElipse, quadrants };
};

export function ellipseBresenham(xRadius, yRadius, xCenter = 0, yCenter = 0) {
    const points = []; // Arreglo de puntos del primer cuadrante
    const table = []; // Arreglo de valores de la tabla de decisión

    let x = 0; // Primer punto X
    let y = yRadius; // primer punto Y
    points.push([x, y]);

    const YRADIUSSQUARED = yRadius * yRadius; // Y^2
    const XRADIUSSQUARED = xRadius * xRadius; // X^2

    // Región 1
    let p = YRADIUSSQUARED - XRADIUSSQUARED * yRadius + XRADIUSSQUARED / 4; // Parámetro de decisión inicial

    let dx = 2 * YRADIUSSQUARED * x;
    let dy = 2 * XRADIUSSQUARED * y;

    // Mientras el eje X sea menor que el eje Y
    while (dx < dy) {
        table.push(p);

        if (p < 0) {
            x++;
            // "Y" queda igual
            dx = 2 * YRADIUSSQUARED * x; 
            dy = 2 * XRADIUSSQUARED * y;
            p = p + dx + YRADIUSSQUARED; // Actualizar el parámetro de decisión
        } else if (p >= 0) {
            x++;
            y--;
            dx = 2 * YRADIUSSQUARED * x;
            dy = 2 * XRADIUSSQUARED * y;
            p = p + dx - dy + YRADIUSSQUARED; // Actualizar el parámetro de decisión
        }
        dx === dy ? table.push(p) : null; // Agrega el ultimo valor de p si dx == dy

        points.push([x, y]);
    }

    // Región 2
    let p2 =
        YRADIUSSQUARED * ((x + 0.5) * (x + 0.5)) +
        XRADIUSSQUARED * ((y - 1) * (y - 1)) -
        XRADIUSSQUARED * YRADIUSSQUARED; // Parámetro de decisión inicial

    table.push(p2); // Agregar el primer valor de p2 al table

    while (y > 0) {
        if (p2 > 0) {
            // "X" queda igual
            y--;
            dx = 2 * YRADIUSSQUARED * x;
            dy = 2 * XRADIUSSQUARED * y;
            p2 = p2 - dy + XRADIUSSQUARED; // Actualizar el parámetro de decisión
        } else {
            x++;
            y--;
            dx = 2 * YRADIUSSQUARED * x;
            dy = 2 * XRADIUSSQUARED * y;
            p2 = p2 + dx - dy + XRADIUSSQUARED; // Actualizar el parámetro de decisión
        }

        table.push(p2); // Agregar cada valor calculado de p2 al table
        points.push([x, y]);
    }

    console.log(points);

    const { fullElipse, quadrants } = getFullEllipse(points); // Obtiene todos los puntos de la elipse

    const finalElipse = fullElipse.map(([x, y]) => [x + xCenter, y + yCenter]); // Mover la elipse al centro

    finalElipse.push([xCenter, yCenter]); // Añadir el centro del círculo

    // Sumar el centro de la elipse a los cuadrantes
    const finalQuadrants = quadrants.map(quadrant =>
        quadrant.map(([x, y]) => [x + xCenter, y + yCenter])
    );

    const data = {
        points: finalElipse,
        octants: finalQuadrants,
        yRadius: yRadius,
        xRadius: xRadius,
        xCenter: xCenter,
        yCenter: yCenter,
        table: table,
    }; // Datos de la elipse

    return data;
}
