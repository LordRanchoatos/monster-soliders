import './App.css';
import { Component } from 'react';
import CardList from './Components/CardList/CardList.component'
import SearchField from './Components/Search/SearchField.component'


class App extends Component{
  constructor(){
    super();

    this.state = {
      cops: [],
      searchField: ''
    }

    //this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(cops => this.setState({cops: cops}))
  }


  handleSearch = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { searchField, cops} = this.state;
    const filteredCops = cops.filter(cop => cop.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className='App'>
        <h1>Monster Soldiers</h1>
        <SearchField handleSearch={this.handleSearch} 
          placeholder={'search'}
        />
        <CardList cops={filteredCops}/>
      </div>
    )
  }
}


















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Ranchoatos
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
