let verbDict = [];

// Load sample text to use for predections
// Larger the sample file, better the predictions
fetch('movie_lines.txt')
  .then(response => response.text())
  .then((data) => {
    // Split text into lines and split again for words
    // verbDict will be array of line items, each line item itself will be array of words in it
    let sentances = data.split(/\r?\n/);
    sentances.forEach((val) => {
      verbDict.push(val.toLowerCase().replace(/[^a-zA-Z ]/g,'').split(' '));
    })
  })


/**
 * Function to predict next word in sentance based on the current word
 * 
 * @param {*} word 
 * 
 */
function predictNext(word) {
  // Only take the last word from the input passed (incase of full text input)
  word = word.replace(/[^a-zA-Z ]/g,'').trim().split(" ").pop();

  let matchDict = [];
  let iterCount = 0;

  // Loop through verbDict to find word match and take the next word from that sentance as prediction
  word && verbDict.forEach((val, index) => {
    let isMatch = val.indexOf(word.toLowerCase());
    if (isMatch >= 0 && iterCount < 500) {

      // Limit iteration to 500 count since common words like (the, you) will be having high 
      // occurance and can slow down the predection
      iterCount++;
      let match = val[isMatch + 1];  // next word

      // Check if match is already found in previous iteration
      filter = matchDict.filter((ele) => { return ele.match == match});
      if (filter.length > 0) {

        // Add score to repeating matches having high probability
        let matchIndex = matchDict.findIndex((ele) => { return ele.match == match});
        matchDict[matchIndex].score++;
      } else {
        if (match) {
          matchDict.push({"match" : match, "score" : 1});
        }
      }
    }
  })

  // sort matches based on the score
  sortedMatch = matchDict.sort((a, b) => b.score - a.score);

  // Append result in the html
  document.getElementById('firstPredict').innerHTML 
    = sortedMatch[0] ? sortedMatch[0].match + ' <br>score:' + sortedMatch[0].score : '';
  document.getElementById('secondPredict').innerHTML 
    = sortedMatch[1] ? sortedMatch[1].match  + ' <br>score:' + sortedMatch[1].score : '';
  document.getElementById('thirdPredict').innerHTML 
    = sortedMatch[2] ? sortedMatch[2].match  + ' <br>score:' + sortedMatch[2].score : '';
  document.getElementById('fourthPredict').innerHTML 
    = sortedMatch[3] ? sortedMatch[3].match  + ' <br>score:' + sortedMatch[3].score : '';
  document.getElementById('fifthPredict').innerHTML 
    = sortedMatch[4] ? sortedMatch[4].match  + ' <br>score:' + sortedMatch[4].score : '';
}

