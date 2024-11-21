# Text Predictor

This app predicts next possble words in a sentance as you type based on the existing language sample available.
This can be easily integrated into any other app to provide this finctionality.

### How to run?

It is simple client side javascript app, you can point server document root to the folder and open in browser. It will not work if directly opened the index.html in browser directly since browsers do not allow fetch access over file protocol so it is necessary to run behind server

### Output Examples

| Input         | Predictions 1 | Predictions 2  | Predictions 3 | Predictions 4 | Predictions 5 |
| ------------- |:-------------:| --------------:| ------------- |:-------------:| -------------:|
| I             | dont          | know           | have          | was           | am            |
| You           | know          | think          | to            | want          | were          |
| Spare         | me            | time           | a             | change        | us            |
| Stop          | it            | the            | at            | me            | him           |
| Wait          | a             | for            | here          | till          | i             |

###### Sources

This app uses movie dialogue texts to analyze and predict words. The sample movie lines are takes from publicly available source (https://www.cs.cornell.edu/~cristian/Cornell_Movie-Dialogs_Corpus.html)

