import axios from '../../custom-axios/axios';

const Services = {

    fetchServices: () => {
        return axios.get(`/api/getallservices`)
    },
    fetchServicesByServicesName: (serviceName) => {
        return axios.get(`/api/getservicebyservicename/${serviceName}`)
    }

};

export default Services;