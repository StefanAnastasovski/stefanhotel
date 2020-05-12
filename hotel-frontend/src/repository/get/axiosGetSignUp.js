import axios from '../../custom-axios/axios';

const SignUp = {

    fetchSignUp: () => {
        return axios.get(`/api/getallsignups`)
    },
    fetchSignUpByUserName: (username) => {
        return axios.get(`/api/getsignupbyusername/${username}`)
    }

};

export default SignUp;