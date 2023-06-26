import React from "react";
export const Movie = (props) => {
    return (
        <>
            <tr>
                <th>{props.id}</th>
                <th>{props.title}</th>
                <th>{props.rating}</th>
                <th>{props.awards}</th>
                <th>{props.length}</th>
            </tr>
        </>
    );
};