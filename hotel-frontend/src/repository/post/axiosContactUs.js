import axios from '../../custom-axios/axios';

const ContactUs = {

    addContactUs: (newContactUs) => {
        return axios.post(`/api/createcontactus`, newContactUs,{
               headers: {
                'Content-Type': 'application/json'
            }
        });
    }

};

export default ContactUs;