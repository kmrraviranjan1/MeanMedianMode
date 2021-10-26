import styled from "styled-components";

export const Wrapper = styled.div`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
background-color:#42b3f5;
height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
      justify-content: space-around;
    flex-direction: row;
  }
`;
