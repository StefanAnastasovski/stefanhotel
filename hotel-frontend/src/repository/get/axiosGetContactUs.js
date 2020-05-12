import axios from '../../custom-axios/axios';

const ContactUs = {

    fetchContactUs: () => {
        return axios.get(`/api/getallcontactus`)
    }

};

export default ContactUs;