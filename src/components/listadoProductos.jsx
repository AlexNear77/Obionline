import React,{useState,useEffect} from 'react';
import {css} from '@emotion/react';
import useProductos from '../hooks/useProductos';
import ProductoPreview from './productoPreview';
import * as listadoProductosCSS from '../css/listadoProductos.module.css';
import useFiltro from '../hooks/useFiltro';

const ListadoProductos = () => {

   const  resultado = useProductos();
   const [productos] = useState(resultado);
   const [filtradas,guardarFiltradas] = useState([]);

   //filtrado de producto
   const { categoria, FiltroUI } = useFiltro()

   useEffect(( ) =>{
      if(categoria){
         const filtro = productos.filter(producto => producto.categoria.nombre === categoria);
         guardarFiltradas(filtro);
      }else{
         guardarFiltradas(productos);
      }
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
   },[categoria])
 
   return ( 
      <>
         <h2 css={css`
            margin-top: 5rem;
         `}>Productos y artesanias</h2>

         {FiltroUI()}

         <ul className={listadoProductosCSS.productos}>
            {filtradas.map( producto =>(
               <ProductoPreview
                  key={producto.id}
                  producto={producto}
               />
            ))}
         </ul>
      </>
    );
}
 
export default ListadoProductos;