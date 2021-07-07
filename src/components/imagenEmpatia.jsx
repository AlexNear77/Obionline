import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
//import useInicio from "../hooks/useInicio";

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

   .flex-container{
      display: flex;
      justify-content: space-between;
      text-align: center;
   }
   .flex-container div{
      margin: 1rem;
      color: white;
      width: 70rem;

   }

   @media(max-width: 600px){
      .flex-container{
      flex-direction: column;
      }
      .flex-containter div{
         flex-basis:100%;
      }
   }
`
const ImagenEmpatia = () => {
   const {image} = useStaticQuery(graphql`
   query{
      image: file(relativePath:{ eq:"imagen_inicio3.jpg"}){
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
            <h1>Productos sustentables</h1>
            <div className="flex-container">
               <div>
                  <p>
                  Elaborados por pequeños productores y productoras pertenecientes a cooperativas y organizaciones campesinas e indígenas que trabajan bajo esquemas basados en el respeto y cuidado de la biodiversidad, el comercio justo y el uso de prácticas agroecológicas.
                     </p>
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