export function parabolaBressenham(center, axis) {
    const getFullParabola = (points, center, axis) => {
        let reorderedPoints = [];

        if (axis === 'y') { // Si el eje principal es y
            reorderedPoints = points.map(([,y], i) => {
                const reverseIndex = points.length - 1 - i;
                const xReversed = points[reverseIndex][0];
                return [xReversed , y + center];
            }); // Invierte los puntos en X y los desplaza en Y
        } else { // Si el eje principal es x
            reorderedPoints = points.map(([x], i) => {
                const reverseIndex = points.length - 1 - i;
                const yReversed = points[reverseIndex][1];
                return [x + center, yReversed];
            }); // Invierte los puntos en Y y los desplaza en X
        }

        return [...points, ...reorderedPoints]; // Combina los puntos originales con los invertidos
    };


    const points = []; // Arreglo de puntos de la parábola
    const table = []; // Arreglo de valores de la tabla de decisión

    // Iniciar desde el origen
    let x = 0;
    let y = 0;

    // Primer punto y parámetro de decisión
    points.push([x, y]);
    let p = 3 / 4; // O igual a 1

    while (x < center) {
        table.push(p); // Guardar el valor de p en la tabla
        if (p <= 0) {
            x++;
            // Y queda igual
            p += 1; // Actualizar el parametro de decisión
        } else {
            x++;
            y++;
            p = p - 2 * y + 1; // Actualizar el parametro de decisión
        }
        x === center ? table.push(p) : null; // Guardar el valor de p en la tabla si x es igual a center
        axis === 'y' ? points.push([y, x]) : points.push([x, y]); // Decide si el eje principal es x o y
    }

    const fullParabola = getFullParabola(points, center, axis); // Obtener la parábola completa

    const data = {
        points: fullParabola,
        table: table,
    }; // Datos de la parabola

    return data;
}

