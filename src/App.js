import { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'

import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
} from '@mui/material';

import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

// JSON imports

import uad from './database/json/dimensao/uad.json';
import db from './database/json/fato/db.json';

// COMPONENTS imports

import Popup from './components/Popup';

const App = () => {

  const [selectedUad , setSelectedUad] = useState('TODAS');

  return (
    <>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <CssBaseline />
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id='teste-inputlabel'>Unidade de Negócio</InputLabel>
        <Select
          value={selectedUad}
          onChange={e => setSelectedUad(e.target.value)}
          label="Unidade de Negócio"
          id='teste1'
          labelId='teste2'
          autoWidth
        >
          {uad.uad.map(uad => {
            return (
              <MenuItem value={uad.uad}>{uad.uad}</MenuItem>
            )
          })}
        </Select>
      </FormControl>

      <MapContainer
        center={[-5.1991852,-39.4109497]}
        zoom={7}
        scrollWheelZoom={true}
        style={{'height': '97vh', 'width': '100%', 'borderRadius': '5px'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        
         {db.db.filter(uad => uad.uad === (selectedUad === 'TODAS' ? uad.uad : selectedUad)).map(uad => {
          return (
            <Polygon
              key={uad.uad}
              color={uad.color}
              positions={[uad.polygono]}>
                <Popup 
                  uad={uad.uad} 
                  municipio={uad.municipio}
                  faturado={uad.vlr_faturado}
                  debitado={uad.vlr_debitado}
                  arrecadado={uad.vlr_arrecadado}
                  color={uad.color}
                />
            </Polygon>
          )
        })} 

      </MapContainer>
    </>
  )
};

export default App;