// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
window.addEventListener('load', (e) =>{


function Header() {


    const header = document.createElement ('div');
    const headerDate = document.createElement ('span');
    const headerTitle = document.createElement ('h1');
    const headerTemp = document.createElement ('span');

    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    headerDate.textContent = `SMARCH 28, 2019`;
    headerTitle.textContent = `Lambda Times`;
    headerTemp.textContent = `98°`;

    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    return header;

}//closes the header

    const headerContainer = document.querySelector('.header-container');
    let menu = new Header();
    headerContainer.appendChild(menu);
});//closes the window load