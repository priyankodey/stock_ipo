export const reducer = (state, action) => {
    if (action.type === "HOME_UPDATE"){
        return {
            ...state,
            headingName: action.payload.headingName,
            mainImage: action.payload.mainImage,
            imageAlt: action.payload.imageAlt
        }
    }
    if (action.type === "ABOUT_UPDATE"){
        return {
            ...state,
            headingName: action.payload.headingName,
            mainImage: action.payload.mainImage,
            imageAlt: action.payload.imageAlt
        }
    }
    if (action.type === "GET_SERVICES"){
        return {
            ...state,
            services: action.payload
        }
    }
    if (action.type === "GET_INDIVIDUAL"){
        return {
            ...state,
            indiData: action.payload
        }
    }

    return state;
}