import { getCookie } from "../helper/cookie"
import { get} from "../utils/request"

export const getAnswersByUserId = async () => {
    const userId = getCookie("id")
    const result = await get(`answers?userId=${userId}`)
    return result
}

export const getAnswers = async (id) => {
    const result = await get(`answers/${id}`)
    return result
}