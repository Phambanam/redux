import React from "react";
import PropTypes from 'prop-types';
import './HobbyList.css'
HobbyList.propTypes = {
    hobbies: PropTypes.array,
    activeId: PropTypes.number,
    onHandleHobbyClick: PropTypes.func
}
HobbyList.defaultProps = {
    hobbies: [],
    activeId: null,
    onHandleHobbyClick: null,
    
}

function HobbyList (props){
   const {hobbies,activeId,onHandleHobbyClick} = props;
   console.log("new ", activeId);
   const handleActive = (e) =>{
    console.log(1)
    console.log("ollActive ", activeId)
       if(onHandleHobbyClick){
        onHandleHobbyClick(e)
       }
   }
  return (
    <ul className="hobby-list">
            {   
                hobbies.map(hobby => 
                <li
                 key={hobby.id} 
                 className={activeId === hobby.id? "active" : ""}
                 onClick={()=> handleActive(hobby)}>{hobby.title}</li>)
            }
    </ul>
   )
}
export default HobbyList;