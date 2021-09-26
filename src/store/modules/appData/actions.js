
export const addMessage = (message) => {
    return {
        type: 'ADD_MESSAGE',
        payload: { message },
    }
}

export const loadInfo = (info) => {
    return {
        type: 'LOAD_INFO',
        payload: { info },
    }
}
