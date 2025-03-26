const getFullEllipse = (points) => {
    const fullEllipse = [];
    points.forEach((point) => {
        const x = point[0];
        const y = point[1];
        fullEllipse.push([x, y]);
        fullEllipse.push([x, -y]);
        fullEllipse.push([-x, y]);
        fullEllipse.push([-x, -y]);
    });
    return fullEllipse;
}

export function ellipseBresenham(xRadius, yRadius, xCenter = 0, yCenter = 0) {
    const points = []; // Arreglo de puntos del primer cuadrante

    let x = 0; // Primer punto X
    let y = yRadius; // primer punto Y
    points.push([x, y]);

    const YRADIUSSQUARED = yRadius * yRadius; // Y^2
    const XRADIUSSQUARED = xRadius * xRadius; // X^2

    // Región 1
    let p = YRADIUSSQUARED - (XRADIUSSQUARED * yRadius) + (XRADIUSSQUARED/4); // Parámetro de decisión inicial
    
    let dx = 2 * YRADIUSSQUARED * x; 
    let dy = 2 * XRADIUSSQUARED * y; 

    // Mientras el eje X sea menor que el eje Y
    while (dx < dy) {
        // Agregar puntos de los 4 cuadrantes
        

        if (p < 0) {
            x++;
            // "Y" queda igual
            dx = 2 * YRADIUSSQUARED * x;
            dy = 2 * XRADIUSSQUARED * y;
            p = p + dx + YRADIUSSQUARED;
        } else if(p >= 0) {
            x++;
            y--;
            dx = 2 * YRADIUSSQUARED * x;
            dy = 2 * XRADIUSSQUARED * y;
            p = p + dx - dy + YRADIUSSQUARED;
        } 


        points.push([x, y]);
    }

    // Región 2
    let p2 = (YRADIUSSQUARED * ((x + 0.5) * (x + 0.5))) + (XRADIUSSQUARED * ((y - 1) * (y - 1))) - (XRADIUSSQUARED * YRADIUSSQUARED); // Parámetro de decisión inicial
    

      
    while (y > 0) {
        if (p2 > 0) {
            // "X" queda igual
            y--;
            dx = 2 * YRADIUSSQUARED * x;
            dy = 2 * XRADIUSSQUARED * y
            p2 = p2 - dy + XRADIUSSQUARED;
        } else {
            x++;
            y--;
            dx = 2 * YRADIUSSQUARED * x;
            dy = 2 * XRADIUSSQUARED * y
            p2 = p2 + dx - dy + XRADIUSSQUARED;
        }

        points.push([x, y]);
    }
    
    console.log(points);


const fullEllipse = getFullEllipse(points); // Obtiene todos los puntos de la elipse
const finalElipse = fullEllipse.map(([x, y]) => [x + xCenter, y + yCenter]); // Mover círculo al centro
finalElipse.push([xCenter, yCenter]); // Añadir el centro del círculo

    const data = {
        points: finalElipse,
        yRadius: yRadius,
        xRadius: xRadius,
        xCenter: xCenter,
        yCenter: yCenter,
        // table: table,
    }; // Datos de la elipse

    return data;
}


// const result = ellipseBresenham(4, 2, 7, 7);