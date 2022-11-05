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
        <section>
            <h2>Unsere Produktion</h2>
            {machines.map((machine, key) =>
                <Machine
                    key={key}
                    machine={machine}
                />
            )}
        </section>
    )
}

export default MachineList