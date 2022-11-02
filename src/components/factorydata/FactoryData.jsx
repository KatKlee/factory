const FactoryData = ({ data }) => {
    return (
        <section>
            <p>Guthaben: {data.credit}</p>
            <p>Arbeiter: {data.workers}</p>
            <p>Maschinen: {data.machines}</p>
        </section>
    )
}

export default FactoryData