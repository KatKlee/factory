import { /* useEffect, */ useState } from 'react'
import { Link } from 'react-router-dom'
import WorkerList from '../components/worker/WorkerList'

const NewWorker = () => {
    const [workerName, setWorkerName] = useState('')

    const addWorker = async () => {
        const worker = {
            name: workerName
        }

        const response = await fetch('http://localhost:9898/api/workers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(worker)
        })
        const data = await response.json()

        if (data.state) {
            setWorkerName('')
        }
        console.log(data)
    }

    return (
        <main>
            <Link to="/">Zurück</Link>
            <h1>Neuer Arbeiter</h1>
            <input onChange={(e) => setWorkerName(e.target.value)} type="text" name="workername" id="" value={workerName} placeholder="Mitarbeitername" />
            <button onClick={addWorker} >Hinzufügen</button>
            <WorkerList />
        </main>
    )
}

export default NewWorker