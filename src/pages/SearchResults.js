import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { darken } from 'polished';

import { search } from '../redux/search';
import { ErrorAlert } from '../components/Alert';
import DataTable from '../components/DataTable';
import Button from '../components/Button';

const mapStateToProps = (state, ownProps) => {
  return {
    search: state.search,
  }
}

const mapDispatchToProps = {
  doSearch: search,
}

class SearchResults extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentWillMount() {
    const { search: searchQuery = null } = this.props.location;
    this.props.doSearch(search ? qs.parse(searchQuery, { ignoreQueryPrefix: true }).query : null);
  }

  componentWillUnmount() {
    // TODO: clear
  }

  viewRepository = (user) => {
    this.props.history.push(`/repository?${qs.stringify({ user, })}`)
  }

  render() {
    // const { error } = this.state;
    const { search } = this.props;
    let searchResultContent = null;

    if (search.results !== null) {
      const { search: searchQuery = null } = this.props.location;
      searchResultContent = (
        <React.Fragment>
          <h4 className="title">Showing {search.results.items.length} of {search.results.total_count} results for '{qs.parse(searchQuery, { ignoreQueryPrefix: true }).query}'</h4>
          <DataTable>
            <thead>
              <tr>
                {['User ID', 'GitHub profile link', 'Actions'].map((col, i) => <th key={i}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {search.results.items.map(item => (
                <tr key={item.id}>
                  <td key='avatar'><img alt={`Avatar for ${item.id}}`} src={item.avatar_url} width='15px' height='15px' /> {item.login}</td>
                  <td key='git_url'><a href={item.html_url} target='_blank'>Click here</a></td>
                  <td key='detail'><Button onClick={() => this.viewRepository(item.login)}>View repos</Button></td>
                </tr>
              ))}
            </tbody>
          </DataTable>
        </React.Fragment>
      );
    }

    return (
      <div className={this.props.className}>
        {searchResultContent}
        {search.error && <ErrorAlert>{search.error}</ErrorAlert>}
      </div>
    );
  }
}

const StyledSearchResults = styled(SearchResults)`
  & {
    .title {
      color: ${props => darken(0.1, props.theme.textColor)}
    }
    ${DataTable} {
    }
    a {
      color: ${props => props.theme.textColor};
    }
  }
`

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StyledSearchResults));
