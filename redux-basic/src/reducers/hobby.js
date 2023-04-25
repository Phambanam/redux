const initialState = {
    hobbies: [],
    activeId: null,
}
const hobbyReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_HOBBY':
            const newList = [...state.hobbies,
            action.payload];
            return {
              ...state,
                hobbies: newList,
            };

        case 'DELETE_HOBBY':
            return {
                ...state,
               activeId: action.payload.id,  
            };
        case 'EDIT_HOBBY':
            return state;
        case 'SET_ACTIVE_HOBBY':
            console.log(state)
             return {
                ...state,
               activeId: action.payload.id,  
            };;
        default:
            return state;
    }
}
export default hobbyReducer;