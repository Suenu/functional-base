import { Fragment, useState } from "react"
import { getPlaceholderData } from "../../networking/call";
import Callback from "./views/callback"
import Trigger from "./views/trigger"

const Template = () => {
    const [state, setState] = useState({
        response: {},
        showResponse: false
    });
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        console.log("Holla");
        setLoading(true)
        const response = await getPlaceholderData();
        if (response) {
            setState((prevState) => ({
                ...prevState,
                showResponse: true,
                response: response
            }))
        }
        setLoading(false)
    }

    const reset = () => {
        setState((prevState) => ({
            ...prevState,
            response: {},
            showResponse: false,
        }))
    }

    console.log(state);
    return (
        <Fragment>
            {!state.showResponse ?
                <Trigger getData={getData} loading={loading} /> :
                <Callback response={state.response} reset={reset} />
            }
        </Fragment>
    )
}
export default Template