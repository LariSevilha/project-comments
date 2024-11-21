import React from "react";
import { Comentario } from "../types";

interface ListaComentariosProps {
  comentarios: Comentario[];
}

const ListaComentarios: React.FC<ListaComentariosProps> = ({ comentarios }) => (
  <ul>
    {comentarios.map((comentario, index) => (
      <li key={index}>
        <p>
          <strong>{comentario.autor}</strong> ({comentario.dataHora}):{" "}
          {comentario.texto}
        </p>
      </li>
    ))}
  </ul>
);

export default ListaComentarios;
