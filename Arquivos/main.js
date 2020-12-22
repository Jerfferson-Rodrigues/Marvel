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
                        <a class="infoh" href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img">
                        </a>
                
                        <div>
                            <h3 class="title">${hero.name}</h3>
                            <div class="data"><h4>Data de modificação</h4></div>
                            <div class="dat"><h4>${hero.modified}</h4></div>
                        </div>
                    </div>`;
                }

                container.innerHTML= contentHTML;

            })
    }
    
}   
marvel.render();

