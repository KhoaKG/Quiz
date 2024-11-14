import { useNavigate } from "react-router-dom"
import { login } from "../../service/usersService"
import { setCookie } from "../../helper/cookie"
import { useDispatch } from "react-redux"
import { checkLogin } from "../../actions/login"
import "./login.css"
import { Checkbox, Divider, Form, Input, Flex } from 'antd';
import { MailOutlined, FacebookOutlined, GoogleOutlined, TwitterOutlined, InstagramOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from "../../images/62ac5b2ce158d564167184.jpg"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        const response = await login(email, password)
        if (response.length > 0) {
            navigate('/');
            setCookie("id", response[0].id, 1);
            setCookie("fullname", response[0].fullname, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true))
        } else {
            alert("Sai mật khẩu hoặc tài khoản")
        }
    }
    return (
        <>
            {/* <div className="inner-login">
                <div className="inner-form">
                    <form onSubmit={handleSubmit}>
                        <h2 className="inner-title">Login</h2>
                        <div>
                            <input type="email" placeholder="nhập email" />
                        </div>
                        <div>
                            <input type="password" placeholder="nhập password" />
                        </div>
                        <button type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div> */}
            <div className="inner-login">
                <div className="inner-image no-select">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="inner-form no-select">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="no-select">Login</h1>
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
                            <Flex justify="space-between" align="center">

                                <Checkbox>Remember me</Checkbox>

                                <a href="">Forgot password</a>
                            </Flex>
                        </Form.Item>

                        <Form.Item>
                            <button type="submit" className="button no-select">
                                Log in
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

export default Login