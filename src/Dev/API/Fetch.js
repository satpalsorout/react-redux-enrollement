
const axios = require('axios');
axios.defaults.crossDomain = true;

class FETCH {

    AddEnrollement(enrollementData) {
        var url = "http://localhost:62536/api/Enrollement"
        var data = JSON.stringify(enrollementData)
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
            });
    }
    UpdateEnrollement(id, enrollementData) {
        var url = "http://localhost:62536/api/Enrollement/" + id
        var data = ''
        var data = JSON.stringify(enrollementData)
        axios.put(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
            });
    }

    GetAllEnrollement(callback) {
        var url = "http://localhost:62536/api/Enrollement"
        axios.get(url)
            .then(res => callback({ data: res.data }))
            .catch(err => callback({ error: err }));
    }
    DeleteEnrollement(id) {
        var url = "http://localhost:62536/api/Enrollement/" + id
        axios.delete(url)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
            });
    }
}
export default FETCH