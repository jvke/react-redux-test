import React from 'react';
import styled from 'styled-components';
import { lighten, transitions } from 'polished';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import TextBox from './TextBox';
import Button from './Button';
import { ErrorAlert } from './Alert';

const mapDispatchToProps = {
};

class SearchBar extends React.Component {
  state = {
    term: null,
    error: null,
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  onTextChange = ({ target: { value: term } }) => {
    const { error }  = this.state;
    this.setState({
      term: term || null,
      // if a valid search term exists, and there is an existing
      // error, clear the error
      error: term && error ? null : error,
    });
  }

  doSearch = () => {
    const { term } = this.state;

    if (term) {
      // TODO: Store this in history of search terms instead.
      this.props.history.push(`/results?${qs.stringify({ query: term })}`)

    } else {
      this.setState({
        error: 'Invalid search term, please try again.'
      });
    }

  }

  render() {
    const { term, error } = this.state;

    return (
      <div className={this.props.className}>
        <TextBox placeholder="Enter a search term..." className="searchText" onChange={this.onTextChange} value={term || ''} />
        <Button className="searchButton" onClick={this.doSearch}>Search</Button>
        {error && <ErrorAlert>{error}</ErrorAlert>}
      </div>
    );
  }
}

const SearchBarContainer = connect(null, mapDispatchToProps)(withRouter(SearchBar));

export default styled(SearchBarContainer)`
  & {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    width: 50vw;
    margin: 0 auto;

    @media all and (max-width: 800px) {
      & {
        justify-content: space-around;
      }
      & .searchButton, & .searchText {
        margin: 5px 0;
      }
    }

    .searchButton {
      margin-left: 1px;
      flex-grow: 1;
      border-radius: 0px 4px 4px 0px;
    }

    .searchText {
      flex-grow: 5;
      border: solid 5px ${props => lighten(0.10, props.theme.brand.light)};
      display: block;
      margin: 0 auto;
      padding: 8px;
      line-height: 1.15;
      font-size: 18px;
      border-radius: 3px 0px 0px 3px;

      ${transitions('border 200ms ease-in-out 0s')}

      &:focus {
        outline: none;
        border: solid 5px ${props => lighten(0.25, props.theme.brand.light)};
      }
    }
  }
`;
