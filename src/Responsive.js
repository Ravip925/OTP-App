import { css } from "styled-components"

//for mobile screens
export const mobile = (props) => {
  return css`
    @media only screen and (max-width:425px){
    ${props}
  }
    
`;
}
