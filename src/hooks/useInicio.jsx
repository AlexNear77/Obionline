import { useStaticQuery, graphql } from "gatsby";


const useInicio = () => {
   const resutaldo = useStaticQuery(
      graphql`
      {
         allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
           nodes {
             id
             nombre
             contenido
             imagen {
               localFile {
                 sharp:childImageSharp {
                    fluid(maxWidth: 1200){
                       ...GatsbyImageSharpFluid_withWebp
                    }
                 }
               }
             }
           }
         }
       }
      `
   )
   return resutaldo.allStrapiPaginas.nodes.map(inicio => ({
      nombre: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen
   }) );
}
 
export default useInicio;