export function parabolaBressenham(center, axis) {
    const getFullParabola = (points, center, axis) => {
        let reorderedPoints = [];

        if (axis === 'y') {
            reorderedPoints = points.map(([,y], i) => {
                const reverseIndex = points.length - 1 - i;
                const xReversed = points[reverseIndex][0];
                return [xReversed , y + center];
            });
        } else {
            reorderedPoints = points.map(([x], i) => {
                const reverseIndex = points.length - 1 - i;
                const yReversed = points[reverseIndex][1];
                return [x + center, yReversed];
            });
        }
        return [...points, ...reorderedPoints];
    };


    const points = [];
    const table = []; // Arreglo de valores de la tabla de decisión
    let x = 0;
    let y = 0;

    // Primer punto y parámetro de decisión
    points.push([x, y]);
    let p = 3 / 4; // O igual a 1

    while (x < center) {
        table.push(p);
        if (p <= 0) {
            x++;
            // Y queda igual
            p += 1;
        } else {
            x++;
            y++;
            p = p - 2 * y + 1;
        }
        x === center ? table.push(p) : null;
        axis === 'y' ? points.push([y, x]) : points.push([x, y]);
    }

    const fullParabola = getFullParabola(points, center, axis);

    const data = {
        points: fullParabola,
        table: table,

    }; // Datos de la parabola

    return data;
}

