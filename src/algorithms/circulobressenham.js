import { fillCircule } from "./circulodda";

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
        if(x === y-1)table.push(p);

        // Calcular 8 octantes usando simetría
        points.push([x, y]);

        x++; // Siempre aumentamos x
    }

    const fullCircule = fillCircule(points); // Llenar círculo con todos los puntos por simetria

    const finalCircule = fullCircule.map(([x, y]) => [x + xCenter, y + yCenter]); // Mover círculo al centro
    
    finalCircule.push([xCenter, yCenter]); // Añadir el centro del círculo


    const data = {
        points: finalCircule,
        radius: radius,
        xCenter: xCenter,
        yCenter: yCenter,
        table: table,
    }; // Datos del circulo

    return data;
};

export default circuloBressenham;
