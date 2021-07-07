import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`;

const Iconos = ({ stock,categoria }) => {

    const { iconos } = useStaticQuery( graphql`
        query {
            iconos: allFile(filter: { relativeDirectory: { eq: "iconos"}}) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `)

    const imagenesIconos = iconos.edges;

    return ( 
        <ListadoIconos>

            <li> 
               <img src={imagenesIconos[0].node.publicURL} alt="icono categoria" />
                <p>{categoria.nombre}</p>
            </li>
            <li> 
               <img src={imagenesIconos[1].node.publicURL} alt="icono stock" />
                <p>{stock}</p>
            </li>
        </ListadoIconos>
     );
}
 
export default Iconos;