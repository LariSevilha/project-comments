import React, { useState } from "react";
import { Comentario } from "../types";

interface FormularioComentarioProps {
  adicionarComentario: (comentario: Comentario) => void;
}

const FormularioComentario: React.FC<FormularioComentarioProps> = ({
  adicionarComentario,
}) => {
  const [autor, setAutor] = useState<string>("");
  const [texto, setTexto] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoComentario: Comentario = {
      autor,
      texto,
      dataHora: new Date().toLocaleString(),
    };
    adicionarComentario(novoComentario);
    setAutor("");
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        required
      />
      <textarea
        placeholder="Seu comentário"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioComentario;
