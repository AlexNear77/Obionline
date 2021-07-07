import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
   display: flex;
   flex-direction: column;
   padding-bottom: .5rem;

   @media( min-width: 768px){
      padding: 0;
      flex-direction: row;
   }
`
const NavLink = styled(Link)`
   color: #FFFFFF;
   font-weight: 700;
   font-family: 'PT Sans', sans-serif;
   text-decoration: none;
   padding: .5rem;
   margin-right: 1rem;

   //Esto es para quitar un espacio que genera el ultimo nav que se 
   //Encuentre ala derecha
   &:last-of-type{
      margin-right: 0;
   }
   &.pagina-actual{
      border-bottom: 2px solid #FFF;
   }
`;

const Navegacion = () => {
   return ( 
      <Nav>
         <NavLink 
            to={'/'} 
            activeClassName="pagina-actual">
            Inicio
         </NavLink>
         <NavLink 
            activeClassName="pagina-actual">
            Nosotros
         </NavLink>
         <NavLink
            activeClassName="pagina-actual">
            Productores
         </NavLink>
         <NavLink
            activeClassName="pagina-actual">
            Contacto
         </NavLink>
         <NavLink 
            to={'/productos'}                                     activeClassName="pagina-actual">
            Tienda
         </NavLink>
      </Nav>
      );
}
 
export default Navegacion;