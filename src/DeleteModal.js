import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


function DeleteModal(props) {
    const {task, deleteTask, deleteModal, deleteToggle} = props
    const deleteTaskButton = () => {
        deleteTask(task._id)
        deleteToggle()
    }

    return (
        <div>
            <Modal isOpen={deleteModal} toggle={deleteToggle}>
                <ModalHeader toggle={deleteToggle}>Modal title</ModalHeader>
                <ModalBody>
                    Do you want to delete {task.name} ?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteTaskButton}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={deleteToggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;
