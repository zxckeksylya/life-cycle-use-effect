import './App.css'
import { LyfecycleClassComponent } from './components/LifecycleClassComponent'
import LyfecycleFunctionComponent from './components/LifecycleFunctionComponent'

const styles = {
  display:'flex',
  gap:'20px'
}

function App() {

  return (
    <div style={styles}> 
     <LyfecycleClassComponent></LyfecycleClassComponent>
     <LyfecycleFunctionComponent></LyfecycleFunctionComponent>
    </div>
  )
}

export default App
