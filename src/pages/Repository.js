import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { darken } from 'polished';

import { repository } from '../redux/repository';
import { ErrorAlert } from '../components/Alert';
import DataTable from '../components/DataTable';

const mapStateToProps = (state, ownProps) => {
  return {
    repository: state.repository,
  }
}

const mapDispatchToProps = {
  fetchRepositories: repository,
}

class Repository extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  componentWillMount() {
    const { search: searchQuery = null } = this.props.location;
    this.props.fetchRepositories(searchQuery ? qs.parse(searchQuery, { ignoreQueryPrefix: true }).user : null);
  }

  componentWillUnmount() {
    // TODO: clear results
  }

  render() {
    // const { error } = this.state;
    const { repository } = this.props;
    let repositoryResultContent = null;

    if (repository.results !== null) {
      const { search: searchQuery = null } = this.props.location;
      repositoryResultContent = (
        <React.Fragment>
          <h4 className="title">Showing {repository.results.length} repositories for user '{qs.parse(searchQuery, { ignoreQueryPrefix: true }).user}'</h4>
          <DataTable className="results">
            <thead>
              <tr>
                {/* name, language, full_name, html_url, stargazers_count, watchers_count, forks, open_issues_count */}
                {['Repo Name', 'Language', 'Full Name', 'Link', 'Stars', 'Watchers', 'Forks', 'Open issues'].map((col, i) => <th key={i}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {repository.results.map(item => (
                <tr key={item.id}>
                  <td key='name'>{item.name}</td>
                  <td key='language'>{item.language}</td>
                  <td key='full_name'>{item.full_name}</td>
                  <td key='git_url'><a href={item.html_url} target='_blank'>Click here</a></td>
                  <td key='stargazers_count'>{item.stargazers_count}</td>
                  <td key='watchers_count'>{item.watchers_count}</td>
                  <td key='forks'>{item.forks}</td>
                  <td key='open_issues_count'>{item.open_issues_count}</td>
                </tr>
              ))}
            </tbody>
          </DataTable>
        </React.Fragment>
      );
    }

    return (
      <div className={this.props.className}>
        {repositoryResultContent}
        {repository.error && <ErrorAlert>{repository.error}</ErrorAlert>}
      </div>
    );
  }
}

const StyledRepository = styled(Repository)`
  & {
    .title {
      color: ${props => darken(0.1, props.theme.textColor)}
    }
    .results {
    }
    a {
      color: ${props => props.theme.textColor};
    }
  }
`

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StyledRepository));
