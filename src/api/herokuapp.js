import axios from 'axios';

export default axios.create({
    baseURL: 'https://nba-players.herokuapp.com'
});