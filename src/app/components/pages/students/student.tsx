import React from 'react';
import { useSelector } from 'react-redux';
import i_redux from '../../../intefaces/reduxInterface';

const Student = () => {

    const { active } = useSelector((info:i_redux) => info.student);

    console.log( active )

    return <>
        {
           <pre>{ JSON.stringify(active,null,4) }</pre>
        }
    </>
}

export default Student;