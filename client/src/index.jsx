import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './components/routes/routes.jsx';
import axios from 'axios';
import Nav from './Nav.jsx';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      id: '',
      username: ''
    }
  }
  componentDidMount() {
    axios.get('/checkUser')
      .then(res => {
        console.log('checkuser returned,', res)
        if (res.data.userFound === false) {
          console.log('no userFound')
          this.setState({isLoggedIn: false})
        } else if (res.data[0].id) {
          console.log(res.data[0])
          this.setState({
            isLoggedIn: true,
            id: res.data[0].id,
            username: res.data[0].username
            //perhaps use spread operator here
          })
        }
      })
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <Routes isLoggedIn={this.state.isLoggedIn} username={this.state.username}/>
      </div>
    )}
}

ReactDOM.render(<App />, document.getElementById('app'));
