import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Column from "./Column";

function App() {

    const [statuses, setStatuses] = useState([])
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
                setTasks(res.data);
            }).catch((err) => {
            console.log(err)
        })
    }

    const addTask = () => {
        axios.post('https://expressjs-server.up.railway.app/tasks', {
            name: 'React',
            description: 'Learn React',
            priority: 4,
            status: 'review'
        }).then((res) => {
            getTasks()
        }).catch((err) => {
            console.log(err)
        })
    }

    const deleteTask = (id) => {
        console.log(id)
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
            <button type="button" className="btn btn-primary btn-lg" onClick={addTask}>Add Task</button>
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map(el => <Column
                        key={el._id}
                        status={el}
                        tasks={tasks}
                        deleteTask={deleteTask}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default App;
