import React from 'react';
import './estilo.css';

export default function ItemLista() {
  return (
    <div className="boxSigno">
      <div className="nomeSigno">
        Aquário
      </div>
      
      <img className="imagemSigno" src="/assets/aquario.jpg" alt="Aquário"/>
      
      <div className="periodoNascimento">
        21/01 - 19/02
      </div>
    </div>
  )
}
