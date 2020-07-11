const marvel = {

    render: () =>{

        const Apimarvel = 'https://gateway.marvel.com:443/v1/public/characters?ts=1594234020&apikey=b7f748725ac95088fab844a68ff91d5f&hash=fd5249736c176578ac59480b0e5fe424&limit=20';
        const container = document.querySelector('#hero');
        let contentHTML = '';

        fetch(Apimarvel)

            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
                    <div class="personagem">
                        <a href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img">
                        </a>
                        <h3 class="title">${hero.name}</h3>
                        <h4 class"data"> Data de modificação</h4>
                        <h4 class="dat">${hero.modified}</h4>
                     </div>`;
                }

                container.innerHTML= contentHTML;

            })
    }
    
}   
marvel.render();

