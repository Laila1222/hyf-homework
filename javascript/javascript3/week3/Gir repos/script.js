//Get api
// fetch('https://api.github.com/search/repositories?q=user:azinkamran')
// .then(response => response.json())
// .then(json => console.log(json))

// const bennaUrl = () => 
//     {fetch('https://api.github.com/search/repositories?q=user:benna100')
//     .then(response => response.json())
//     .then(json => console.log(json));
// }
// const lillaUrl = () => {
//     fetch('https://api.github.com/search/repositories?q=user:Laila1222')
//     .then(response => response.json())
//     .then(json => {
//         for (let i = 0; i < json.items.length; i++) {
//             console.log(json.items[i].full_name)
//         }
//     })
// }

// bennaUrl();
// lillaUrl();

const bennaUrl2 =  fetch('https://api.github.com/search/repositories?q=user:benna100')


const lillaUrl2 = fetch('https://api.github.com/search/repositories?q=user:Laila1222')


// const azinUrl = fetch('https://api.github.com/search/repositories?q=user:azinkamran');
// const idaUrl = fetch('https://api.github.com/search/repositories?q=user:aina21');
// const fatemehUrl = fetch('https://api.github.com/search/repositories?q=user:Fatemeh-Pakpour');

const ul = document.querySelector('ul');

Promise.all([bennaUrl2, lillaUrl2])
.then(responses => {
    let responsesToJson = responses.map(response => response.json());
    return Promise.all(responsesToJson)
})
.then(json =>  {
    let onlyName;
    for (let i = 0; i < json.length; i++) {
        console.log(json[i])
        const userName = json[i].items[1].owner.login;
        createLiForUserName(userName);
        console.log(userName)
        for (let j = 0; j < json[i].items.length; j++) {
            const repos = json[i].items[j];
            const nameOfRepo = json[i].items[j].full_name;
            const repoUrl = 'https://github.com/' + json[i].items[j].full_name;
            const onlyRepoName = getRepoName(nameOfRepo);
            createLi(onlyRepoName, repoUrl);
            
           

            

        }

    }
})
function createLiForUserName(userName) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = userName;
}

function createLi(nameOfRepo, repoUrl) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML =`${nameOfRepo} -  url: ${repoUrl}`;
}

function getRepoName(full_name) {
    let arrOfSeperateStrings = full_name.split('/');
    arrOfSeperateStrings.shift();
    
    return arrOfSeperateStrings.toString();
}



// function getUsername (full_name) {
//     const arrOfSeperateStrings = full_name.split('/');
//     const onlyName = arrOfSeperateStrings.shift();
//     console.log(onlyName);
// }

const myArray = [1, 2, 3, 4, 5];
myArray.shift();
console.log(myArray)

