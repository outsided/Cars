import style from './crumbs.module.css'
import { Link } from 'react-router-dom'

export default function Testt(){
    return(
        <div className={style.breadcrumbs}>
            <Link to='/newsandanons'></Link>
            <div className={style.bread}>{'Main Page'}<span className={style.spa}>{'>'}</span>{'Новости и анонсы'}</div>
            
            <div className={style.line}></div>
        </div>
    )
}