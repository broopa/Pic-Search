import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID pw_B5_0Brvt2JpGvsYaN2X2Jra8R8wX9v9pgu15cjqY'
   }
});
