import React from 'react';

import DefaulAvatar from '../assets/img/photo-cover.png';
import { Grid } from '@material-ui/core';

const photoCheker = (photo) => {
    let checkFormat = photo.toString().slice(-4);

    if (checkFormat == 'jpeg' || checkFormat == '.jpg') {
        return photo;
    } else {
        return DefaulAvatar;
    }
}

export const UserCard = ({user}) => {
    return (
        <Grid item xs={4}>
            <div className="users__card">
                <div className="users__card-avatar">
                    <img src={photoCheker(user.photo)} alt="avatar"/>
                </div>
                <div className="users__card-info">
                    <h5 data-title={user.name}>{user.name}</h5>
                    <span data-title={user.position}>{user.position}</span>
                    <span data-title={user.email}>{user.email}</span>
                    <span data-title={user.phone}>{user.phone}</span>
                </div>
            </div>
        </Grid>
    )
}