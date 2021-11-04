import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { deleteTodo } from '../../api/api';


const TodoView = ({ todo, deletatable, getTodos }) => {
    TodoView.propTypes = {
        todo: PropTypes.objectOf(PropTypes.any),
        deletatable: PropTypes.bool,
        getTodos: PropTypes.func
    };

    TodoView.defaultProps = {
        todo: { title: '', discription: '', done: false },
        deletatable: false,
        getTodos: null
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    // console.log(deletatable);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [status, setStatus] = useState('');

    const handleDeleteTodo = async () => {
        try {
            setStatus("deleting ...");
            const { data } = await deleteTodo(todo._id);
            console.log(data);
            setStatus(`delete success`);
            getTodos();
        } catch (error) {
            console.log(error);
            setStatus("error occured check the logs");
        }
    };
    return (
        <>

            {deletatable ? <Button variant="contained" color="error" onClick={handleOpen}>Delete</Button> : <Button variant="contained" color="success" onClick={handleOpen}>View</Button>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {todo.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {todo.discription}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {todo.done ? "Done" : "not done yet"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {todo.createdAt}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {todo.updatedAt}
                    </Typography>
                    {deletatable ? <Button onClick={handleDeleteTodo} variant="contained" color="error">Confirm Delete</Button> : null}
                    <p>{status ? `${status} refresh table` : null} </p>

                </Box>
            </Modal>



        </>);
};

export default TodoView;
