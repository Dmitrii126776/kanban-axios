import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function CreateModal(props) {
    const [modal, setModal] = useState(false);
    const [nameInput, setNameInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
    const [statusInput, setStatusInput] = useState(props.arrayStatuses[0])
    const [priorityInput, setPriorityInput] = useState(props.priorities[0])

    const createTask = () => {
        const newTask = {
            name: nameInput,
            description: descriptionInput,
            status: statusInput,
            priority: +priorityInput,
        }
        props.addTask(newTask)
        toggle()
    }

    const toggle = () => {
        setNameInput('')
        setDescriptionInput('')
        setStatusInput(props.arrayStatuses[0])
        setPriorityInput(props.priorities[0])
        setModal(!modal);
    }

    return (
        <div>
            <Button type="button" className="btn-primary btn-lg" onClick={toggle}>
                Add Task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Modal</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name:</span>
                        <input type="text" className="form-control"
                               value={nameInput} onChange={e => setNameInput(e.target.value)}
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Description:</span>
                        <input type="text" className="form-control"
                               value={descriptionInput} onChange={e => setDescriptionInput(e.target.value)}
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Status:</span>
                        <select value={statusInput} onChange={e => setStatusInput(e.target.value)}
                                className="form-select" aria-label="Default select example">
                            {props.arrayStatuses.map((el, i) => (<option key={i} value={el}>{el}</option>))}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Priority:</span>
                        <select value={priorityInput} onChange={e => setPriorityInput(e.target.value)}
                                className="form-select" aria-label="Default select example">
                            {props.priorities.map((el, i) => (<option key={i} value={el}>{el}</option>))}
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={createTask} disabled={nameInput === '' || descriptionInput === ''}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateModal;
