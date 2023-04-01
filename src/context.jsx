import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";

const AppContext = React.createContext();

const initialState = {
    headingName: "",
    mainImage: "",
    imageAlt: "",
    services: [],
    indiData: []
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // const API = "https://api.pujakaitem.com/api/products";
    const API = "http://localhost:5000/api/products"

    const updateHome = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                headingName: "Knowledge is power",
                mainImage: "assets/images/hero.svg",
                imageAlt: "Hero Image"
            }
        })
    };

    const updateAbout = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                headingName: "About us",
                mainImage: "assets/images/about.svg",
                imageAlt: "About Image"
            }
        })
    };

    //API Data 
    const getServices = async (url) => {
        try {
            const res = await axios.get(url);
            // console.log(res);
            const data = await res.data.productDetails;
            dispatch({
                type: "GET_SERVICES",
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    // API for individual data
    const getIndividual = async (url) => {
        try {
            const res = await axios.get(url);
            console.log(res);
            const indiData = await res.data.productDetails;
            dispatch({
                type: "GET_INDIVIDUAL",
                payload: indiData
            });
        } catch (error) {
            console.log(error);
        }
    }

    //API call
    useEffect(() => {
      getServices(API);
    }, [])
    

    return <AppContext.Provider value={{...state, updateHome, updateAbout, getIndividual}}>{children}</AppContext.Provider>
};


// custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };