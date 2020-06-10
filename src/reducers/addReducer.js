import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featureActions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const addReducer = (
    state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            const newFeature = {
                id: Date.now(),
                name: action.payload.name,
                price: action.payload.price
            };
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, newFeature]
                },
                additionalPrice: state.additionalPrice + newFeature.price
            };

        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(feature => {
                        if (feature.name === action.payload) {
                            return false
                        } else {
                            return true
                        }
                    })
                }
            }
        default:
            return state
    }
};