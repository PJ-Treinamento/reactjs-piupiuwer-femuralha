import React, {InputHTMLAttributes} from 'react';

import {InputComponent} from './styles';

interface InputProps  extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    placeholder: string;
}

const Input: React.FC <InputProps> = ({label, placeholder,}) => {
    return (
               <InputComponent/>              
    );
}

export default Input;