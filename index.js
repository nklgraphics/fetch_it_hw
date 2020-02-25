const url = 'https://www.reddit.com/r/ProgrammerHumor.json';
let redditDiv = document.querySelector('#reddit');

const getReddit = () => {
  // Do not edit above this line
 const memes = fetch(`${url}`).then((response) => {
    return response.json()
   }).then(redditResponse => {
     console.log(redditResponse)
       const redditPosts = redditResponse.data.children.map( item => {
     const redditPost = document.createElement("div")
     redditPost.classList.add("reddit-divs")
   
     const titleElement = document.createElement('p')
     titleElement.textContent = item.data.title
     redditPost.appendChild(titleElement)
 
     const imageElement = document.createElement("img")
     imageElement.setAttribute("src", item.data.url)
     redditPost.appendChild(imageElement)
     redditDiv.appendChild(redditPost)
       })
   })
   console.log(memes)
  // Do not edit below this line
};
getReddit();
