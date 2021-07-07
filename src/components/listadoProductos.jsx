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
         `}>Miembresias Anuales y Mensuales</h2>
         
         <img css={css`
            margin:auto;
            margin-top: 2.5rem;
		    display:block;
         `} src="/static/878a8e32ba3e3372b7cc3d7621368dc7/Premium.png" alt="miembresia" />
         <img css={css`
            margin:auto;
            margin-top: 2.5rem;
		    display:block;
         `} src="/static/4bf98d522b0435674bc8b4de1c6971bf/Basico.png" alt="miembresia" />



<h2 css={css`
            margin-top: 5rem;
         `}>Productos y Artesanias</h2>
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