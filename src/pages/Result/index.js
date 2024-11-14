import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAnswers } from "../../service/answersService"
import { getListQuestion } from "../../service/questionService"
import './Result.css'
import { Link } from "react-router-dom"

function Result() {
    const params = useParams()
    const [dataResult, setDataResult] = useState()

    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswers = await getAnswers(params.id)
            const dataQuestion = await getListQuestion(dataAnswers.topicId)

            let resultFinal = []

            for (let i = 0; i < dataQuestion.length; i++) {
                resultFinal.push({
                    ...dataQuestion[i],
                    ...dataAnswers.answers.find(item => item.questionId === dataQuestion[i].id)
                });
            }
            setDataResult(resultFinal);
        }

        fetchApi()

    })
    return (
        <>
            <div className="inner-quiz">
                <h2 className="inner-title">Kết quả:</h2>
                <div className="form-quiz">
                    {dataResult && dataResult.map((item, index) => (
                        <div className="answer__item" key={item.id}>
                            <div className="form-quiz_item" key={item.id}>
                                <div className="form-quiz_title">
                                    <div className="form-quiz_sentence">
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className="form-quiz_question">
                                        <span>{item.question}</span>
                                    </div>
                                </div>


                                {item.answers && (item.answers.map((itemAns, indexAns) => {
                                    let classname = ""
                                    let checked = false

                                    if (item.answer === indexAns) {
                                        checked = true;
                                        classname = "result__item--selected"
                                    }

                                    if (item.correctAnswer === indexAns) {
                                        classname += "result__item--result"
                                    }

                                    return (
                                        <div className="form-quiz__answer" key={indexAns}>
                                            <input type="radio" checked={checked} className="check-input" />
                                            <label htmlFor={`quiz-${item.id}-${indexAns}`} className={"checkbox " + (item.correctAnswer === item.answer ? (
                                                "checkbox-true "
                                            ) : "checkbox-false ")}>
                                                <svg viewBox="0 0 22 15" fill="none">
                                                    <path d="M1 6.85L8.096677 14L21 1" />
                                                </svg>
                                            </label>
                                            <span>{itemAns}</span>
                                            {/* <input className="form-quiz_checkbox" type="radio" name={item.id} value={indexAns} id={`quiz-${item.id}-${indexAns}`} />
                                        <label className="form-quiz_label" htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label> */}
                                        </div>
                                    )
                                }))}
                            </div>

                        </div>
                    ))}
                    <Link to={`/answers`}>
                        <button className="button-quiz">Done</button>
                    </Link >
                </div>
            </div>

        </>
    )
}

export default Result