import { Dropdown, Space } from 'antd';
import { NotificationOutlined, BellOutlined, ProfileOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import "./notify.css"
function Notify() {
    const items = [
        {
            label: <div className='notify__item'>
                <div className='notify__item-icon'>
                    <BellOutlined />
                </div>
                <div className='notify__item-content'>
                    <div className='notify__item-title'>
                        Item 1
                    </div>
                    <div className='notify__item-time'>
                        8 minute ago
                    </div>
                </div>
            </div>,
            key: '1',
        },
        {
            label: <div className='notify__item'>
                <div className='notify__item-icon'>
                    <ProfileOutlined />
                </div>
                <div className='notify__item-content'>
                    <div className='notify__item-title'>
                        Item 2
                    </div>
                    <div className='notify__item-time'>
                        9 minute ago
                    </div>
                </div>
            </div>,
            key: '2',
        }
    ];
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                dropdownRender={(menu) => (
                    <>
                        <div className='notify__dropdown'>
                            <div className='notify__header'>
                                <div className='notify__header-title'>
                                    <NotificationOutlined />
                                </div>
                                <Button type="link"> View All</Button>
                            </div>
                            <div className='notify__body'>
                                {menu}
                            </div>

                        </div>
                    </>
                )}
            >
                <Button className='header-icon' type="text" icon={<NotificationOutlined />}></Button>
            </Dropdown>
        </>
    )
}

export default Notify