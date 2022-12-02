import React, {useState, useEffect} from 'react';
import Bills from './bills';
import api from './services/api'
import {Button, Input, Label} from 'reactstrap'
import './css/geral.css'
import './css/style.css'

function App() {

  const [allBills, setAllBills] = useState([])

  useEffect(() => {
    async function getAllBills(){
      const response = await api.get('/annotations',)
      setAllBills(response.data)
    }
    getAllBills()
  }, [])

  const [names, setBillName] = useState('')
  const [description, setBillDescrip] = useState('')
  const [values, setBillValue] = useState('')

  async function submitBill(e){
    e.preventDefault()
    const response = await api.post('/annotations', 
    {
      names, 
      description, 
      values,
      priority: false
    })
    setBillDescrip('')
    setBillName('')
    setBillValue('')
    setAllBills([...allBills, response.data])
  }

  async function deleteBill(id){
    const deleted = await api.delete(`/annotations/${id}`)
    if(deleted)
    {
      setAllBills(allBills.filter(bill => bill._id != id))
    }
  }

  return (
    <div id="app">
      <header>
        <h1 className="center">Quadro de gastos</h1>
      </header>
      <main>
        <div id="novobloco">
          <aside>
            <strong className="center">Novo Recibo</strong>
            <form onSubmit={submitBill}>
              <div className="row">
                <div className="col-12">
                  <Label for="names">Nome</Label>
                  <Input required value={names} onChange={e => setBillName(e.target.value)} id="names"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Label for="values">Valor</Label>
                  <Input required value={values} onChange={e => setBillValue(e.target.value)} type="number" id="values"/>
                </div>
              </div>
              <div className="input-block">
                <Label for="description">Descrição</Label>
                <textarea className="description" required value={description} onChange={e => setBillDescrip(e.target.value)} id="description"/>
              </div>
              <div className="center">
                <Button type="submit" color="success" outline size="">Adicionar</Button>
              </div>
            </form>
          </aside>
          <div id="painel">
            <ul>
              {allBills.map(data => (
                <Bills data={data} deleteBill={deleteBill}/>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
