import React, {useState, useEffect, useMemo, useCallback} from 'react'

function App() {

    const [techs, setTechs] = useState([
        'ReactJS',
        'Native'
    ]);

    const [newTech, setNewTech] = useState('')

    /** "useCallBack" é utilizado para diminuir o gasto de memoria, 
     * pois as functions são geradas do 0 toda vez que a pagina é renderizada,
     * se a função vai mexer com um "state", então é melhor que ela utilize callback, 
     * para ser geradas apenas quando o estado for alterado, evitando gasto
     * densecessario de memoria, no exemplo abaixo, a função só vai ser 
     * gerada quando "techs" e "newTech" for alterado, ambos "Techs" e "newTechs"
     * tem que ser passado como segundo parametro no callback
     */
    const handleAdd = useCallback(() =>{
        setTechs([...techs, newTech])
        setNewTech('')
    }, [techs, newTech] )

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