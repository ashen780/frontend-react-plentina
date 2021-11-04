import React from 'react';
import PropTypes from 'prop-types';
import ModalPop from '../ModalPop/ModalPop';

const CreateTodo = ({ getTodos }) => {
    CreateTodo.propTypes = {
        getTodos: PropTypes.func
    };

    CreateTodo.defaultProps = {
        getTodos: () => null
    };

    return (<>
        <ModalPop purpose='create' getTodos={getTodos} />
    </>);
};

export default CreateTodo;
