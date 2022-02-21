import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
    const initialState = {
        username: '',
        age: '',
    };
    const [values, setValues] = useState(initialState);
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
            return;
        }
        if (+values.age < 1) {
            return;
        }
        props.addNewUser(values);
        setValues(initialState);
        console.log(values);
    };

    return (
        <div>
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
        </div>
    );
};

export default AddUser;
