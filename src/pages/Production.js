import { Link } from "react-router-dom"
import MachineList from "../components/machine/MachineList"

const Production = () => {
    return (
        <>
            <Link to="/">Zurück</Link>
            <h1>Die Produktionsplanung</h1>
            <MachineList />
        </>
    )
}

export default Production