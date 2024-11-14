import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getListTopic } from "../../service/topicService"
import { Col, Row, Carousel, Collapse, Image, Tabs } from 'antd';
import CartItem from '../../components/CardItem';

function Topic() {
    const [topic, setTopic] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTopic()
            setTopic(response);
        }
        fetchApi()
    }, [])

    return (
        <>

            {topic.length > 0 && (

                <>
                    {/* <h2>Danh sách chủ đề</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên chủ đề</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {topic.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={'/quiz/' + item.id}>Làm bài</Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table> */}
                    <div className='home'>
                        <div className='inner-content no-select'>
                            <h1 style={{ fontSize: 33, color: 'white' }}> COURSE </h1>
                        </div>
                        <div className='inner-box no-select'>
                            <Row gutter={[30, 20]}>
                                {topic.map(item => (

                                    <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24} key={item.id}>
                                        <CartItem title={item.name} link={'/quiz/' + item.id} />
                                    </Col>

                                ))}
                            </Row>

                        </div>
                    </div>
                </>
            )}


        </>
    )
}

export default Topic