import React, { Fragment, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import clienteAxios from '../../config/axios';


const EditarCliente = (props) => {

    // obtener el ID
    const { id } = props.match.params;

    // Cliente = state, datosCliente = función para guardar el state
    const [cliente, datosCliente] = useState({
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: ''
    });

    // Destructuring
    const { _id, nombre, apellido, email, empresa, telefono } = cliente;



    // useEffect, cuando el componente carga
    useEffect(() => {
        // Query a la API
        const consultarAPI = async () => {
            const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);

            // guardar en el state
            datosCliente(clienteConsulta.data);
        }

        consultarAPI();
    }, [id]);

    // Leer los datos del formulario
    const actualizarState = e => {
        // Almacenar lo que el usuario escribe en el state
        datosCliente({
            // Obtener una copia del state actual
            ...cliente,
            [e.target.name]: e.target.value
        });
    }

    // Enviar petición por axios para actualizar el cliente
    const actualizarCliente = e => {
        e.preventDefault();

        // enviar petición por axios
        clienteAxios.put(`/clientes/${_id}`, cliente)
            .then(res => {
                // validar si hay errores de mongo
                if (res.data.code === 11000) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un error',
                        text: 'Ese correo ya existe'
                    })
                } else {
                    Swal.fire(
                        'Exito!',
                        'Se actualizo correctamente!',
                        'success'
                    )
                }

                // redireccionar
                props.history.push('/');
            })
    }

    // Validar el formulario
    const validarCliente = () => {

        // revisar que las propiedas del state tenga contenido
        let valido = !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;

        // return true o false
        return valido;
    }

    return (
        <Fragment>
            <h2>Editar Cliente</h2>

            <form
                onSubmit={actualizarCliente}
            >
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre Cliente" name="nombre" onChange={actualizarState} value={nombre} />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text" placeholder="Apellido Cliente" name="apellido" onChange={actualizarState} value={apellido} />
                </div>

                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text" placeholder="Empresa Cliente" name="empresa" onChange={actualizarState} value={empresa} />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email" placeholder="Email Cliente" name="email" onChange={actualizarState} value={email} />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="tel" placeholder="Teléfono Cliente" name="telefono" onChange={actualizarState} value={telefono} />
                </div>

                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Guardar cambios" disabled={validarCliente()} />
                </div>

            </form>
        </Fragment>
    )
}

// HOC, es una función que toma un componente y retorna un nuevo componente
export default withRouter(EditarCliente);
