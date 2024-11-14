import { PlayCircleOutlined, HomeOutlined, SettingOutlined, FlagOutlined, BookOutlined, LoginOutlined, LogoutOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { getCookie } from '../../helper/cookie'
import { useSelector } from 'react-redux'
import "./sider.css"

function MenuSider() {
    const token = getCookie("token")
    const isLogin = useSelector(state => state.loginReducer)

    const items = token ?
        [
            {
                label: <Link to="/" className='no-select'>Home</Link>,
                icon: <HomeOutlined />,
                key: "home",
            },
            {
                label: <Link to="/topic" className='no-select'>Topic</Link>,
                icon: <BookOutlined />,
                key: "topic"
            },
            {
                label: <Link to="/answers" className='no-select'>Answers</Link>,
                icon: <PlayCircleOutlined />,
                key: "answers"
            },
            {
                label: <Link to="/logout" className='no-select'>Log out</Link>,
                icon: <LogoutOutlined />,
                key: "log-out",
            },
        ]
        :
        [

            {
                label: <Link to="/" className='no-select'>Home</Link>,
                icon: <HomeOutlined />,
                key: "home"
            },
            {
                label: <Link to="/login" className='no-select'>Log in</Link>,
                icon: <LoginOutlined />,
                key: "log-in",
            },
            {
                label: <Link to="/register" className='no-select'>Register</Link>,
                icon: <PlusSquareOutlined />,
                key: "register",
            }
        ]
    return (
        <>
            {token ? (
                <Menu
                    mode="inline"
                    items={items}
                    defaultSelectedKeys={["home"]}
                    defaultOpenKeys={["home"]}
                    className='menu-sider'
                />
            ) : (
                <Menu
                    mode="inline"
                    items={items}
                    defaultOpenKeys={["home"]}
                    defaultSelectedKeys={["home"]}
                    className='menu-sider'
                />
            )}

        </>
    )
}

export default MenuSider