import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import ListStudents from '../../components/dashboard/estudiantes/list';

const StudentsRoutes = () => {
    const { url } = useRouteMatch();
    console.log(url)

    return <Switch>
        <Route
            path={`${url}/list`}
            exact={true}
            component={ ListStudents }
        />

        <Redirect to='/'/>
    </Switch>
}


export default StudentsRoutes;