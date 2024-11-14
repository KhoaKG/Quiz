import { useNavigate } from "react-router-dom"
import { checkExits, login, register } from "../../service/usersService"
import { setCookie } from "../../helper/cookie"
import { useDispatch } from "react-redux"
import { checkLogin } from "../../actions/login"
import { generateToken } from "../../helper/generateToken"
import "./register.css"
import { Button, Checkbox, Divider, Form, Input, Flex } from 'antd';
import logo from "../../images/62ac5b2ce158d564167184.jpg";
import { MailOutlined, FacebookOutlined, GoogleOutlined, TwitterOutlined, InstagramOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fullname = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        const checkExitsEmail = checkExits("email", email)

        if (checkExitsEmail.length > 0) {
            alert("Email đã tồn tại!")
        } else {
            const options = {
                fullname: fullname,
                email: email,
                password: password,
                token: generateToken()
            }
            const response = await register(options)
            if (response) {
                navigate('/login');
                // setCookie("id", response[0].id, 1);
                // setCookie("fullname", response[0].fullname, 1);
                // setCookie("email", response[0].email, 1);
                // setCookie("token", response[0].token, 1);
                // dispatch(checkLogin(true))
            } else {
                alert("Đăng ký thất bại!")
            }
        }


    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <input type="fullname" placeholder="nhập họ tên"/>
                </div>
                <div>
                    <input type="email" placeholder="nhập email"/>
                </div>
                <div>
                    <input type="password" placeholder="nhập password"/>
                </div>
                <button type="submit">
                    Register
                </button>
            </form> */}
            <div className="inner-register">
                <div className="inner-image">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="inner-form">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="no-select">Register</h1>
                        <Form.Item
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Fullname!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Fullname" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <button type="submit" className="button no-select">
                                Register
                            </button>
                        </Form.Item>
                        <Divider className="no-select" style={{ borderColor: "#619294" }}>or submit with</Divider>
                        <div className="social">
                            <FacebookOutlined />
                            <GoogleOutlined />
                            <TwitterOutlined />
                            <InstagramOutlined />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register