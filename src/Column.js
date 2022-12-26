import React from 'react';
import Task from "./Task";

const Column = (props) => {


    return (
        <div className="col">
            <h2>
                {props.status.title}
            </h2>
            {props.tasks.filter(el => el.status === props.status.title)
                .map(el => <Task
                    key={el._id}
                    task={el}
                    deleteTask={props.deleteTask}
                />)}
        </div>
    );
};

export default Column;
