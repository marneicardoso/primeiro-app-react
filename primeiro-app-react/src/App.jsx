import React from 'react'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import Repeticao from './components/Repeticao'

export default () =>
    <div className="app">
        <Card titulo="Primeiro Componente">
            <Primeiro/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum facilis nobis asperiores ex magnam?
        </Card>

        <Card titulo="Segundo Componente">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dignissimos!
        </Card>

        <Card titulo="Terceiro Componente">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quaerat enim itaque adipisci, blanditiis illum?
        </Card>

        <Card titulo="Produtos">
            <Repeticao></Repeticao>
        </Card>
    </div>
