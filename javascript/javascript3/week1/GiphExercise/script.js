//variables

const button = document.querySelector('button');


button.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        const picture = json[0].url;
        const imgInHtml = '<img src="' + picture + '">';
        document.getElementById('image').innerHTML = imgInHtml;
        
    })
        
});

