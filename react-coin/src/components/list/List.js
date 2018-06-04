import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';

//handleResponse is in curly brackets because we dont export handleResponse by
//default, we just export regularly

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null,
    };
  }


componentDidMount() {
  this.setState({loading: true});
  fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
  .then(handleResponse)
  .then((data) => {
    this.setState({
      currencies: data.currencies,
      loading: false,
    });
  })
  .catch((error) => {
    this.setState({
      error: error.errorMessage,
      loading: false,
    });
  });
}


  renderChangePercent(percent) {
    if(percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>
    } else {
      return <span>{percent}</span>
    }
  }

  render() {
    const { loading, error, currencies } = this.state;

    // render only loading component, if loading state is set to true
    if(loading) {
      return <div className="loading-container"><Loading /></div>
    }

    //render only error message, if error occured while fetching data
    if (error) {
      return <div className="error">{error}</div>
    }

    return (
      <Table currencies={currencies}/>
    );
  }
}

export default List;

/**

REACT NOTES:
When you create a class constructor in React, first thing you need to do is call super() method
Because ES6 class constructor must call super if they are subclasses, and all class based components
are subclasses of React.Component className

Methods prefixed with "will" are called right before something happens and methods prefixed with "did"
are called right after something happens

componentDidMount() {
  //Called immediately after component is mounted
}

componentWillMount() {
  //Like a constructor because it is invoked immediately before mounting occurs, before render()
}

componentWillReceiveProps() {
  //Called when component is being updated
}

componentWillUnmount() {
  //Called when the component is unmounting
}

using `` for strings instead of '' means it's a template literal
equivalent of using $"" in C#

**/
