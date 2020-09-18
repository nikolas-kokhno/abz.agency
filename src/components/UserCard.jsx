import React from 'react';
import { Grid } from '@material-ui/core';

export const UserCard = ({user}) => {
    return (
        <Grid item xs={4}>
            <div className="users__card">
                <div className="users__card-avatar">
                    <img src={user.photo} alt="avatar"/>
                </div>
                <div className="users__card-info">
                    <h5>{user.name}</h5>
                    <span>{user.position}</span>
                    <span>{user.email}</span>
                    <span>{user.phone}</span>
                </div>
            </div>
        </Grid>
    )
}