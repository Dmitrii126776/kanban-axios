import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function UpdateModal(props) {

    const [name, setName] = useState(props.task.name)
    const [description, setDescription] = useState(props.task.description)
    const [status, setStatus] = useState(props.task.status)
    const [priority, setPriority] = useState(props.task.priority)

    const saveUpdateTask = () => {
        const updatedTask = {
            name,
            description,
            status,
            priority: +priority,
        }
        props.updateTask(props.task._id, updatedTask)
        props.updateToggle()
    }

    const cancelUpdate = () => {
        setName(props.task.name)
        setDescription(props.task.description)
        setStatus(props.task.status)
        setPriority(+props.task.priority)
        props.updateToggle()
    }

    return (
        <div>
            <Modal isOpen={props.updateModal} toggle={props.updateToggle}>
                <ModalHeader toggle={props.updateToggle}>Update Modal</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                        <input value={name} onChange={e => setName(e.target.value)}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Description</span>
                        <input value={description} onChange={e => setDescription(e.target.value)}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Status</span>
                        <select value={status} onChange={e => setStatus(e.target.value)}
                                className="form-select" aria-label="Default select example">
                            {props.arrayStatuses.map((el, i) => (<option key={i} value={el}>{el}</option>))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Priority</span>
                        <select value={priority} onChange={e => setPriority(e.target.value)}
                                className="form-select" aria-label="Default select example">
                            {props.priorities.map((el, i) => (<option key={i} value={el}>{el}</option>))}
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveUpdateTask}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={cancelUpdate}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UpdateModal;
