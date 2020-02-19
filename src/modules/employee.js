const initialState = {
    selectedIds: []
};

const ADD_SELECT = 'ADD_SELECT';
const REMOVE_SELECT = 'REMOVE_SELECT';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SELECT:
            return state.selectedIds.push(action.id);
        case REMOVE_SELECT:
            return state.selectedIds.splice(
                state.selectedIds.indexOf(action.id),
                1
            );
        default:
            return state;
    }
}
