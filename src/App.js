import React, {useState, useEffect, useMemo} from 'react'

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

    /** Se utilizado dessa forma, com o array vazio após a função, 
     * ele irá executar apenas ao iniciar a aplicação, depois não 
     * irá mais fazer nada */
    useEffect(()=>{
        console.log('Executei no inicio')
    }, [])

    /**
     *  Substitui as didmount functions, na inicialização e depois
     * toda vez que o techs for alterado ele vai chamar a função 
     * que eu passar dentro do useEffect como primeiro parametro
     */
    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(techs))
    }, [techs])
    // OBS: Está salvando a lista no localStorage do browser (inspencionar elemento/Application/LocalStorage/localhost:3000)

    /** useMemo é utilizado para evitar que seja feito o mesmo calculo toda vez que a tela for renderizada,
     * ele é utilizado para manter um valor salvo até que uma variavel especifcia seja modificada, quando essa variavel
     * for modificada, então ele irá realizar o calculo novamente
     */
    const techSize = useMemo(()=> techs.length, [techs])

    return (
        <>
            <ul>
                {techs.map(tech => 
                <li key={tech}>{tech}
                </li>)}
            </ul>
            {/** Use memo está sendo utilizado aqui */}
            <strong>Você tem {techSize} tecnologias</strong>
            <br></br>
            <input value={newTech} onChange={e => setNewTech(e.target.value)}></input>
            <button type="button" onClick={handleAdd}>Add</button>
        </>
    )
}

export default App;