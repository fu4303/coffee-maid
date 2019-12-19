import React from 'react';
import { StepsCont, Step } from './styles';

const Steps = props => (
    <StepsCont>
        {props.steps === 'chemex' && (
            <>
                <Step>
                    <p>1.</p>
                    <p>Rinse Filter</p>
                </Step>
                <Step>
                    <p>2.</p>
                    <p>Add Ground Coffee</p>
                    <p>400g</p>
                </Step>
                <Step>
                    <p>3.</p>
                    <p>First Pour</p>
                    <p>400g</p>
                </Step>
                <Step>
                    <p>4.</p>
                    <p>Second Pour</p>
                    <p>100g</p>
                </Step>
                <Step>
                    <p>5.</p>
                    <p>Final Pour</p>
                    <p>200g</p>
                </Step>
                <Step>
                    <p>6.</p>
                    <p>Discard Filter</p>
                </Step>
            </>
        )}

        {props.steps === 'french' && (
            <>
                <Step>
                    <p>1.</p>
                    <p>Rinse Carafe with Hot Water</p>
                </Step>
                <Step>
                    <p>2.</p>
                    <p>Add Coffee into Press</p>
                    <p>400g</p>
                </Step>
                <Step>
                    <p>3.</p>
                    <p>Pre Infusion</p>
                    <p>100g</p>
                </Step>
                <Step>
                    <p>4.</p>
                    <p>Let Rest 30 sec</p>
                </Step>
                <Step>
                    <p>4.</p>
                    <p>Stir</p>
                </Step>

                <Step>
                    <p>5.</p>
                    <p>Final Pour</p>
                    <p>100g</p>
                </Step>
                <Step>
                    <p>6.</p>
                    <p>Let Rest 4 mins</p>
                </Step>
                <Step>
                    <p>7.</p>
                    <p>Slowly Press</p>
                </Step>
            </>
        )}
    </StepsCont>
);

export default Steps;
