import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveDriver, closeDriverModal } from '../../../actions/drivers';
import { customStyles } from '../../../helpers/modal';
import useForm from '../../../hooks/useForm';
import { i_driver } from '../../../intefaces/driverInterface';
import i_redux from '../../../intefaces/reduxInterface';



const ModalCRUD = () => {

    const dispatch = useDispatch();

    const { active,openModal } = useSelector((info:i_redux) => info.drivers);

    const [ values, onChangeInput,reset ] = useForm(active);

    const activeId = useRef( active );

    useEffect(() => {
        if( active !== activeId.current ){
            reset( active )
            activeId.current = active
        }
    },[active,reset])
    

    const { 
        nombre_conductor:name,
        apellido_conductor:lastname,
        cedula_conductor:cedula,
        celular_conductor:telf,
        email_conductor:email,
        numerorecorridomaximo,
        state_conductor:estado
    }:i_driver = values;


    const closeModal = () => {
        dispatch( closeDriverModal() );
        dispatch( clearActiveDriver() );
    }

    const afterOpenModal = () => {   
    }

    const handleSubmit =  (e:Event) => {
        e.preventDefault();
        console.log(values)
    }

    return <>
        <Modal
            isOpen={ Boolean(openModal) }
            ariaHideApp={ false }
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <form onSubmit={ handleSubmit as any}>
                <div className='mb-3'>
                    <label htmlFor="nombreid" className='form-label'>Nombre</label>
                    <input
                        id='nombreid' 
                        type="text"
                        className='form-control'
                        name='name'
                        value={ name }
                        disabled={ true }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="apellidoid" className='form-label'>Apellido</label>
                    <input
                        id='apellidoid' 
                        type="text"
                        className='form-control'
                        name='lastname'
                        value={ lastname }
                        disabled={ true }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="cedulaid" className='form-label'>Cedula</label>
                    <input
                        id='cedulaid' 
                        type="text"
                        className='form-control'
                        name='cedula'
                        value={ cedula }
                        disabled={ true }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="correoid" className='form-label'> Correo</label>
                    <input
                        id='correoid' 
                        type="email"
                        className='form-control'
                        name='email'
                        value={ email }
                        disabled={ true }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="telefonoid" className='form-label'>Telefono</label>
                    <input
                        id='telefonoid' 
                        type="telf"
                        className='form-control'
                        name='telf'
                        value={ telf }
                        disabled={ true }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="estadoid" className='form-label'>Estado</label>
                    <select value={String(estado) } onChange={onChangeInput}>
                        <option value="false">inactivo</option>
                        <option value="true">activo</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="recorridosid" className='form-label'>max recorrido</label>
                    <input
                        id='recorridosid' 
                        type="number"
                        className='form-control'
                        name='numerorecorridomaximo'
                        value={ numerorecorridomaximo }
                        onChange={ onChangeInput }
                    />
                </div>

                <button type="submit" className='btn btn-success mb-3' style={{width:'100%'}}>Enviar</button>
                <button type="button" className='btn btn-danger' onClick={ closeModal } style={{width:'100%'}}>Cancelar</button>
            </form>
        </Modal>
    </>
}

export default ModalCRUD;