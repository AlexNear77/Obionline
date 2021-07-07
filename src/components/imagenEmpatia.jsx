import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import useInicio from "../hooks/useInicio";

const ImageBackground = styled(BackgroundImage)`
   height: 600px;
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
      font-size: 2rem;
      @media(min-width: 992px){
         font-size: 2.7rem;
      }
   }
`
const ImagenEmpatia = () => {
   const inicio = useInicio();
   const { nombre, contenido, imagen}  =  inicio[0];
   console.log(imagen);
   return ( 
      <ImageBackground tag="section" fluid={imagen.localFile.sharp.fluid} fadeIn="soft">
         <TextoImagen>
            <h1>{nombre}</h1>
            <div>
               <div>
                  <p>{contenido}</p>
               </div>
               <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/tw0ZioammDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
               </div>
            </div>
            
         </TextoImagen>
      </ImageBackground>
    );
}
 
export default ImagenEmpatia;