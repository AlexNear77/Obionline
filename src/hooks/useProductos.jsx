import {graphql,useStaticQuery} from 'gatsby';

const useProductos = () => {
   const datos = useStaticQuery(graphql`
   query{
      allStrapiProductos {
        nodes {
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
   `)
   return datos.allStrapiProductos.nodes.map(producto => ({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
      vida: producto.vida,
      id: producto.id,
      imagen: producto.imagenproducto,
      productores: producto.productore,
      categoria: producto.categorias
   }) );
}

export default useProductos;