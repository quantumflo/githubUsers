import React from 'react';
import './App.css';
import Searchbox from './components/searchBox';

import Cardlist from './components/cardList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      search: "",
      list: [],
      currentPage:1,
      postsPerPage: 10
    }
  }

  onInputChange = (event) =>{
  console.log(event.target.value);
  this.setState({search:event.target.value})

  }


  async componentDidMount() {
    const url = 'https://api.github.com/search/users?q=location:bangalore&page=10&per_page=100';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);                                   // eslint-disable-next-line
    const list = await this.setState({list:data.items})
  }



  render() {

    const filterUsers= this.state.list.filter(user=>{
      return user.login.includes(this.state.search)
    })

    return ( < div >
      <h1 > Github User List < /h1> <
      Searchbox inputChange={this.onInputChange}/ >
      <
      Cardlist list={filterUsers} / >
      <
      /div>
    )
  }
}

export default App;
