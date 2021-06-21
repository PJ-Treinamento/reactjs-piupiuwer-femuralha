import React, { createContext, useContext, useState } from "react";
import api from "../../services/api";

import { Wrapper, 
  Piu_interaction,
  Piu_comments,
  Piu_content,
  Profile_pic,
  Like_btn,
  Share_btn
     } from "./styles";

export interface Piu {
	id: string;
	user: User;
	likes: PiuLike[];
	text: string;
	created_at: Date;
	updated_at: Date;
}
interface PiuLike {
	id: string;
	user: User;
	piu: Piu;
}
interface User {
	id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: Piu[];
	likes: PiuLike[];
	following: User[];
	followers: User[];
	favorites: Piu[];
}
 interface PiuProps {
  id: string;
  likes: PiuLike[];
  text: string;
  username?: string;
 }

const PiuComp: React.FC <Piu> = ({id , likes, text, user }) => {

  return(
    <Wrapper>
      <Piu_interaction>
        <img className='Profile-pic' src='https://i.imgur.com/gc3e2uG.jpg'/>
        <div className='Wrap-flex'>
          <Like_btn/>
          <p className='Count'>{likes.length}</p>
          <Share_btn/>
          <p className='Count'>0</p>
        </div>
      </Piu_interaction>
      <Piu_content>
        <h2>{user.username}</h2>
        <p>{text}</p>
      </Piu_content>
      <Piu_comments>
        <input className='Input-Comment' placeholder='Comentários' type="text" />
      </Piu_comments>
    </Wrapper>
  )

}

export default PiuComp