/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

axios
  .get('https://api.github.com/users/fuston05')

  .then( (res) => {
    const data= res.data;//destructure the object
    const cards= document.querySelector('.cards');
    cards.appendChild( createCard(data) );
  })
  .catch( err => {
    console.log('Error: ', err);
  } )

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = ['ron-hughes', 'DaniWinston25', 'april5622', 'Damico-Williams', 'rachellsincere'];
// followersArray.forEach( ele => {
//   axios
//     .get(`https://api.github.com/users/${ele}`)
//     .then( (res) => {
//       const cards= document.querySelector('.cards');
//       cards.appendChild(createCard(res));
//     })
//     .catch( (err) => {
//       console.log('Error ', err);
//     })
// } );//end foreach

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createCard(res){
  //create elements
    const card= document.createElement('div');
    const userImage= document.createElement('img');
    const cardInfo= document.createElement('div');
    const name= document.createElement('h3');
    const userName= document.createElement('p');
    const location= document.createElement('p');
    const profile= document.createElement('p');
    const profileUrl= document.createElement('a');
    const followersCount= document.createElement('p');
    const followingCount= document.createElement('p');
    const bio= document.createElement('p');

    // populate data from dataObject
    name.textContent= res.name;
    userImage.src= res.avatar_url;
    userName.textContent= res.login;
    location.textContent= 'Location:'+res.location;
    profile.textContent= 'Profile: ';
    profileUrl.setAttribute('href', res.url);
    profileUrl.textContent= res.url;
    followersCount.textContent= 'Followers: '+res.followers;
    followingCount.textContent= 'Following: '+res.following;
    bio.textContent= 'Bio: '+res.bio;

    //append structure
    card.appendChild(userImage);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    profile.appendChild(profileUrl);
    cardInfo.appendChild(followersCount);
    cardInfo.appendChild(followingCount);
    cardInfo.appendChild(bio);

    //add classes
    card.classList.add('card');
    userImage.classList.add('img');
    cardInfo.classList.add('info');
    name.classList.add('name');
    name.classList.add('userName');

  return card;
}//end func


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
