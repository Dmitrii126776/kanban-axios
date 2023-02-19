import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import React, {useEffect, useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Column from "./Column";
import CreateModal from "./CreateModal";

function App() {

    const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [statuses, setStatuses] = useState([])
    const arrayStatuses = statuses.map(el => el.title)
    const [tasks, setTasks] = useState([])

    const getStatuses = () => {
        axios.get('https://expressjs-server.up.railway.app/statuses')
            .then(function (response) {
                // handle success
                setStatuses(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const getTasks = () => {
        axios.get('https://expressjs-server.up.railway.app/tasks')
            .then((res) => {
                console.log(res.data)
                setTasks(res.data);
            }).catch((err) => {
            console.log(err)
        })
    }

    const addTask = (newTask) => {
        axios.post('https://expressjs-server.up.railway.app/tasks', newTask)
            .then((res) => {
                getTasks()
            }).catch((err) => {
            console.log(err)
        })
    }

    const updateTask = (id, updatedTask) => {
        axios.patch(`https://expressjs-server.up.railway.app/tasks/${id}`, updatedTask)
            .then(res => {
                getTasks()
            }).catch(err => {
            console.log(err)
        })
    }

    const changePriority = (id, priority) => {
        axios.patch(`https://expressjs-server.up.railway.app/tasks/${id}`, {
            priority
        }).then((res) => {
            getTasks()
        }).catch((err) => {
            console.log(err)
        })
    }

    const changeStatus = (id, status, value) => {
        console.log(arrayStatuses)
        const currentIndex = arrayStatuses.indexOf(status)
        const newStatus = arrayStatuses[currentIndex + value]
        axios.patch(`https://expressjs-server.up.railway.app/tasks/${id}`, {
            status: newStatus
        }).then((res) => {
            getTasks()
        }).catch((err) => {
            console.log(err)
        })

    }

    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.up.railway.app/tasks/${id}`)
            .then((res) => {
                getTasks()
            }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getStatuses()
        getTasks()
    }, [])

    return (
        <div className="App">
            <h1>Kanban Axios</h1>
            <CreateModal priorities={priorities} arrayStatuses={arrayStatuses} addTask={addTask}/>
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map(el => <Column
                        key={el._id}
                        status={el}
                        tasks={tasks}
                        deleteTask={deleteTask}
                        changePriority={changePriority}
                        priorities={priorities}
                        changeStatus={changeStatus}
                        arrayStatuses={arrayStatuses}
                        updateTask={updateTask}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default App;
