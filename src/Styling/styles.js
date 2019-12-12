import styled from 'styled-components';

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`,
    maxWidth: `1500px`
};

export const COLORS = {
    lightBlue: '#E7F0FE',
    darkBlue: '#3A3578',
    lightPink: '#FAF1EF',
    darkPink: '#E98383'
};

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Inner = styled.div`
    max-width: ${QUERIES.maxWidth};
    width: 100vw;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.h1`
    font-size: 35px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${COLORS.darkBlue};
`;

export const SmallHeading = styled.h2`
    font-size: 13px;
    color: black;
    font-weight: 300;
`;

export const Paragraph = styled.p`
    font-size: 13px;
    color: ${COLORS.darkBlue};
    font-size: 13px;
    line-height: 117%;
    letter-spacing: 0.14em;
    text-transform: lowercase;
`;

export const Break = styled.span`
    flex-basis: 100%;
`;

export const Button = styled.button`
    font-family: 'Muli', sans-serif;
    text-transform: uppercase;
    outline: none;
    width: 140px;
    padding: 8px;
    background: transparent;
    font-size: 12px;
    letter-spacing: 0.24em;
    line-height: 17px;
    color: ${COLORS.darkBlue};
    border: 0.5px solid ${COLORS.darkBlue};
    margin-top: 20px;
    cursor: pointer;
    transition-duration: 0.3s;
`;
