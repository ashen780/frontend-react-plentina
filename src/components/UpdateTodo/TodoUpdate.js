import React from 'react';
import PropTypes from 'prop-types';
import ModalPop from '../ModalPop/ModalPop';

const TodoUpdate = ({ todo, getTodos }) => {
    TodoUpdate.propTypes = {
        todo: PropTypes.objectOf(PropTypes.any),
        getTodos: PropTypes.func
    };

    TodoUpdate.defaultProps = {
        todo: { title: '', discription: '', done: false },
        getTodos: () => null
    };

    return (
        <>

            <ModalPop purpose='update' todo={todo} getTodos={getTodos} />
        </>);
};

export default TodoUpdate;
