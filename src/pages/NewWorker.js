import { Link } from 'react-router-dom'

const NewWorker = () => {
    return (
        <>
            <Link to="/">Zurück</Link>
            <h1>Neuer Arbeiter</h1>
            <input type="text" name="workername" id="" placeholder="Mitarbeitername" />
            <button>Hinzufügen</button>
        </>
    )
}

export default NewWorker