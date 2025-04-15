import style from './crumbs.module.css'


const breadCrumbs =() =>{
    return(
    <div>
          <div className={style.breadcrumbs}>
            <div className={style.bread}>{'Main Page'}<span className={style.spa}>{'>'}</span>{'Новости и анонсы'}</div>
            <div className={style.line}></div>
        </div>
    </div>
      
    )
}   
export default breadCrumbs;