import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Iconos from './iconos';
import Layout from './layout';
import { graphql } from 'gatsby';

const Contenido = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   width: 95%;

   @media(min-width: 768px){
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 5rem;
   }
`;

const Sidebar = styled.aside`
   .precio{
      font-size: 2rem;
      color: #75AB00;
   }
   .productor{
      margin-top: 4rem;
      border-radius: 2rem;
      background-color: #75AB00;
      padding: 3rem;
      color: #FFF;

      .p{
         margin:0;
      }
   }
`;

export const query = graphql`
   query($id: String!){
      allStrapiProductos(filter:{ id: {eq: $id}}){
         nodes{
            nombre
            precio
            stock
            vida
            descripcion
            id
            categorias {
               nombre
            }
            productore {
               nombre
               telefono
               email
            }
            imagenproducto{
               localFile {
                  sharp:childImageSharp {
                     fluid(maxWidth: 600, maxHeight:400){
                        ...GatsbyImageSharpFluid_withWebp
                     }
                  }
               }
            }
         }
      }
   }
`

const Productos = ({data: {allStrapiProductos: {nodes}}}) => {
   const { nombre,descripcion,precio,stock,imagenproducto,categorias,productore, vida} = nodes[0];
   console.log(imagenproducto);
   return ( 
      <Layout>
         <h1>{nombre}</h1>
         <Contenido>
            <main>
               <Image
                  fluid={imagenproducto.localFile.sharp.fluid}
                  />
               <p>{descripcion}</p>
            </main>
            <Sidebar>
               <p className="precio">$ {precio} </p>
               <p>Tiempo de vida en Almacen Por Mes: {vida}</p>
               <Iconos 
                    stock={stock}
                    categoria={categorias}
                />
                <div className="productor">
                   <h2>Productor:</h2>
                   <p>{productore.nombre}</p>
                   <p>Tel: {productore.telefono}</p>
                   <p>Email: {productore.email}</p>
                </div>
            </Sidebar>
         </Contenido>
      </Layout>
    );
}
 
export default Productos;