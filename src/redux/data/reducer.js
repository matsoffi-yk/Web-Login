const defaultProfiles = [
    {
        imageUrl: 'https://scontent-sin6-2.cdninstagram.com/vp/41ce9127a8810468b1d3af8da652ce78/5E7C4C1B/t51.2885-19/s320x320/20479123_1335283893236155_8935450060829753344_a.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&dl=1',
        name: 'My LOVE <3',
        password: 'cute',
        gmail: 'tzuyu.twice@'
    },
    {
        imageUrl: 'https://miro.medium.com/fit/c/160/160/0*O9d9kO0Pa7RShKqx',
        name: 'Madsoffee Yako',
        password: 'Smart',
        gmail: 's5935512073@'
    }
]

const initialState = {
    dataset: defaultProfiles
}

export const DataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_DATA':
            return {
                ...state,
                dataset: [...state.dataset, action.addload]
            }
        default: return state;
    }
}