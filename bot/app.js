let dictionaryData;
const searchBox = document.getElementById('search-box');
const displayArea = document.getElementById('word-container');
const suggestionsContainer = document.getElementById('suggestions-container');

fetch('dic/phrase.json')
  .then(response => response.json())
  .then(data => {
    dictionaryData = data;
  });

searchBox.addEventListener('keyup', event => {
  const query = event.target.value.toLowerCase();
  const suggestions = getMatchingWords(query);

  if (suggestions.length > 0) {
    suggestionsContainer.innerHTML = '';
    suggestions.forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.classList.add('suggestion');
      suggestionElement.textContent = suggestion;
      suggestionElement.addEventListener('click', () => {
        searchBox.value = suggestion;
        suggestionsContainer.innerHTML = '';
        displayWord(suggestion);
      });
      suggestionsContainer.appendChild(suggestionElement);
    });
  } else {
    suggestionsContainer.innerHTML = '';
  }
});

function getMatchingWords(query) {
  const matches = [];
  for (const word in dictionaryData) {
    if (word.startsWith(query)) {
      matches.push(word);
    }
  }
  return matches;
}

function displayWord(word) {
    const wordData = dictionaryData[word];
    let html = '';
    html += `<h2>${word}</h2>`;
  
    if (wordData.descriptions && wordData.descriptions.length > 0) {
      html += '<h6>Definitions</h6>';
      html += '<ul>';
      wordData.descriptions.forEach(description => {
        html += `<li>${description}</li>`;
      });
      html += '</ul>';
    }
  
    if (wordData.examples && wordData.examples.length > 0) {
      html += '<h6>Examples</h6>';
      html += '<ul>';
      wordData.examples.forEach(examples => {
        html += `<li>${examples}</li>`;
      });
      html += '</ul>';
    }
  
    if (wordData.synonyms && wordData.synonyms.length > 0) {
      html += '<h6>Synonyms</h6>';
      html += '<ul class="mb-4 synonyms">';
      wordData.synonyms.forEach(synonyms => {
        html += `<li>${synonyms}</li>`;
      });
      html += '</ul>';
}
/*
if (wordData.translations) {
    html += '<h3>Translations</h3>';
    html += '<div class="translations">';
    for (const language in wordData.translations) {
      const translations = wordData.translations[language];
      if (Object.keys(translations).length > 0) {
        html += `<div class="translation"><h4>${language}</h4><ul>`;
        for (const translation of Object.keys(translations)) {
          html += `<li>${translation}: `;
          
          html += '</li>';
        }
        html += '</ul></div>';
      }
    }
    html += '</div>';
  }
  */
  displayArea.innerHTML=html;
}
