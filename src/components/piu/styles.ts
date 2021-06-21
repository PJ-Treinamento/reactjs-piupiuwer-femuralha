import styled from 'styled-components';
import Retweet from '../../assets/images/retweet.svg'
import Like from '../../assets/images/like.svg'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  margin-top: 5px;
  border-bottom: 1px solid black;
  border-radius: 8px;
`
export const Piu_interaction = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
`
export const Piu_content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 8px;
  max-width: 384px;
  font: 300 16px Montserrat;
`
export const Piu_comments = styled.div`
  display: flex;
  background: rgba(209, 209, 209, 0.1);
  border-radius: 8px;
  align-items: flex-end;
  width: 192px;
  height: 131px;
  justify-content: center;
`
export const Profile_pic = styled.div`
  background: url('https://i.imgur.com/gc3e2uG.jpg');
  background-size: 35px 35px;
  height: 35px;
  width: 35px;
  margin-top: 2px;
  margin-left: 5px;
  border-radius: 50%;
  object-fit: cover;
`
export const Share_btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 500 10px Montserrat;
  background: url(${Retweet});
  height: 22px;
  width: 22px;
  margin-left: 2px;
  margin-top: 2px;
  margin-bottom: -5px;
  background-size: 22px 22px;
`
export const Like_btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 500 10px Montserrat;
  background: url(${Like});
  height: 25px;
  width: 25px;
  margin-top: 2px;
  margin-bottom: -8px;
  background-size: 25px 25px;
  
`