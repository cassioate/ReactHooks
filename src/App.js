import React, {useState} from 'react'

function App() {

    const [techs, setTechs] = useState([
        'ReactJS',
        'Native'
    ]);

    const [newTech, setNewTech] = useState('')

    function handleAdd(){
        setTechs([...techs, newTech])
        setNewTech('')
    }

    return (
        <>
            <ul>
                {techs.map(tech => 
                <li key="tech">{tech}
                </li>)}
            </ul>
            <input value={newTech} onChange={e => setNewTech(e.target.value)}></input>
            <button type="button" onClick={handleAdd}>Add</button>
        </>
    )
}

export default App;