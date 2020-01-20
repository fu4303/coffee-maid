import styled from 'styled-components';
import { QUERIES } from '../../../Styling';

export const StepsCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: black;

    @media (${QUERIES.medium}) {
        width: 35%;
    }
`;

export const Step = styled.div`
    margin: 10px auto;

    @media (${QUERIES.medium}) {
        margin: 20px auto;
    }

    p {
        text-transform: uppercase;
        font-family: 'Lato', sans-serif;
        font-style: italic;
        font-size: 20px;
        line-height: 117%;
        text-transform: capitalize;
        color: #3e3e3e;
        padding: 0;
        margin: 10px auto;
        width: fit-content;
        text-align: center;

        &:nth-child(2) {
            font-weight: normal;
            font-size: 17px;
            line-height: 117%;
            color: white;
            text-align: center;
            letter-spacing: 0.2em;
            text-transform: capitalize;
        }

        &:nth-child(3) {
            margin-top: 15px;
            font-family: 'Michroma', sans-serif;
            font-style: normal;
            font-size: 26px;
            line-height: 117%;
            letter-spacing: 0.2em;
            text-transform: capitalize;
            color: white;
        }
    }
`;
