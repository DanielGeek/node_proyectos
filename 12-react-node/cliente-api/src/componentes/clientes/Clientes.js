import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente">
                <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>

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
