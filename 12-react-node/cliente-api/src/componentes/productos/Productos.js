import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../config/axios';
import { Producto } from './Producto';

export const Productos = () => {

    // productos = state, guardarProductos = funcion para guardar el state
    const [productos, guardarProductos] = useState([]);

    // useEffect para consultar api cuando cargue
    useEffect(() => {

        // Query a la API
        const consultarAPI = async () => {
            const productosConsulta = await clienteAxios.get('/productos');
            guardarProductos(productosConsulta.data);
        }
        // llamado a la api
        consultarAPI();

    }, [productos])

    return (
        <Fragment>
            <h2>Productos</h2>
            <Link to={'/productos/nuevo'} className="btn btn-verde nvo-cliente">
                <i className="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>

            <ul className="listado-productos">
                {productos.map(producto => (
                    <Producto
                        key={producto._id}
                        producto={producto}
                    />
                ))}
            </ul>
        </Fragment>
    )
}
