const Machine = ({ machine }) => {
    return (
        <>
            <h3>Maschine: {machine.name}</h3>
        </>
    )
}

export default Machine



// Maschinen und Arbeiter haben states
// Maschine prodstate:
// Worker prodstate: 

// Liste aller prodstate: false


// Button ist disabled solange nicht zwei Arbeiter ausgewählt, danach klickbar
// Click des Buttons hinterlegt ein Date in Maschine