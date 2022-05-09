import { useDispatch } from 'react-redux';
import { subjectAddMessage, subjectCreate, subjectFetchDetail, subjectFetchList } from '../../store/actions/subject-action';

const SubjectPage = () => {

    const dispatch = useDispatch();

    return (<>
        <h1>Je suis sur la page sujet</h1>

        <h3>(DEV) Test Redux</h3>
        <button onClick={() => dispatch(subjectFetchList())}>Load All Subject</button>
        <button onClick={() => dispatch(subjectCreate('Test Redux', 'Ceci est un test!', [1]))}>Create new Subject</button>
        <button onClick={() => dispatch(subjectFetchDetail(1))}>Detail Subject 1</button>
        <button onClick={() => dispatch(subjectAddMessage(1, 'Redux'))}>Add message</button>
    </>);
};

export default SubjectPage;