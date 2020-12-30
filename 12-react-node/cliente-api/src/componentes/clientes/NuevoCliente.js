import React, { Fragment } from 'react';

export const NuevoCliente = () => {
    return (
        <Fragment>
            <h2>Nuevo Cliente</h2>

            <form>
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre Cliente" name="nombre" />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text" placeholder="Apellido Cliente" name="apellido" />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text" placeholder="Empresa Cliente" name="empresa" />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email" placeholder="Email Cliente" name="email" />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="email" placeholder="Teléfono Cliente" name="telefono" />
                </div>

                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Agregar Cliente" />
                </div>

            </form>
        </Fragment>
    )
}
