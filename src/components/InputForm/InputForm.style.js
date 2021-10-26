import styled from "styled-components";

export const Wrapper = styled.div``;
export const Title = styled.h3``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  input[type="submit"] {
    border: none;
    background-color: #555;
    font-size: 1.5rem;
  }
  input[type="submit"]:hover {
    background-color: #333;
    cursor: pointer;
  }
  input[type="number"] {
    margin: 1rem 0;
    font-size: 1.5rem;
  }
`;
