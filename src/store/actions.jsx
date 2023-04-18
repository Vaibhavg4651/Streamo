import * as types from "./actionsType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userdeleted = () => ({
  type: types.DELETE_USERS,
});

const usercreated = () => ({
    type: types.ADD_USERS,
  });

  const userupdate = () => ({
    type: types.UPDATE_USERS,
  });

  const useredited = (user) => ({
    type: types.GET_SINGLE_USERS,
    payload: user,
  });

export const loadusers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((response) => {
        console.log("response", response);
        dispatch(getUsers(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteusers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((response) => {
        console.log("response", response);
        dispatch(userdeleted());
        dispatch(loadusers());
      })
      .catch((error) => console.log(error));
  };
};

export const addusers = (user) => {
    return function (dispatch) {
      axios
        .post(`${process.env.REACT_APP_API}`, user)
        .then((response) => {
          console.log("response", response);
          dispatch(usercreated());
        //   dispatch(loadusers());  
        })
        .catch((error) => console.log(error));
    };
  };

  export const editusers = (id) => {
    return function (dispatch) {
      axios
        .get(`${process.env.REACT_APP_API}/${id}`)
        .then((response) => {
          console.log("response", response);
          dispatch(useredited(response.data));
        })
        .catch((error) => console.log(error));
    };
  };

  export const updateusers = (user, id) => {
    return function (dispatch) {
      axios
        .put(`${process.env.REACT_APP_API}/${id}`, user)
        .then((response) => {
          console.log("response", response);
          dispatch(userupdate());
        })
        .catch((error) => console.log(error));
    };
  };
