import { useState } from 'react';

const useForm = ( init = {} ):Array<any> => {

    const [ values, setValues ] = useState( init );

    const onChangeInput = (e:Event) => {
        const { name,value } = e.target as HTMLInputElement;

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