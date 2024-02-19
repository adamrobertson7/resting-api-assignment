
// async/await
async function getData(key) {
    try {
        
        const foobar = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        const infoFromServer = await foobar.json();
        console.log(infoFromServer);

        // DATE
        const date = document.querySelector("#info");
        date.innerHTML = ` 
        <p id="date">${infoFromServer. date}</p>
`;

        // IMAGE/VID OF THE DAY
        let imageHtml = '';
        if (infoFromServer.hdurl) {

            imageHtml = `<p id="link"><img src="${infoFromServer.hdurl}" alt="image"/></p>`;
        } else if (infoFromServer.url) {

            imageHtml = `<p id="link">  <iframe width="1000px" height="500px" src="${infoFromServer.url}" alt="video"></iframe></p>`;
        }
        console.log(imageHtml);

        // EXPLANATION 
        const content = document.querySelector("#info");
        content.innerHTML += `
        ${imageHtml}
        <p id="title">${infoFromServer.title}</p>
        <p id="caption">Explanation: ${infoFromServer.explanation}</p>
`;



    } catch (error) {
        console.warn(`Nope: ${error}`);
    }

}
getData('gYGp82dfpImlPxXstmhIwgvcPmdmfZbqEamnRp1v');





