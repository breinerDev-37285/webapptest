import React from 'react';
import { useSelector } from 'react-redux';
import i_redux from '../../../intefaces/reduxInterface';
import { commentary, i_student } from '../../../intefaces/studentInterface';

const Student = () => {

    const { active } = useSelector((info:i_redux) => info.student);
    const { comentarios } = active as i_student;

    console.log( comentarios )
    return <>
        { 
            (comentarios && comentarios.length >= 1)
                ? comentarios.map((comentario:commentary, key:number) => <pre key={key}>{ JSON.stringify(comentario,null,4) }</pre>)
                : <div> no existen datos</div>
        }
    </>
}

export default Student;