import axios from 'axios';
import API from '../constants/url.js';


const initialState = {
    loggedIn: false,
    user: {},
    cookbook: []
};

const userReducer = (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {

        case 'SET_USER':
            return {
                loggedIn: true,
                user: payload.returnedUser,
                cookbook: payload.cookbook
            };

        case 'LOG_OUT':
            return {
                loggedIn: false,
                user: {},
            };

        case 'UPDATE_CREATIONS':
            return {
                ...state,
                user: payload
            }

        case 'UPDATE_COOKBOOK':
            return {
                ...state,
                cookbook: payload
            }

        default: return state;

    }

};

export function logOut() {
    return {
        type: 'LOG_OUT',
        payload: {},
    };
}

export function updateCookbook(payload) {

    return {
        type: 'UPDATE_COOKBOOK',
        payload,
    }

}



export function login(userInfo) {

    return async function (dispatch) {

        // const response = await axios.get('https://swapi.dev/api/people/1/');

        let id;

        switch (userInfo.userName) {

            case 'daisy':
                id = 1;
                break;

            case 'beasley':
                id = 2;
                break;

            default:
                id = 3;
                break;
        }


        const returnedUser = {
            id,
        };

        const allRecipes = await axios.get(API.BASE + API.RECIPEALL + returnedUser.id);
        const profile = await axios.get(API.BASE + API.PROFILE + id);


        returnedUser.creations = allRecipes.data
        returnedUser.profile = profile.data

        let cookbook;

        if (profile.data.cookbook === null) {
            cookbook = []
        } else {
            cookbook = JSON.parse(profile.data.cookbook)
        }




        dispatch({
            type: 'SET_USER',
            payload: { returnedUser, cookbook },
        });

    };

}

export default userReducer;
