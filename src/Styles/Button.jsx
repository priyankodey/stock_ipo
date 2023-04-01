import styled from "styled-components";

export const Button = styled.button`

  background-color: #0276FF;
  border-radius: .5rem;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.259) 0 1px 2px inset;
  color: #fff;
  cursor: pointer;
  text-align: center;
  transition: color .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
  
&:active,
&:hover {
  background-color: #006AE8;
  transform: scale(.99);
}
&.btn {
  padding: .5rem 1rem;
}
a {
  color: #fff;
  text-decoration: none;
  display: flex;
  padding: .5rem 1rem;  
  font-size: 1.1rem;
}


`;