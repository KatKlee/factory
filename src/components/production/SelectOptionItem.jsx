const SelectOptionItem = ({ worker }) => {
    return (
        <option value={worker.name}>{worker.name}</option>
    )
}

export default SelectOptionItem