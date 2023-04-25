import React from'react';
import { useSelector ,useDispatch} from 'react-redux';
import HobbyList from './HobbyList';
import { addNewHobby, setActiveHobby } from '../../actions/hobby';
HomePage.propTypes = {

}
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.hobbies);
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();
    const onHandleHobbyClick = (hobby) =>{
        console.log(2);
        dispatch(setActiveHobby(hobby))
    }
    const handleAddHobby = () => {
        
        //Random a hobby object: id + title
        const id = 1000 + Math.floor(Math.random() * 9000);
        const title = `hobby ${id}`
        // Dispatch action to add a new hobby to redux store
        const hobby = {
            id,title
        }
        
        dispatch(addNewHobby(hobby))

    }
    return (
        <div className="home-page"> 
            <h1>Home Page</h1>
            <button onClick={handleAddHobby}>random-hobby</button>
            <HobbyList
             hobbies={hobbyList} 
             activeId= {activeId}
             onHandleHobbyClick = {onHandleHobbyClick} />
        </div>
    )
}
export default HomePage;