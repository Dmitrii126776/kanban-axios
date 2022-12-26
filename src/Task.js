import React from 'react';

const Task = (props) => {
    const {task} = props

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>
                <p className="card-text">
                    {task.description}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Priority:
                    <button className='btn btn-outline-secondary btn-sm'>↓</button>
                    {task.priority}
                    <button className='btn btn-outline-secondary btn-sm'>↑</button>
                </li>
                <li className="list-group-item">Status: {task.status}</li>
            </ul>
            <div className="card-body">
                <button type="button" className="btn btn-outline-secondary">←</button>
                <button type="button" className="btn btn-outline-warning">Update</button>
                <button type="button" className="btn btn-outline-danger"
                        onClick={() => props.deleteTask(task._id)}>Delete
                </button>
                <button type="button" className="btn btn-outline-secondary">→</button>
            </div>
        </div>
    );
};

export default Task;
