import React from 'react';
import { Link } from 'react-router-dom';

export const Producto = ({ producto }) => {

    // elimina un producto
    const eliminarProducto = id => {
        console.log('eliminado...', id);
    }

    const { _id, nombre, precio, imagen } = producto;

    return (
        <li className="producto">
            <div className="info-producto">
                <p className="nombre">{nombre}</p>
                <p className="precio">{precio}</p>
                {imagen ? (
                    <img alt="imagen 1" src={`http://localhost:5000/${imagen}`} />
                ) : null}
            </div>
            <div className="acciones">
                <Link to={`/productos/editar/${_id}`} className="btn btn-azul">
                    <i className="fas fa-pen-alt"></i>
                            Editar Producto
                </Link>

                <button
                    type="button"
                    className="btn btn-rojo btn-eliminar"
                    onClick={() => eliminarProducto(_id)}
                >
                    <i className="fas fa-times"></i>
                    Eliminar Producto
                </button>
            </div>
        </li>
    )
}
