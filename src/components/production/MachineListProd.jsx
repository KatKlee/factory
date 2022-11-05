import { useEffect, useState } from "react"
import MachineProd from "./MachineProd"

const MachineListProd = () => {
    const [machines, setMachines] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/api/machines')
            .then(response => response.json())
            .then(data => setMachines(data))
    }, [])

    return (
        <>
            <h2>Arbeiter zuordnen und Maschine starten…</h2>
            {machines.map((machine, key) => {
                return (
                    <MachineProd
                        key={key}
                        machine={machine}
                    />
                )
            })}
        </>
    )
}

export default MachineListProd