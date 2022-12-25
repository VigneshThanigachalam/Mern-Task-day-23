import React from 'react'
import {useState} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export const TableContent = (prop) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      const handleRemove = (id) => {
        const newPeople = prop.row.filter((person) => {return person.id !== id});
        prop.sa( newPeople);
      };
const update_field=(id,name,mark)=>{
    prop.setName(name);
    prop.setMark(mark);
    prop.setId_update(id);
    prop.setbtnlabel("UPDATE");
}
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ Width: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Marks</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prop.row.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.mark}</StyledTableCell>
              <StyledTableCell align="right"><EditOutlinedIcon sx={{ "&:hover": { color: "#1976d2" } }} onClick={()=>{update_field(row.id,row.name,row.mark)}} /></StyledTableCell>
              <StyledTableCell align="right"><DeleteOutlineOutlinedIcon sx={{"&:hover":{color:"#1976d2"}}} onClick={()=>{handleRemove(row.id)}}></DeleteOutlineOutlinedIcon></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}
