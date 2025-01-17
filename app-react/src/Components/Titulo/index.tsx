import React from "react";

interface TituloProps {
    nome: string;
    descricao?: string;
    data: string;
    children: React.ReactNode;
}

//const Titulo = ({nome, descricao, data} : TituloProps) => {
const Titulo:React.FC<TituloProps> = ({nome, descricao, data, children}) => {
    return (
    <>
        <h1>Título da aplicação</h1>
        <h2>Curso de {nome}!</h2>
        <h2>Data: {data}</h2>
        <h3>{descricao}</h3>
        {children}
    </>);
}

export default Titulo