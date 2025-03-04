// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


window.addEventListener('load', (e) =>{

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((axiosData) => {
    console.log('axiosData.data', axiosData);
    const tabData = axiosData.data.topics;
    tabData.forEach((item) => {
        topics.appendChild(tab(item));
    }) //closes tabData foreach
}); //closes axios

const tab = ((array) =>{
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = array;
    return tab;
    }); //closes the tab 
}); // closes the window load. 

