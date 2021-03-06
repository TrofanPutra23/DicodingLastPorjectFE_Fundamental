import '../component/search-bar.js';
import '../component/club-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked  = async () => {
        try 
        {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } 
        catch (message) {
            fallbackResult(message)
        }
        // const dataSource = new DataSource(renderResult, fallbackResult);
        // dataSource.searchClub(searchElement.value);
    };

    const renderResult = results => {
        clubListElement.clubs = results;
        // clubListElement.innerHTML = "";
        // results.forEach(club => {
        //     const { name, fanArt, description } = club;
        //     // const name = club.name;
        //     // const fanArt = club.fanArt;
        //     // const description = club.description;

        //     const clubElement = document.createElement("div");
        //     clubElement.setAttribute("class", "club");

        //     clubElement.innerHTML =

        //         `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">\n
        //         <div class="club-info">\n
        //         <h2> ${name} </h2>\n
        //         <p> ${description} </p>
        //         </div>`;

        //     // '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
        //     // '<div class="club-info">\n' +
        //     // '<h2>' + name + '</h2>\n' +
        //     // '<p>' + description + '</p>' +
        //     // '</div>';


        //     clubListElement.appendChild(clubElement);
        // })
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);

        // clubListElement.innerHTML = "";
        // clubListElement.innerHTML += `<h2 class="placeholder">' ${message} </h2>`
        // clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;