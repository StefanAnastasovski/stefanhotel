import axios from '../../custom-axios/axios';

const Account = {

    fetchAccounts: () => {
        return axios.get(`/api/getallaccounts`)
    },
    fetchAccountByUsername: (username) => {
        return axios.get(`/api/getaccountbyusername/${username}`)
    }

};

export default Account;