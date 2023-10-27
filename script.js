//your JS code here. If required.
// Data for the articles
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to remove common words and sort the articles
function stripArticleTitle(title) {
    return title.replace(/^(a |an |the )/i, '').trim();
}

bands.sort((a, b) => stripArticleTitle(a) > stripArticleTitle(b) ? 1 : -1);

const bandList = document.getElementById('band');

bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});

