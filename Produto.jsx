import React from 'react'

const Produto = () => {
  return (
        <>
        <p>Nome: {nome}</p>
        <p>Preço: {preco}</p>
        <p>Categoria: {categoia}</p>
        <p>Quantidade: {quantidade}</p>
        <p>Status: {quantidade >= 0 ?  'DISPONIVEL' : 'ESGOTADO'}</p>          
    </>
  )
}

export default Produto