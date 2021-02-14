import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer RW3GvIZPmGZcvrxX9FSUwim8SXIgPMBMeQqijBZqNWMoJgnQud2CG-67g0gxDT9h9ax3tuqdL0gD8uSYbomlpCQw-2hlWUAAgRxdGZ86iOVZyjak63lfvHNCBo4nYHYx'
    }
});