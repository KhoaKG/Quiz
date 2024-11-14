import './CardItem.css'
import logo from "../../images/04174752142e41d9ab7444c0fd24076d_Avina-authoring-tools-giai-phap-tao-bai-giang-e-learning-thong-minh.jpg"
import { CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { getCookie } from '../../helper/cookie'
import { Link } from "react-router-dom";

function CartItem(props) {
    const { title, link, date } = props
    console.log(title);

    const token = getCookie("token")
    return (
        <>
            <div className="cart-item" >
                <div className='cart-item-image'>
                    <img src={logo} />
                </div>
                <div className='cart-item-title'>
                    {title}
                </div>
                <div className='cart-item-desc'>
                    {date && (
                        <div>
                            {date}
                        </div>
                    )}
                </div>
                <div className='cart-item-play'>

                    <Link to={token ? link : "/login"}>
                        <Button type="text" icon={<CaretRightOutlined />}>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CartItem