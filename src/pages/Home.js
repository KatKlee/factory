import Credit from "../components/credit/Credit";
import MachineList from "../components/machine/MachineList";
import { Link } from "react-router-dom"

function Home() {
  return (
    <main>
      <h1>Wonderland</h1>
      <Credit />
      <section className="addElement">
        <Link to="/add/worker">+ Arbeiter</Link>
        <Link to="/add/machine">+ Maschine</Link>
      </section>
      <MachineList />
    </main>
  );
}

export default Home;
