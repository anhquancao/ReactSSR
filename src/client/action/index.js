export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async (dispatch, getState, api) => {
    let res = {};
    try {
        res = await api.get("/users");
    } catch (error) {
        console.log(error);
    }
    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};