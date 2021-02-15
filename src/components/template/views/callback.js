const Callback = ({ response, reset }) => {
    return (
        <div className="text-center">
            <h1>
                Title: {response?.title}
            </h1>
            <p>ID: {response?.id}</p>
            <p>Completed: {`${response?.completed}`}</p>
            <button type="button" className="btn button" onClick={reset}>
                Click here to reset
            </button>
        </div>
    )
}
export default Callback