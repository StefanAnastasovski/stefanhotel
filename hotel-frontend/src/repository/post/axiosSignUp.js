import axios from '../../custom-axios/axios';

const SignUp = {

    addSignup: (newUser) => {
        return axios.post(`/api/createsignup`, newUser,{
               headers: {
                'Content-Type': 'application/json'
            }
        });
    }

};

export default SignUp;