import React from 'react';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ textAlign: "center", paddingTop: 100 }}>
                <h1>404 - Not Found</h1>
                <button className='btn-primary' onClick={() => navigate(-1)}>Return</button>
            </div>
        </>
    )
}

export default ErrorPage;