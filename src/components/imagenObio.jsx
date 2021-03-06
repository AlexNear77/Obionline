import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
   height: 700px;
`
const TextoImagen = styled.div`
   background-image: linear-gradient(to top, rgba(34,49,63,.75),rgba(34,49,63,.75));
   color: #FFF;
   height: 100%;
   display: flex;
   flex-direction: column;
   flex:1;
   align-items: center;
   justify-content: center;

   h1{
      font-size: 4rem;
      margin: 0%;

      @media(min-width: 992px){
         font-size: 5.8rem;
      }
   }
   p{
      margin-left: 20rem;
      margin-right: 20rem;
      font-size: 2rem;
      @media(min-width: 992px){
         font-size: 2.7rem;
      }
   }
`
const ImagenObio = () => {
   const {image} = useStaticQuery(graphql`
   query{
      image: file(relativePath:{ eq:"imagen_inicio2.jpg"}){
        sharp:childImageSharp {
           fluid{
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
     }
   `)
   return ( 
      <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
         <TextoImagen>
            <h1>Bienvenido a OBIOnline</h1>
            <p>Diversas cooperativas y empresas comunitarias de variadas regiones de seis entidades de México, acercan sus productos de calidad de exportación, con certificación orgánicas y de comercio justo.</p>
            
         </TextoImagen>
      </ImageBackground>
    );
}
 
export default ImagenObio;