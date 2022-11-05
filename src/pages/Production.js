import { Link } from "react-router-dom"
import MachineListProd from "../components/production/MachineListProd"

const Production = () => {
    return (
        <>
            <Link to="/">Zurück</Link>
            <h1>Die Produktionsplanung</h1>
            <MachineListProd />
        </>
    )
}

export default Production