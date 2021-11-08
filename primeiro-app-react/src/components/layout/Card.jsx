import React from 'react'

export default (props) => {

    return (
        <div className="card">
            <div className="conteudo">
                {props.children}
            </div>

            <div className="footer">
                {props.titulo}
            </div>
        </div>
    )
}