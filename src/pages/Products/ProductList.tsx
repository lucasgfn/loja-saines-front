
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueOptionsParams } from '@mui/x-data-grid';
import React from 'react';
import { IProductData } from '../../interface/IProductData';

const columns: GridColDef<IProductData>[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 220,
    editable: true,
  },
  {
    field: 'marca',
    headerName: 'Marca',
    width: 190,
    editable: true,
  },
  {
    field: 'tipo',
    headerName: 'Tipo',
    width: 150,
    editable: true,
  },
  {
    field: 'img',
    headerName: 'URL Image',
    description: 'Adicione a URL da imagem do produto.',
    width: 550,
  },
  {
    field: 'price',
    headerName: 'Preço',
    width: 160,
  },
];

// Definindo as linhas
const rows: IProductData[] = [
  { id: 1, nome: "Calça", marca: "Marca A", tipo: "Roupas", image: "https://example.com/image1.jpg", price: 49.99 },
  { id: 2, nome: "Camisa", marca: "Marca B", tipo: "Roupas", image: "https://example.com/image2.jpg", price: 29.99 },
  { id: 3, nome: "Tênis", marca: "Marca C", tipo: "Calçados", image: "https://example.com/image3.jpg", price: 89.99 },
  
];



export default function ProductList() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
