export const circulodda = (r, xCenter = 0, yCenter = 0) => {
    const points = []; // Arreglo de puntos de todos los octantes
    
    let x, y;
    
    for (let index = 0; index <= r; index++) {
        x = index;
        y = Math.round(Math.sqrt(r * r - x * x));
        
        // Calcular 8 octantes usando simetría
        // Octante 1 y 5
        points.push([xCenter + x, yCenter + y]);
        points.push([xCenter - x, yCenter - y]);
        
        // Octante 2 y 6
        points.push([xCenter + y, yCenter + x]);
        points.push([xCenter - y, yCenter - x]);
        
        // Octante 3 y 7
        points.push([xCenter + y, yCenter - x]);
        points.push([xCenter - y, yCenter + x]);
        
        // Octante 4 y 8
        points.push([xCenter + x, yCenter - y]);
        points.push([xCenter - x, yCenter + y]);
    }
    
    return points;
}

const result = circulodda(20, 30, 25);
console.log(result);