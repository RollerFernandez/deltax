import {
    CREATE_PET,
    UPDATE_PET,
    LIST_PET,
    GET_PET
} from './types'

import petService from '../services/petService'

export const listPet = () => async (dispatch) => {
    try {

        const response =await  petService.getAll();
        console.log("entro");
        dispatch({
            type: LIST_PET,
            payload: response
        });

        return Promise.resolve(response);

    } catch (error) {
        return Promise.reject(error);
    }
}

export const getPet = (id) => async (dispatch) => {
    try {
        const response =await  petService.get(id);
        dispatch({
            type: GET_PET,
            payload: response
        })
        return Promise.resolve(response);

    } catch (error) {
        return Promise.reject(error);
    }
}

export const createPet = (data) => async (dispatch) => {
    try {
        const response = await petService.create(data);

        dispatch({
            type: CREATE_PET,
            payload: response.data
        })
        return Promise.resolve(response.data);

    } catch (error) {
        return Promise.reject(error);
    }
}

export const updatePet = (data) => async (dispatch) => {
    try {

        const response = await petService.update(data);

        dispatch({
            type: UPDATE_PET,
            payload: response.data
        })
        return Promise.resolve(response.data);

    } catch (error) {
        return Promise.reject(error);
    }
}


