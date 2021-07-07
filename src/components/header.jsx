import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react';
import Navegacion from './nav';

const Header = () => {

   //Consultar logo
   const {logo} = useStaticQuery(graphql `
      query{
         logo: file(relativePath: {eq: "logo.png"}){
            publicURL
         }
      }
   `);


   return ( 
      <header
         css={css`
            background-color: #757b63;
            padding: 1rem;
         `}
      >
         <div
            css={css`
               max-width: 1200px;
               margin: 0 auto;
               text-align: center;
               @media (min-width: 768px){
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
               }
            `}
         >
            <Link to="/">
               <img src={logo.publicURL} alt="Logo Obio" />
            </Link>

            <Navegacion/>
         </div>
      </header>
    );
}
 
export default Header;