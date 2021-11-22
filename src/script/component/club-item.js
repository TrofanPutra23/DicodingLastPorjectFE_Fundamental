class ClubItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    set club(club) {
        this._club = club;
        this.render();
    }
    render() {

        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .mealCard {
            width:100%;
            padding:20px;
            background:#AE431E;
            margin: 10px;
        }
        .mealPic  {
            width: 100%;
            max-height: 300px;
            max-width:300px;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
        }
        .mealTitle h2{
            background: #E9C891;
            border-radius: 10px;
            text-align:center;
    
        }
        .mealTitle p{
            margin: 30px 10px;
            background: #E9C891;
        }
       
        </style>
        <div class="mealCard">
        <img class="mealPic" src="${this._club.strMealThumb}" alt="Fan Art">
        <div class="mealTitle">
            <h2>${this._club.strMeal}</h2>
            <p>${this._club.strInstructions}</p>
        </div>
        </div>
        `;
    }
}

customElements.define("club-item", ClubItem);