import React from "react";
import Alerta from "./Alerta";
import Formulario from "./Formulario";
import Letra from "./Letra";
import useLetras from "../hooks/UseLetras";

const AppLetras = () => {

    const { alerta, letra, cargando} = useLetras()

    return (
        <>
            <header>
                Busqueda de letras de canciones
            </header>
            
            <Formulario/>
            
            <main>
                <Letra/>
                {alerta ? <Alerta>{alerta}</Alerta> :
                letra ? <Letra/> :
                cargando ? 'Cargando...':
                <p className="text-center">Busca letras de tus artistas favoritos</p>}
            </main>
        </>
    );
}

export default AppLetras;