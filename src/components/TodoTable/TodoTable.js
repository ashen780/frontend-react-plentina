/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TodoUpdate from '../UpdateTodo/TodoUpdate';
import TodoView from '../ViewTodo/TodoView';
import { fetchTodos } from '../../api/api';
import CreateTodo from '../CreateTodo/CreateTodo';


const TodoTable = () => {
    const [rows, setRows] = useState([]);

    const styles = {
        th: { fontWeight: 'bold' }
    };

    const getTodos = async () => {
        try {
            const { data } = await fetchTodos();
            // console.log([data]);
            setRows([...data]);
        } catch (error) {
            // console.log(error);
        }
    };

    useEffect(() => {
        // getdata
        getTodos();
    }, []);
    return (
        <>
            <CreateTodo getTodos={getTodos} />
            <TableContainer component={Paper}>
                <Button variant="contained" onClick={getTodos} color='primary' style={{ float: 'right' }}>Refresh Table</Button>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={styles.th}>Title</TableCell>
                            <TableCell align="center" style={styles.th}>Description</TableCell>
                            <TableCell align="center" style={styles.th}>Status</TableCell>
                            <TableCell align="center" style={styles.th}>Created At</TableCell>
                            <TableCell align="center" style={styles.th}>Updated At</TableCell>
                            <TableCell align="center" style={styles.th}>View</TableCell>
                            <TableCell align="center" style={styles.th}>Update</TableCell>
                            <TableCell align="center" style={styles.th}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell component="th" scope="row" align="center" >{row.title}</TableCell>
                                <TableCell align="center">{row.discription}</TableCell>
                                <TableCell align="center">{row.done ? 'done' : 'not done yet'}</TableCell>
                                <TableCell align="center">{row.createdAt}</TableCell>
                                <TableCell align="center">{row.updatedAt}</TableCell>
                                <TableCell align="center"> <TodoView todo={row} deletatable={false} getTodos={getTodos} /></TableCell>
                                <TableCell align="center"><TodoUpdate todo={row} getTodos={getTodos} /></TableCell>
                                <TableCell align="center"> <TodoView todo={row} deletatable={true} getTodos={getTodos} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TodoTable;
