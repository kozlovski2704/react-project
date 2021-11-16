const moduleName = "menu";

const GET_MENU = `${moduleName}/GET_MENU`

const defaultState = {
    menu: []
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_MENU:
        return {...state, menu: payload}
        default: 
        return state
    }
}

export const getMenu = () => async(dispatch)  => {
    dispatch({ type: GET_MENU, payload: [{id:1, title:"asd"}] })
}