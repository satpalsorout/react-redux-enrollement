export default function (state = null, action) {
    switch (action.type) {
        case "ENROLLEMENT_SELECT":
            return action.payload;
            break;
        case "ENROLLEMENT_DELTE":
            Object.assign({}, state, {
                EnrollementList: [...state.EnrollementList.filter(Enrollement => Enrollement.id !== action.payload)],
            });
            return true;
            break;
        case "ENROLLEMENT_UPDATE":
            Object.assign({}, state, {
                EnrollementList: [...state.EnrollementList.filter(Enrollement => Enrollement.id !== action.payload.id)],
                EnrollementList: [...state.EnrollementList, action.payload]
            });
            return true;
            break;
    }
    return state;
}