import { useEffect, useState } from "react"
import Worker from './Worker'

const WorkerList = () => {

    const [workers, setWorkers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/api/workers')
            .then(response => response.json())
            .then(data => setWorkers(data))
    }, [])

    return (
        <section>
            <h2>Arbeiterliste</h2>
            {workers.map((worker, key) =>
                <Worker
                    key={key}
                    worker={worker}
                />
            )}
        </section>
    )
}

export default WorkerList