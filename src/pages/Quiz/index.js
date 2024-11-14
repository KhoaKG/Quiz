import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getTopic } from "../../service/topicService";
import { getListQuestion } from "../../service/questionService";
import { getCookie } from "../../helper/cookie";
import { createAnswer } from "../../service/quizService";
import "./quiz.css"


function Quiz() {
    const params = useParams()
    console.log(params);
    const [dataTopic, setDataTopic] = useState([])
    const [dataQuestion, setDataQuestion] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id)
            setDataTopic(response);
        }
        fetchApi()
    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestion(params.id)
            setDataQuestion(response);
        }
        fetchApi()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        let selectedAnswers = []

        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].checked) {
                const name = e.target.elements[i].name
                const value = e.target.elements[i].value

                selectedAnswers.push({
                    questionId: parseInt(name),
                    answer: parseInt(value)
                })

            }
        }

        let options = {
            userId: parseInt(getCookie("id")),
            topicId: parseInt(params.id),
            answers: selectedAnswers
        }

        const response = await createAnswer(options)

        if (response) {
            navigate(`/result/${response.id}`)
        }

    }
    return (
        <>
            <div className="inner-quiz">
                <h2 className="inner-title">BÀI QUIZ CHỦ ĐỀ {dataTopic && (<>{dataTopic.name}</>)}</h2>

                <div className="form-quiz" >
                    <form onSubmit={handleSubmit}>
                        {dataQuestion.map((item, index) => (
                            <div className="form-quiz_item" key={item.id}>
                                <div className="form-quiz_title">
                                    <div className="form-quiz_sentence">
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className="form-quiz_question">
                                        <span>{item.question}</span>
                                    </div>
                                </div>
                                {item.answers && (item.answers.map((itemAns, indexAns) => (
                                    <div className="form-quiz__answer" key={indexAns}>
                                        <input type="radio" name={item.id} value={indexAns} id={`quiz-${item.id}-${indexAns}`} className="check-input" />
                                        <label htmlFor={`quiz-${item.id}-${indexAns}`} className="checkbox">
                                            <svg viewBox="0 0 22 15" fill="none">
                                                <path d="M1 6.85L8.096677 14L21 1" />
                                            </svg>
                                        </label>
                                        <span>{itemAns}</span>
                                        {/* <input className="form-quiz_checkbox" type="radio" name={item.id} value={indexAns} id={`quiz-${item.id}-${indexAns}`} />
                                        <label className="form-quiz_label" htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label> */}
                                    </div>
                                )))}
                            </div>
                        ))}

                        <button type="submit" className="button-quiz">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Quiz