import React, { useState } from "react";

function Asistencia({ nombre }) {
    const [numAsistencias, setNumAsistencias] = useState(0);

    return (
        <div>
            <h2>Asistencias de {nombre}</h2>
            <button onClick={() => setNumAsistencias(numAsistencias + 1)}>Agregar Asistencia</button>
            <button onClick={() => setNumAsistencias(numAsistencias - 1)}>Quitar Asistencia</button>
            <p>Número de Asistencias: {numAsistencias}</p>
        </div>
    );
}

export default Asistencia;