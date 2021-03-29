import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadDrivers } from '../../../actions/drivers';
import { startLoading } from '../../../actions/ui';
import i_redux from '../../../intefaces/reduxInterface';
import Loading from '../../ui/loading';
import ListDrivers from './list';

const Drivers = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((info:i_redux) => info.ui);

    useEffect(() => {
        dispatch( startLoadDrivers() )
        dispatch( startLoading() );
    },[ dispatch ])

    return <>
        {
            loading 
            ?  <Loading type='spin' color='#48f542'/>
            : <div>
                <h3>lista de conductores</h3>
                
                <ListDrivers />
                
            </div>
        }
    </>
}


export default Drivers;