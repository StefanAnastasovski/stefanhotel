import axios from '../../custom-axios/axios';

const Login = {

    fetchLogin: () => {
        return axios.get(`/api/getalllogins`)
    },
    fetchLoginByUsername: (username) => {
        return axios.get(`/api/getusername/${username}`)
    }

};

export default Login;