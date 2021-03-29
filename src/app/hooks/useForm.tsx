import { useState } from 'react';

const useForm = ( init = {} ):Array<any> => {
    

    const [ values, setValues ] = useState( init );

    const onChangeInput = ( event:any ) => {

        let { target } = event;
        let { name,value } = target as HTMLInputElement;


        setValues({
            ...values,
            [name]: value
        })
    }

    const reset = () => setValues(init)

    return [
        values,
        onChangeInput,
        reset
    ]
}

export default useForm;