import React, {useState} from 'react';
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const Task = (props) => {
    const {task, changePriority, priorities} = props

    const [deleteModal, setDeleteModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const updateToggle = () => setUpdateModal(!updateModal);
    const deleteToggle = () => setDeleteModal(!deleteModal);

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
                    {task.priority}
                    <button disabled={+task.priority === priorities[0]}
                            onClick={() => changePriority(task._id, +task.priority - 1)}
                            className='btn btn-outline-secondary btn-sm'>↓
                    </button>
                    <button disabled={+task.priority === priorities[priorities.length - 1]}
                            onClick={() => changePriority(task._id, +task.priority + 1)}
                            className='btn btn-outline-secondary btn-sm'>↑
                    </button>
                </li>
                <li className="list-group-item">Status: {task.status}</li>
            </ul>
            <div className="card-body">
                <button disabled={props.arrayStatuses.indexOf(task.status) === 0}
                        onClick={() => props.changeStatus(task._id, task.status, -1)}
                        type="button" className="btn btn-outline-primary">←
                </button>
                <button type="button" className="btn btn-outline-warning"
                        onClick={updateToggle}
                >Update
                </button>
                {updateModal &&
                    <UpdateModal updateTask={props.updateTask}
                                 task={task}
                                 updateToggle={updateToggle}
                                 updateModal={updateModal}
                                 arrayStatuses={props.arrayStatuses}
                                 priorities={priorities}/>
                }

                <button type="button" className="btn btn-outline-danger"
                        onClick={deleteToggle}
                >Delete
                </button>
                {deleteModal &&
                    <DeleteModal task={task}
                                 deleteToggle={deleteToggle}
                                 deleteModal={deleteModal}
                                 deleteTask={props.deleteTask}/>
                }
                <button disabled={props.arrayStatuses.indexOf(task.status) === props.arrayStatuses.length - 1}
                        onClick={() => props.changeStatus(task._id, task.status, 1)}
                        type="button" className="btn btn-outline-primary">→
                </button>
            </div>
        </div>
    );
};

export default Task;
