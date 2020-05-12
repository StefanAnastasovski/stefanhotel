import axios from '../../custom-axios/axios';

const Menu = {

    fetchMenu: () => {
        return axios.get(`/api/getallmenu`)
    },
    fetchMenuByMealName: (mealName) => {
        return axios.get(`/api/getmenubymealname/${mealName}`)
    },
    fetchMenuByTypeOfMeal: (typeOfMeal) => {
        return axios.get(`/api/getallmenubytypeofmeal/${typeOfMeal}`)
    },

};

export default Menu;