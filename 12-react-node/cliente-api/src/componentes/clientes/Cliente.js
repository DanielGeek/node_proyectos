import React from 'react';

export const Cliente = ({ cliente }) => {

    // Extraer los valores
    const { nombre, apellido, empresa, email, telefono } = cliente;

    return (
        <li className="cliente">
            <div className="info-cliente">
                <p className="nombre">{nombre} {apellido}</p>
                <p className="empresa">{empresa}</p>
                <p>{email}</p>
                <p>{telefono}</p>
            </div>
            <div class="acciones">
                <a href="#" class="btn btn-azul">
                    <i class="fas fa-pen-alt"></i>
                            Editar Cliente
                </a>
                <button type="button" class="btn btn-rojo btn-eliminar">
                    <i class="fas fa-times"></i>
                            Eliminar Cliente
                </button>
            </div>
        </li>
    )
}
