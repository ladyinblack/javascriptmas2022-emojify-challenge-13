// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Emojify!</h1>`;

/**
 * Popular services like Slack and Github allow for emoji shortcodes, meaning they will detect when a word in a sentence begins and ends with a colon (:) and automatically replace that word with an emoji.
 *
 * These shortcodes allow users to add an emoji to their messages by typing a code rather than searching for an emoji from a list.
 *
 * For example, typing :smile: will replace that text with 😊
 */
const emojis = {
  smile: '😊',
  angry: '😠',
  party: '🎉',
  heart: '💜',
  cat: '🐱',
  dog: '🐕',
};

/**
 * 1. Write a function that checks if a lowercase word starts and ends with a colon.  If it does, remove the colons and look up the word in the emoji object.  If the word is in the emojis object, return the corresponding emoji.
 * If it isn't, return the original word.
 *
 * Example input: ":party:"
 * Example output: 🎉
 *
 * Exapmle input: ":flower:"
 * Example output: "flower"
 *
 * Example input: "elephant"
 * Example output: "elephant"
 */
function emojifyWord(word) {
  if (word.startsWith(':') && word.endsWith(':')) {
    let searchWord = word.slice(word.indexOf(':') + 1, word.lastIndexOf(':'));
    // console.log(Object.keys(emojis));
    for (let i = 0; i < Object.keys(emojis).length; i++) {
      let found = Object.keys(emojis).includes(searchWord);
      if (found) {
        return emojis[searchWord];
      } else {
        return searchWord;
      }
    }
  } else {
    return word;
  }
}

/**
 * 2. Write a function to find any emoji shortcodes in a phrase.
 * Your function should map over each word in the phrase, emojify any word that begins and ends with a colon, then return the emojified phrase.  Feel free to use your emojify function from the previous exercise!
 *
 * Example input: "I :heart: my :cat:"
 * Example output: "I 💜 my 🐱"
 *
 * Example input: "I :heart: my elephant"
 * Example output: "I 💜 my elephant"
 */
function emojifyPhrase(phrase) {
  const newPhrase = phrase.split(' ');
  const retPhrase = newPhrase.map((p) => {
    return emojifyWord(p);
  });
  // for (let i = 0; i < newPhrase.length; i++) {
  //   if (newPhrase[i].startsWith(':') && newPhrase[i].endsWith(':')) {
  //     emojifyWord(newPhrase[i]);
  //   }
  // }
  return retPhrase.join(' ');
}

/**
 * HINTS:
 * To check for colons in a word, use startsWith() and endsWith().
 * Use slice() to trim the colons from the word so you can use it to look up emojis in the emojis object.
 * To check each word in a phrase for emoji short codes, split() the phrase into an array and loop through it.
 */

console.log(emojifyWord(':heart:'));
console.log(emojifyWord(':smile:'));
console.log(emojifyWord(':flower:'));
console.log(emojifyWord('elephant'));

console.log(emojifyPhrase('I :heart: my :cat:'));
console.log(emojifyPhrase('I :heart: my :elephant:'));
