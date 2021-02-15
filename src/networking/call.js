import { getCall, interceptor } from "./api"
import { url } from "./url"

export const getPlaceholderData = async () => {
    try {
        const response = await getCall(url.todo);
        if (typeof response.status !== "undefined") {
            return response.data
        }
        return response
    } catch (error) {
        interceptor(error)
    }
}