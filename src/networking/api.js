import axios from "axios";

export const interceptor = (status) => (dispatch) => {
    if (status === 400) {
        //   dispatch({ type: types.SHOW_ERROR_MODAL });
    } else if (status === 401) {
        //   dispatch({ type: types.SHOW_EXPIRED_MODAL });
    } else if (status === 404) {
        //   dispatch({ type: types.SHOW_ERROR_MODAL });
    } else if (status === 500) {
        //   dispatch({ type: types.SHOW_RETRY_MODAL });
    }
};

export const postFormCall = async (url, data, headers) => {
    return axios({
        method: "post",
        url: url,
        data: data,
        headers: headers,
        baseURL: `${process.env.REACT_APP_LIVE_URL}`,
    }).catch(function (error) {
        if (!error.response) {
            // network error
        } else {
            const { status } = error.response;
            return status;
        }
    });
};

export const postCall = async (url, data, params, headers) => {
    return axios({
        method: "post",
        url: url,
        data: data,
        headers: headers,
        params: params,
        baseURL: `${process.env.REACT_APP_LIVE_URL}`,
    }).catch(function (error) {
        if (!error.response) {
            // network error
        } else {
            const { status } = error.response;
            console.log(status);
            return status;
        }
    });
};

export const getCall = async (url, params, headers) => {
    return axios({
        method: "get",
        url: url,
        params: params,
        headers: headers,
        baseURL: `${process.env.REACT_APP_LIVE_URL}`,
    }).catch(function (error) {
        if (!error.response) {
            // network error
        } else {
            const { status } = error.response;
            return status;
        }
    });
};