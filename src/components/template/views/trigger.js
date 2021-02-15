const Trigger = ({ loading, getData }) => {
    return (
        <button type="button" className="btn button" onClick={getData}>
            {!loading ? "Click here to toggle components" : "Loading..."}
        </button>
    )
}
export default Trigger