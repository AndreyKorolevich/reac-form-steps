import './App.css';
import Form from "./Form";
import {useState} from "react";
import ListWalks from "./ListWalks";

function App() {
    const [walks, setWalk] = useState([]);

    const createWalk = (data) => {
        const createdDate = walks.findIndex(e => e.date.toDateString() === data.date.toDateString())
        if(createdDate !== -1) {
            const copyWalks = [...walks]
            copyWalks[createdDate].distance =  copyWalks[createdDate].distance + data.distance;
            setWalk([...copyWalks])
        }else{
            setWalk([...walks, data])
        }
    }

    const deleteWalk = (id) => {
        setWalk([...walks.filter(e => e.id !== id)])
    }

    return (
        <div className="App">
            <Form createWalk={createWalk}/>
            <ListWalks walks={walks} deleteWalk={deleteWalk}/>
        </div>
    );
}

export default App;
