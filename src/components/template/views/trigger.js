import { Fragment, useState } from "react"

const Trigger = ({ loading, getData }) => {

    return (
        <Fragment>
            <button type="button" className="btn button" onClick={getData}>
                {!loading ? "Click here to toggle components" : "Loading..."}
            </button>
        </Fragment>
    )
}
export default Trigger