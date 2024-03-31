import {useState} from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  const [temp, setTemp] = useState({ f: '', c: ''});

  const updateC = (e) => {
    setTemp({
      c: e.target.value,
      f: (e.target.value * 9 / 5 + 32).toFixed(2),
    });
  }
  const updateF = (e) => {
    setTemp({
      c: ((e.target.value - 32) * 5 / 9).toFixed(2),
      f: e.target.value
    });
  }
  
  return (
    <div className='box'>
      <p>Конвертер температуры</p>
      <div className='wrp'>
      <TextField  value={temp.c} placeholder="градусы Цельсия" onChange={updateC}/>
      <p>=</p>
      <TextField  value={temp.f} placeholder="градусы Фаренгейта" onChange={updateF}/>
      </div>
    </div>
  );
}