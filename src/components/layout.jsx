import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';
import Header from './header';


const Layout = (props) => {
   return (
      <Fragment>
         <Global
            styles={css`
               html{
                  font-size: 62.5%;
                  box-sizing: border-box;
               }
               *, *:before, *:after{
                  box-sizing: inherit;
               }
               body{
                  font-size: 18px;
                  font-size: 1.8rem;
                  line-height: 1.5;
                  font-family: 'PT Sans',sans-serif;
               }
               h1,h2,h3{
                  margin: 0;
                  line-height: 1.5;
               }
               h1,h2{
                  font-family: 'Roboto', serif;
                  text-align: center;
                  font-weight: 300;
               }
               h3{
                  font-family: 'PT Sans',sans-serif;
               }
               ul{
                  list-style: none;
                  margin:0;
                  padding:0;
               }
               .contenedor{
                  max-width: 120rem;
                  margin: 0 auto;
                  width: 95%;
               }
               img{
                  max-width: 100%;
               }
            `}
         />
         <Helmet>
            <title>Obionline</title>
               <meta name="description" content="Obio Sitio web de productos organicos naturales" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto&display=swap" rel="stylesheet"></link>
          </Helmet>
         <Header/>
         {props.children} 
      </Fragment>
      );
}
 
export default Layout;