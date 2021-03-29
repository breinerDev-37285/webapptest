import { Redirect, Route,Switch } from 'react-router-dom';
import DashboardScreen from '../../components/pages/dashboard/dashboardScreen';
import Drivers from '../../components/pages/drivers';
import Students from './students';
import Nav from '../../components/ui/navbar';


const DashboardRoutes = () => <div>
    <Nav/>
    <Switch>
        <Route
            path='/'
            exact={ true }
            component={ DashboardScreen }
        />
        <Route
            path='/students'
            exact={ false }
            component={ Students }
        />
        <Route
            path='/drivers'
            exact={ true }
            component={ Drivers }
        />
        <Redirect to='/'/>
    </Switch>
</div>

export default DashboardRoutes;