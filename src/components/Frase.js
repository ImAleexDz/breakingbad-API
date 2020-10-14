import React from 'react';
import styled from '@emotion/styled';

const ContFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 10rem;
`;

const Frase = ({frase}) => {
    return (
        <ContFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContFrase>
    )
}

export default Frase
