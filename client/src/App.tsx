import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        axios.get('http://localhost:5000')
        .then((response) => {
            this.setState({
            data: response.data
            })
        })
        .catch((error) => {
            console.error(`Error fetching data: ${error}`);
        })
    }

    render() {
        return (
        <Router>
            <div className="App">
            <header className="App-header">
                <h1>GoodThings</h1>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                </ul>
            </header>
            <main>
                <Route exact path="/">
                {this.state.data}
                </Route>
                <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                </Switch>
            </main>
            </div>
        </Router>
        <div className="App">
            <header className="App-header">
            GoodThings
            </header>
            {this.state.data}
        </div>
        );
    }
    }

export default App;