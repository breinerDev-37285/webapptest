import { Redirect, Route,Switch } from 'react-router-dom';
import DashboardScreen from '../../components/dashboard/dashboardScreen';
import Students from './students';

const DashboardRoutes = () => <Switch>
    <Route
        path='/'
        exact={ true }
        component={ DashboardScreen }
    />
    <Route
        path='/estudiantes'
        exact={ false }
        component={ Students }
    />

    <Redirect to='/'/>
</Switch>


export default DashboardRoutes;