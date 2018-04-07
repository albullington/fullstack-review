import React from 'react';
import reactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  //component did mount

  search (term) {
    console.log(`${term} has changed....`);
    var app = this;
    axios.post('/repos', {
      data: term,
    })
    .then(function(response) {
      console.log('this', this);
      console.log(response.data);
      app.setState({
        repos: response.data
      })
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

reactDOM.render(<App />, document.getElementById('app'));