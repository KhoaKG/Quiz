import { NavLink, Outlet } from 'react-router-dom'
import './style.scss'
import { getCookie } from '../../helper/cookie'
import { useSelector } from 'react-redux'
import "./style.css"
import { Flex, Layout, Button, Typography, Avatar } from 'antd';
import LearnGrid from "../../components/LearnGrid"
import logo from "../../images/logo.png"
import logofold from "../../images/logo-fold.png"
import { SearchOutlined, NodeCollapseOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, MessageOutlined, RocketOutlined } from '@ant-design/icons';
import { useState } from 'react'
import Notify from "../../components/Notify"
import MenuSider from '../../components/MenuSider'
import { Oulet } from 'react-router-dom'
import Search from 'antd/es/input/Search'
const { Header, Footer, Sider, Content } = Layout;

// function LayoutDefault() {
//     const token = getCookie("token")
//     const isLogin = useSelector(state => state.loginReducer)

//     return (
//         <>
//             <div className="layout-default">
//                 <header className="layout-default__header">
//                     <div className="layout-default__logo">logo</div>
//                     <div className="menu">
//                         <ul>
//                             <li>
//                                 <NavLink to="/">
//                                     Home
//                                 </NavLink>
//                             </li>

//                             {token && (
//                                 <>
//                                     <li>
//                                         <NavLink to="/topic">
//                                             Topic
//                                         </NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to="/answers">
//                                             Answers
//                                         </NavLink>
//                                     </li>
//                                 </>
//                             )}

//                         </ul>
//                     </div>
//                     <div className="layout-default__account">
//                         {token ? (
//                             <>
//                                 <NavLink to="/logout">
//                                     Đăng xuất
//                                 </NavLink>
//                             </>
//                         ) : (
//                             <>
//                                 <NavLink to="/login">
//                                     Đăng nhập
//                                 </NavLink>
//                                 <NavLink to="/register">
//                                     Đăng ký
//                                 </NavLink>
//                             </>
//                         )}
//                     </div>
//                 </header>
//                 <main className="layout-default__main">
//                     <Outlet />
//                 </main>
//                 <footer className="layout-default__footer">
//                     Copyright @ 2023 by 28tech
//                 </footer>
//             </div>
//         </>
//     )
// }

// export default LayoutDefault

function LayoutDefault() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <>
            <Layout className='layout-default'>
                <header className='header'>
                    <div className={"header__logo " + (collapsed && "header__logo--collapse")}>
                        <RocketOutlined />
                    </div>
                    {/* <div className='header__nav'>
                        <div className='header__nav-left'>
                            <div className='header__search'>
                                <Search placeholder='Search' allowClear style={{ marginLeft: 30 }} />
                            </div>
                        </div>
                        <div className='header__nav-right'>
                            <Notify />
                        </div>
                    </div> */}
                    <Flex align="center" justify="space-between" flex={1} >
                        <Typography.Title level={3} type='secondary' style={{ marginLeft: "30px" }}>
                            Welcome project of Khoa
                        </Typography.Title>
                        <Flex align='center' gap="3rem" style={{ marginRight: "30px" }}>
                            <Search placeholder='Search Dashboard' allowClear />

                            <Flex align='center' gap="10px">
                                <MessageOutlined className='header-icon' />
                                <Notify className='header-icon' />
                                <Avatar icon={<UserOutlined className='header-icon' />} />
                            </Flex>
                        </Flex>
                    </Flex>
                </header>
                <Layout>
                    <Sider className='sider' collapsed={collapsed ? true : false} theme='light'>
                        <MenuSider />
                        <Button className='sider__collapse' type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)}></Button>
                    </Sider>
                    <Content className='content'>
                        <div className='content-image'>
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default LayoutDefault