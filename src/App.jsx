import Table from './components/Table'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <h1>Simple Excel-like Table</h1>
        <Table rows={5} columns={5} />
      </div>
    </>
  )
}

export default App
