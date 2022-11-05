import { useEffect, useState } from "react"
import SelectOptionItem from "../production/SelectOptionItem"

const MachineProd = ({ machine }) => {
    const [workers, setWorkers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/api/workers')
            .then(response => response.json())
            .then(data => setWorkers(data))
    }, [])

    return (
        <>
            <h3>Maschine: {machine.name}</h3>
            <select /* onChange= */ name="worker1" id="worker1">
                {workers.map((worker, key) =>
                    <SelectOptionItem
                        worker={worker}
                        key={key}
                    />
                )}
            </select>
            <select /* onChange= */ name="worker2" id="worker2">
                {workers.map((worker, key) =>
                    <SelectOptionItem
                        worker={worker}
                        key={key}
                    />
                )}
            </select>
            <button disabled>Start</button>
        </>
    )
}

export default MachineProd