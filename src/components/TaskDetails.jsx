import React from 'react';
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

import Button from './Button';

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (  
        <>
            <div className="back-buttorn-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Texto</p>
            </div>
        </>
    );
}
 
export default TaskDetails;