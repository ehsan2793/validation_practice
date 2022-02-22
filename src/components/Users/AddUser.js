import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../Helper/Wrapper';
const AddUser = (props) => {
    const initialState = {
        username: '',
        age: '',
    };

    const [values, setValues] = useState(initialState);
    const [error, setError] = useState();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };

    const addUserHandler = (e) => {
        e.preventDefault();
        if (values.username.trim().length === 0 || values.age.trim().length === 0) {
            setError({
                title: 'Missing name or age',
                message: 'please make sure to fill out both name and age',
            });
            return;
        }
        if (+values.age < 1) {
            setError({
                title: 'Age Error',
                message: 'Age must be greater than 0',
            });
        }
        props.addNewUser(values);
        setValues(initialState);
        console.log(values);
    };
    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModel
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        id="username"
                        type="text"
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        name="age"
                        onChange={handleChange}
                        value={values.age}
                        id="age"
                        type="number"
                    />
                    <Button type="submit">add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
