import React, { useEffect } from 'react';

// importar cliente axios
import clienteAxios from '../../config/axios';

export const Clientes = () => {

    // Query a la API
    const consultarAPI = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');
        console.log(clientesConsulta)
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <h2>
            Clientes
        </h2>
    )
}
