

class DataSource {
    static searchClub(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })


        // return new Promise((resolve, reject) => {
        //     // const filteredClubs = clubs.filter(function (club) {
        //     //     return club.name.toUpperCase().includes(keyword.toUpperCase());
        //     // });
        //     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

        //     if (filteredClubs.length) {
        //         resolve(filteredClubs);
        //     } else {
        //         reject(`${keyword} is not found`);
        //         // this.onFailed(keyword + " is not found");

        //     }
        // });
    }
}

export default DataSource;