import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Using hashrouter for older browsers
import styled from 'styled-components';
import { Provider } from 'react-redux';

import Nav from './components/Nav';
import HomePage from './pages/Home';
import SearchResultsPage from './pages/SearchResults';
import RepositoryPage from './pages/Repository';
import NotFound from './pages/404';
import { store } from './redux/index';

const App = ({ className }) => (
  <Provider store={store}>
      <div className={className}>
        <Router>
          <React.Fragment>
            <Nav />
            <div className="pageContent">
              <Switch>
                  {/* query params on the pages would ensure the pages are bookmark-able */}
                  <Route exact path='/' component={HomePage} />
                  <Route path='/results' component={SearchResultsPage} />
                  <Route path='/repository' component={RepositoryPage} />

                  {/* 404 route below */}
                  <Route component={NotFound} />

              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </div>
  </Provider>
);

export default styled(App)`
  color: ${props => props.theme.textColor};

  & .pageContent {
    padding: 10px 30px;
  }
`;
