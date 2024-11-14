import { useEffect, useState } from "react"
import { getAnswersByUserId } from "../../service/answersService"
import { getListTopic } from "../../service/topicService"
import { Link } from "react-router-dom"
import { Col, Row, Carousel, Collapse, Image, Tabs } from 'antd';
import CartItem from '../../components/CardItem';
function Answers() {

    const [dataAnswers, setDataAnswers] = useState()

    useEffect(() => {
        const fetchApi = async () => {
            const answersByUserId = await getAnswersByUserId()
            const topics = await getListTopic()
            console.log(answersByUserId);
            console.log(topics);

            const result = []

            for (let i = 0; i < answersByUserId.length; i++) {
                result.push({

                    ...topics.find(item => item.id === answersByUserId[i].topicId),
                    ...answersByUserId[i]
                })
            }
            setDataAnswers(result.reverse());

        }
        fetchApi()




    }, [])




    return (
        <>


            {dataAnswers && (

                <>
                    {/* <h2>Danh sách bài đã luyện tập</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên chủ đề</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataAnswers.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={'/result/' + item.id}>Làm lại</Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table> */}
                    <div className='home'>
                        <div className='inner-content no-select'>
                            <h1 style={{ fontSize: 33, color: 'white' }}> Danh sách bài đã luyện tập </h1>
                        </div>
                        <div className='inner-box no-select'>
                            <Row gutter={[30, 20]}>
                                {dataAnswers.map(item => (

                                    <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24} key={item.id}>
                                        {/* <div>{item.id}</div> */}
                                        <CartItem title={item.name} link={'/result/' + item.id} />
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

export default Answers