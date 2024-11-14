import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { deleteAllCookies } from "../../helper/cookie"
import { useDispatch } from "react-redux"
import { checkLogin } from "../../actions/login"

function Logout() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    deleteAllCookies()

    useEffect(() => {
        dispatch(checkLogin(false))
        navigate('/')
    }, [])
    return (
        <>

        </>
    )

}

export default Logout