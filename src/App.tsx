import React, { useState, useEffect } from 'react';
import './App.css';
import FormularioComentario from './components/FormularioComentario';
import ListaComentarios from './components/ListaComentarios';
import { Comentario } from './types';

const App: React.FC = () => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  const adicionarComentario = (novoComentario: Comentario) => {
    setComentarios((prev) => [novoComentario, ...prev]);
  };

  // Recupera os comentários do localStorage ao carregar
  useEffect(() => {
    const comentariosSalvos = localStorage.getItem('comentarios');
    if (comentariosSalvos) {
      setComentarios(JSON.parse(comentariosSalvos));
    }
  }, []);

  // Atualiza o localStorage sempre que os comentários mudam
  useEffect(() => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  }, [comentarios]);

  return (
    <>
      <header>
        <h1>Comentários</h1>
      </header>
      <div className="container">
        <FormularioComentario adicionarComentario={adicionarComentario} />
        <p className="count">Total de comentários: {comentarios.length}</p>
        <ListaComentarios comentarios={comentarios} />
      </div>
    </>
  );
};

export default App;
