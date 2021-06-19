import styled from "styled-components";

import logoGalinha from '../../assets/images/Galinha.svg'


export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: #FFFFFF;  
  height:80px;
  min-width: 400px;
`
export const Wrapper_right = styled.div`
  display: flex;
  align-items: center;
`
export const Galinha = styled.div`
  background: url(${logoGalinha});
  background-size: 60px 60px;
  display: flex;
  height: 60px;
  width: 60px;
`
export const Button_feed = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFB703;
  border-radius: 40px;
  width: 120px;
  height: 30px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`
