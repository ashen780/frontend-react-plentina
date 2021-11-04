import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TodoForm from '../CreateTodo/TodoForm';


const ModalPop = ({ purpose, todo, getTodos }) => {


    ModalPop.propTypes = {
        purpose: PropTypes.string,
        todo: PropTypes.objectOf(PropTypes.any),
        getTodos: PropTypes.func
    };

    ModalPop.defaultProps = {
        purpose: '',
        todo: { title: '', discription: '', done: false },
        getTodos: () => null
    };

    // console.log(purpose, todo);
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {purpose === 'create' ? <Button onClick={handleOpen} variant="contained" color="secondary" style={{ float: 'left', margin: 10 }}>Create New Todo</Button>
                : <Button variant="contained" onClick={handleOpen}  >Update</Button>

            }

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TodoForm purpose={purpose} todo={todo} getTodos={getTodos} />
                </Box>
            </Modal>
        </>
    );
};

export default ModalPop;
