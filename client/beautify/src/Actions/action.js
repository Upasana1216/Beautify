import { FETCH_ALL, FETCH_ALL_CITY, FETCH_ONE ,FETCH_ALL_NAME ,CREATE_APPOINTMENT, CREATE_SELLER } from "../Constants/actionType";

import * as api from "../api/index"

export const getServices = () => async (dispatch) => {
  try {
    const { data } = await api.fetchServices();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};