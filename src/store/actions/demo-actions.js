import { createAction } from '@reduxjs/toolkit';


// OLD SCHOOL
export const DEMO_ACTION = 'demo/action';
export const demoActionOld = (value) => {
    return {
        type: DEMO_ACTION,
        payload: value
    };
};

// NEW SCHOOL
// V1
const demoActionV1 = createAction('demo/action');
const action1 = demoActionV1('TOTO');
//V2
const demoActionV2 = createAction('demo/action', (value) => {
    return {
        payload: value
    };
});
