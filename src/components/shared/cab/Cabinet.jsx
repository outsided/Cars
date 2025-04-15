import style from './cab.module.css'
import {dataImage} from './dataimg'

const Cabinet = () => {
    return (
        <div>
            {dataImage.map(item=>
                <img className={style.cabimg} src={item.img} alt='img'></img>
            )}
        </div>
    )
}
export default Cabinet;