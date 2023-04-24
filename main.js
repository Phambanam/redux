console.log(window.Redux)
const {createStore} = window.Redux
const initialState = JSON.parse(localStorage.getItem('hobbyList')) || [];

const hobbyReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_HOBBY': {
            const newList =  [...state];
            newList.push(action.payload);
            return newList;
        }
        case 'DELETE_HOBBY': {
            let newList =  [...state];
            newList =  newList.filter(element=> element.id != action.payload.id);
            return newList;
        }
        default:
            return state;
    }
};

const store = createStore(hobbyReducer)
//Render the hobby list
const renderHobbyList = (hobbyList) => {
    const ulElement = document.querySelector('#hobbyListId');
    if(!ulElement) return;
    if(!Array.isArray(hobbyList) || hobbyList.length === 0) {
           ulElement.innerHTML = '';
        return;
    }
   
    ulElement.innerHTML = '';
    hobbyList.forEach(hobby => {
        const liElement = document.createElement('li');
        liElement.textContent = hobby.name;
        ulElement.appendChild(liElement);
        const button = document.createElement('button');
        button.textContent = `Delete-${hobby.id}`;
        button.id = hobby.id
        ulElement.appendChild(button);
        button.addEventListener('click', handleDeleteHobby);
    });

}

//render initial hobby list
const initialHobbyList = store.getState();
console.log(initialHobbyList)
renderHobbyList(initialHobbyList);

//handle form submission
const hobbyForm = document.querySelector("#hobbyFormId")
if(hobbyForm) {
const handleFormSubmit = (e)=>{
    e.preventDefault();
    const hobbyTextElement = document.querySelector('#textHobbyId');
    if(!hobbyTextElement) return;
    const id = store.getState().length >= 1? store.getState().slice(-1)[0].id + 1: 0;
    const action = {
        type: 'ADD_HOBBY',
        payload:{
            id:id,
            name: hobbyTextElement.value
        } 
    }
    store.dispatch(action);
    hobbyTextElement.value='';
}
hobbyForm.addEventListener('submit', handleFormSubmit);

}
const handleDeleteHobby = (e)=>{
    e.preventDefault();
    const action = {
        type: 'DELETE_HOBBY',
        payload: {
            id:e.target.id,
            
        }    }
    store.dispatch(action);
}



store.subscribe(() =>{
    const newList = store.getState();
    console.log(newList)
        renderHobbyList(newList);
        localStorage.setItem('hobbyList', JSON.stringify(newList));
});