import { useState } from 'react'
import { Link } from 'react-router-dom'
import MachineList from '../components/machine/MachineList'
/* import { useNavigate } from 'react-router-dom' */

const NewMachine = () => {
    const [machineName, setMachineName] = useState('')

    const addMachine = async () => {
        const machine = {
            name: machineName
        }
        const response = await fetch('http://localhost:9898/api/machines', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(machine)
        })
        const data = await response.json()

        if (data.state) {
            setMachineName('')
        }

        console.log(data)
    }

    return (
        <main>
            <Link to="/">Zurück</Link>
            <h1>Neue Maschine</h1>
            <input onChange={(e) => setMachineName(e.target.value)} type="text" name="machineName" id="" value={machineName} placeholder="Maschinenname" />
            <button onClick={addMachine} >Hinzufügen</button>
        </main>
    )
}

export default NewMachine