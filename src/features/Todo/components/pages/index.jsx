import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../../../components/NotFound';
import DetailPage from './DetailPage';
import ListPage from './ListPage';

TodoFeatures.propTypes = {
   
};


function TodoFeatures() {   
const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact/>
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact/>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeatures;