import './App.css'
import Header from './components/shared/Header'
import Content from './components/shared/content/Content'
import BreadCrumbs from './components/shared/breadсrumbs/BreadСrumbs'
function App() {
 
  return (
    <div className='wrapper'>
      <Header/>  
      <hr/>
      <BreadCrumbs/>
      <Content/>
    </div>
  )
}

export default App
