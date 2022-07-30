import {
    CREATE_PET,
    UPDATE_PET,
    LIST_PET,
    GET_PET
} from '../actions/types'

const initialState = [];

const petReducer = (pets = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PET:
            return [...pets, payload];
        case UPDATE_PET:
            return pets.map((pet) => {
                if (pet.id === payload.id) {
                    return {
                        ...pet,
                        ...payload
                    }
                }
            });
        case LIST_PET:
            return payload
        case GET_PET:
            return payload
        default:
            return pets;
    }
};
export default petReducer;