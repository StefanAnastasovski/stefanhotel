import axios from '../../custom-axios/axios';

const Login = {

    addLogin: (newLogin) => {
        return axios.post(`/api/createlogin`, newLogin,{
               headers: {
                'Content-Type': 'application/json'
            }
        });
    }

};

export default Login;