import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import NewMessage from '../pages/NMessage'
import MessageList from '../pages/MessageL'

const Routes = () => {
    return (

        <Switch>
            <Route path="/" exact>
                <Dashboard />
            </Route>

            <Route path="/list">
                <MessageList />
            </Route>

            <Route path="/message">
                <NewMessage />
            </Route>
        </Switch>

    )
}

export default Routes