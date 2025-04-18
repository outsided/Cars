import logo from '../../assets/logo.png'
import style from './header.module.css'
import Cabinet from './cab/Cabinet'
import vector from '../../assets/Vector.png'


export default function Header(){
    return (
        <div className={style.head}>
            <div className={style.partone}>
                <img src={logo} alt='logo'></img>
                <form className={style.f}>
                     <input type='text' className={style.inp} placeholder='Найдите ваш электромобиль'></input>
                     <img className={style.vector} src={vector} alt='vector'></img>
                </form>
            </div>
            <Cabinet/>
        </div>
    )
}