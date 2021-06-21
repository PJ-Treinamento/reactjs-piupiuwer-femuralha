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

interface Piu {
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

function PiuComp() {

  const piuReq = async () => {
    const req = await api.get('pius');
    const [text] = req.data
    console.log(JSON.stringify(text))
  }

  return(
    <Wrapper>
      <Piu_interaction>
        <img className='Profile-pic' src='https://i.imgur.com/gc3e2uG.jpg'/>
        <div className='Wrap-flex'>
          <Like_btn/>
          <p className='Count'>0</p>
          <Share_btn/>
          <p className='Count'>0</p>
        </div>
      </Piu_interaction>
      <Piu_content>
        <h2>Piuwer</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </Piu_content>
      <Piu_comments>
        <input className='Input-Comment' placeholder='Comentários' type="text" />
      </Piu_comments>
    </Wrapper>
  )

}

export default PiuComp