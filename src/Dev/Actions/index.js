import FETCH from '../API/Fetch.js';
export const clickedH1 = () => {
    return {
        type: "CLICKED",
        payload: ''
    }
};
export const getAllEnrollement = () => {
    return {
        type: "ENROLLEMENT_GET_ALL",
        payload: new FETCH().GetAllEnrollement(result => {
            const { data, error } = result;
            if (error) {
                // Handle error
                return;
            }
            if (data) {
                return data;
            }
        })
    }
};
export const enableEnrollementForm = (status) => {
    return {
        type: "ENROLLEMENT_FORM_ENABLE",
        payload: status
    }
};
export const selectedEnrollement = (enrollement) => {
    return {
        type: "ENROLLEMENT_SELECT",
        payload: enrollement
    }
};
export const deleteEnrollement = (enrollement) => {
    new FETCH().DeleteEnrollement(enrollement.id)
    return {
        type: "ENROLLEMENT_DELTE",
        payload: enrollement.id
    }
};
export const updateEnrollement = (enrollement) => {
    new FETCH().UpdateEnrollement(enrollement.id, enrollement)
    return {
        type: "ENROLLEMENT_UPDATE",
        payload: enrollement
    }
};
export const addEnrollement = (enrollement) => {
    new FETCH().AddEnrollement(enrollement)
    return {
        type: "ENROLLEMENT_ADD",
        payload: enrollement
    }
};