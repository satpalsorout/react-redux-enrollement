export default function(state=null,action)
{
switch(action.type){
    case "ENROLLEMENT_ADD":
    state.ActivateEnrollmentForm=false;
    return { 
        ...state,
        EnrollementList:[...state.EnrollementList, action.payload]
     }
    break;
    case "ENROLLEMENT_FORM_ENABLE":
    state.ActivateEnrollmentForm=true;
    return state
    break;
}
return state;
}