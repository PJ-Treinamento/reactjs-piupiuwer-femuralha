import styled from "styled-components";

import logoGalinha from '../../assets/images/Galinha.svg'

export const Wrap = styled.div`
  margin: 0 auto;
  min-width: 500px;
  display: flex;
  justify-content: space-around;
`
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

export const Wrapper_down = styled.div`
  display: flex;
`
export const Aside = styled.div`
  display: flex;
  width: 400px;
  min-width: 100px;
  margin-right: 16px;
  @media (max-width:1024px){
    display: none;
               }
`
export const Timeline = styled.div`
  display: block;
  width: 624px;
  min-height: 100px;
  background-color: #ffffff;
  min-width: 400px;
  margin-top: 13px;
  background: #fff;
  border-radius: 12px;
`