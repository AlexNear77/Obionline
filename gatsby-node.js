const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allStrapiProductos {
                nodes {
                    nombre
                    id
                }
            }
        }
    `);



    // console.log(JSON.stringify(resultado.data.allStrapiPropiedades ) );

    // Si no hay resultados
    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    // Si hay resultados generar los archivos estaticos
    //const paginas = resultado.data.allStrapiPaginas.nodes;
    const productos = resultado.data.allStrapiProductos.nodes;

    // crear los templates para paginas
    // paginas.forEach( pagina => {
    //     actions.createPage({
    //         path: urlSlug( pagina.nombre ),
    //         component: require.resolve('./src/components/paginas.js'),
    //         context: {
    //             id: pagina.id
    //         }
    //     })
    // } )

    // Crear los templates de propiedades
    productos.forEach( producto => {
        actions.createPage({
            path: ('/productos/' + urlSlug(  producto.nombre )),
            component: require.resolve('./src/components/productos.jsx'),
            context: {
                id: producto.id
            }
        })
    })
} 