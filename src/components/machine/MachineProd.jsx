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
            <select onChange={(e) => { setWorkers(e.target.value) }} name="workers" id="workers">
                {workers.map((worker, key) =>
                    // DropdownItem Component mit props übergeben
                    <option value={worker} key={key}>{worker.name}</option>
                )}
            </select>
            <select onChange={(e) => { setWorkers(e.target.value) }} name="workers" id="workers">
                {workers.map((worker, key) =>
                    <option value={worker} key={key}>{worker.name}</option>
                )}
            </select>
        </>
    )
}

export default MachineProd