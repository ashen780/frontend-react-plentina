import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTodo, updateTodo } from '../../api/api';


const TodoForm = ({ purpose, todo, getTodos }) => {

    TodoForm.propTypes = {
        purpose: PropTypes.string,
        todo: PropTypes.objectOf(PropTypes.any),
        getTodos: PropTypes.func

    };

    TodoForm.defaultProps = {
        purpose: '',
        todo: { title: '', discription: '', done: false },
        getTodos: () => null

    };

    const [todoData, setTodoData] = useState({ id: '', title: '', discription: '', done: false });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(`${purpose}ing ...`);

        if (purpose === 'create') {
            try {
                await createTodo(todoData);
                // const { data } = await createTodo(todoData);
                // console.log(data);
                getTodos();
                setStatus(`${purpose} success`);
            } catch (error) {
                console.log(error);
                setStatus("error occured check the logs");
            }
        }

        if (purpose === 'update') {
            try {
                await updateTodo(todo._id, todoData);
                // const { data } = await updateTodo(todo._id, todoData);
                //  console.log(data);
                getTodos();

                setStatus(`${purpose} success`);

            } catch (error) {
                console.log(error);
                setStatus("error occured check the logs");
            }
        }


    };

    useEffect(() => {
        // console.log(todo);
        if (purpose === "update") {
            setTodoData({ ...todoData, discription: todo.discription, title: todo.title });
        }

    }, []);



    return (
        <>
            {purpose === 'create' ? <p>create a new todo</p> :
                <p>update todo</p>}

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField id="title" label="Title" variant="outlined" value={todoData.title} onChange={(e) => setTodoData({ ...todoData, title: e.target.value })} />
                <TextField id="description" label="Description" variant="outlined" value={todoData.discription} onChange={(e) => setTodoData({ ...todoData, discription: e.target.value })} />

                <Button variant="contained" color="primary" type="submit" >save</Button>
                <p>{status ? `${status} refresh table` : null} </p>
            </Box>
        </>
    );
};

export default TodoForm;
