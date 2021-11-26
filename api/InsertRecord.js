import { registerRecordUrl } from "../constants/Api";


const InsertRecord = payload => {
    const data = {
        contributor_id: payload.contributorId,
        title: payload.title,
        bluejustice_type: arrayToStr(payload.bluejusticeTypes),
        ecosystem_type: arrayToStr(payload.ecoTypes),
        impact_type: arrayToStr(payload.impactTypes),
        severity: payload.selectedSeverity,
        magnitude: payload.selectedMagnitude,
        country: payload.country,
        location: payload.location,
        status: payload.selectedStatus,
        categories: arrayToStr(payload.selectedCategories),
        description: payload.description,
        image_url: '/assets/somelink'
    };


    const apiUrl = registerRecordUrl()
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        console.log("Response: ", response);
    })
    .catch(error => console.log("Error: ", error))
}


const arrayToStr = arr => {
    let str = "";
    arr.map(item=> str += item + ',');
    return str.slice(0,-1)
}


export default InsertRecord;