import MachineList from "../components/machine/MachineList";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import FactoryData from "../components/factorydata/FactoryData";

function Home() {
  const [factoryData, setFactoryData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9898/api/factory')
      .then(response => response.json())
      .then(data => {
        setFactoryData(data)
      })
  }, [])

  return (
    <main>
      {factoryData.map((data) => {
        return (
          <>
            <h1>{data.name}</h1>
            <FactoryData key={data._id} data={data}
            />
          </>
        )
      }
      )}
      <section className="addElement">
        <Link to="/add/worker">+ Arbeiter</Link>
        <Link to="/add/machine">+ Maschine</Link>
        <Link to="/production">Zur Produktionsplanung</Link>
      </section>
      <MachineList />
    </main>
  );
}

export default Home;
