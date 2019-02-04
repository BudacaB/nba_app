import React from 'react';
import herokuapp from '../api/herokuapp';
import Header from './Header';
import CardsList from './CardsList';

class App extends React.Component {
    state = { image: {} };

    captureApiResponse = async () => {
        const response = await herokuapp.get('/players-stats/james/lebron')
        this.setState({image: response});
        console.log(this.state.image);
    }

    render() {
        return (
            <div>
                <div><Header /></div>
                <br></br>
                <div><CardsList image={this.state.image}/></div>
            </div>
        );
    }
}

export default App;