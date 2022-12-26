import './App.css';
import axios from 'axios';
import {useEffect} from "react";

function App() {

    const getCards = () => {
        axios.get('http://localhost:5000/statuses')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className="App">
            <h1>Kanban Axios</h1>
        </div>
    );
}

export default App;
