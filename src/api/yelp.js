import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer ffmIW7a7DgFUJxgAtTUXL1SslcCuhpyyyddVPk4TCKkASVj68PQ3OOc8lZVFXluOoJGjO6YPP-u-FXASt2S9S__s7u9fgbJHt2dJMksaQhM-BIRMPGzMvS6zQW6yYHYx'
    }
});