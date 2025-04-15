import style from './content.module.css'
import {dataContent} from './dataContent'
export default function Content(){

    return(
        <div >
            <div className={style.head}>
                Новости и анонсы
            </div>
            <div className={style.content}>
            {dataContent.map(item => 
            <div className={style.card}>
                <img src={item.img} alt='qwe'></img>
                <div className={style.titleDisc}>
                    <div className={style.title}>{item.title}</div>
                    <div className={style.disc}>{item.description}</div>
                </div>
                
                <div className={style.lowcard}>
                    <span>{item.name}</span>
                    <span>{item.data}</span>
                </div>
            </div>)}
             </div>
        </div>
    );
}