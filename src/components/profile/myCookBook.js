import React from 'react';
import { connect } from "react-redux";

function MyCookBook({ currentUser, cookbook }) {



    return (
        <>
            <h3>My CookBook</h3>
            

            {cookbook.map(element => (
                <p>
                    {element.recipeName}
                </p>
            ))}


            <br />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.user,
        cookbook: state.userReducer.cookbook
    };
};


export default connect(mapStateToProps)(MyCookBook);
