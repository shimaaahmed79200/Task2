
import './App.css'
import '../src/components/FirstComponent/FirstComponent.css'
import '../src/components/SecondComponent/SecondComponent.css'
import FirstComponent from './components/FirstComponent/FirstComponent'
import SecondComponent from './components/SecondComponent/SecondComponent'

function App() {
  

  return (
    <div id='container'>
      <div id='box1'><FirstComponent></FirstComponent></div>
      <div id='box2'><SecondComponent></SecondComponent></div>
    </div>
  )
}

export default App
