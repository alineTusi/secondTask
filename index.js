fetch("https://jsonplaceholder.typicode.com/photos")
    .then((data) => data.json())
    .then ((json) => renderListItems(json));

   const renderListItems = (items) =>{
    let html = '';
    items.forEach(newsContainer => {
        let htmlText = 
            `<div class="newsContainer">
                <img src="${newsContainer.thumbnailUrl}" >
                <h1>${newsContainer.title}</h1>
                <p class="paragraph">Paragraphs are the building blocks of papers. Many students define paragraphs in 
                terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, 
                though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                <a class="link" href="${newsContainer.url}">Read more =></a>
            </div>`;

html += htmlText;
});
        let container = document.querySelector('.newsContainer');
        container.innerHTML = html;

    };

