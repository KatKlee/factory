import { useEffect, useState } from "react"
import Machine from "./Machine"

const MachineList = () => {
    const [machines, setMachines] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/api/machines')
            .then(response => response.json())
            .then(data => setMachines(data))
    }, [])

    return (
        <>
            <h2>Maschinen Liste</h2>
            {machines.map((machine, key) =>
                <Machine
                    key={key}
                    machine={machine}
                />
            )}
        </>
    )
}

export default MachineList