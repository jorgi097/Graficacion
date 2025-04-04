export const fillCircule = (points, table = null) => {
    // Primer octante: Son los puntos iniciales.
    const oct1 = points;

    // Segundo octante: (y, x) se invierte el orden.
    const oct2 = points
        .slice()
        .reverse()
        .map(([x, y]) => [y, x]);

    // Tercer octante: (-x, y), mismo orden.
    const oct3 = points.map(([x, y]) => [-x, y]);

    // Cuarto octante: (-y, x), se invierte el orden.
    const oct4 = points
        .slice()
        .reverse()
        .map(([x, y]) => [-y, x]);

    // Quinto octante: (-x, -y), mismo orden.
    const oct5 = points.map(([x, y]) => [-x, -y]);

    // Sexto octante: (-y, -x), se invierte el orden.
    const oct6 = points
        .slice()
        .reverse()
        .map(([x, y]) => [-y, -x]);

    // Séptimo octante: (x, -y), mismo orden.
    const oct7 = points.map(([x, y]) => [x, -y]);

    // Octavo octante: (y, -x), se invierte el orden.
    const oct8 = points
        .slice()
        .reverse()
        .map(([x, y]) => [y, -x]);

    // Concatena todos los arreglos en el orden correcto.
    const circule = [].concat(oct1, oct3, oct4, oct5, oct6, oct7, oct8, oct2);

    // Se retorna el primer octante sin modificar (sin p)
    const fullOct1 = oct1;

    return {
        circule,
        octants: [fullOct1, oct2, oct3, oct4, oct5, oct6, oct7, oct8],
    };
};

const circulodda = (radius, xCenter = 0, yCenter = 0) => {
    const points = []; // Arreglo de puntos del primer octante

    let x = 0,
        y = radius; // Inicializar variables en 0 y radio

    while (x <= y) {
        y = Math.round(Math.sqrt(radius * radius - x * x)); // Calcular y con la ecuación del círculo

        points.push([x, y]); // Añadir a los puntos

        x++; // Siempre aumenta X
    }

    const { circule: fullCircule, octants } = fillCircule(points); // Llenar círculo con todos los puntos por simetria

    const finalCircule = fullCircule.map(([x, y]) => [
        x + xCenter,
        y + yCenter,
    ]); // Mover círculo al centro

    finalCircule.push([xCenter, yCenter]); // Añadir el centro del círculo

    const finalOctants = octants.map(octant =>
        octant.map(([x, y]) => [x + xCenter, y + yCenter])
    ); // Mover octantes al centro

    const data = {
        points: finalCircule,
        octants: finalOctants,
        radius: radius,
        xCenter: xCenter,
        yCenter: yCenter,
    }; // Datos del círculo

    return data;
};

export default circulodda;
