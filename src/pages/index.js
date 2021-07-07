import * as React from "react";
import Layout from '../components/layout';
import ImagenObio from "../components/imagenObio";
import ImagenEmpatia from "../components/imagenEmpatia";
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';

const IndexPage = () => {
    //Consultar logo
   const {logo} = useStaticQuery(graphql `
      query{
          logo: file(relativePath: {eq: "mapa.jpg"}){
            publicURL
          }
      }
    `);
     return (
      <Layout>
        <ImagenObio/>
        <ImagenEmpatia/>
        <img css={css`
            margin:auto;
            margin-top: 2.5rem;
		    display:block;
         `} src={logo.publicURL} alt="Mapa" />
      </Layout>
    )
}
 
export default IndexPage
