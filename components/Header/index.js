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

function Header() {

    const headerContainer = document.querySelector('.header-container')[0];
    const header = document.createElement ('div');
    const headerDate = document.createElement ('span');
    const headerTitle = document.createElement ('h1');
    const headerTemp = document.createElement ('span');

    headerContainer.appendChild(header);
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    headerDate.textContent = ${date};
    headerTitle.textContent = ${title};
    headerTemp.textContent = ${temp};

    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    return header;






}
