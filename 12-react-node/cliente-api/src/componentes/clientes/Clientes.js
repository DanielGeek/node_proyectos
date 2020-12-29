import React, { Fragment, useEffect, useState } from 'react';

// importar cliente axios
import clienteAxios from '../../config/axios';
import { Cliente } from './Cliente';

export const Clientes = () => {

    const [clientes, guardarClientes] = useState([]);

    // Query a la API
    const consultarAPI = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');
        const { data } = clientesConsulta;
        guardarClientes(data);
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <Fragment>
            <h2>Clientes</h2>
            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente
                        key={cliente._id}
                        cliente={cliente} />
                ))}
            </ul>
        </Fragment>
    )
}
