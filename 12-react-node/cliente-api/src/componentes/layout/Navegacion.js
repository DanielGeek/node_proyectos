import React from 'react'

export const Navegacion = () => {
    return (
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">
                <a href="/" className="clientes">Clientes</a>
                <a href="/productos" className="productos">Productos</a>
                <a href="/pedidos" className="pedidos">Pedidos</a>
            </nav>
        </aside>
    )
}
