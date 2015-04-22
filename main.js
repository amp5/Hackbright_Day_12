
    var WORDS     = ["booger", "apple", "hackbright", "mango"];
    var SCRAMBLED = ["oogreb", "papel", "backrhight", "goman"];

    var playing = true;


    while (playing) {

        // Grab a random word from the WORDS array

        function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
        }

        var randomIndex = getRandomInt(0,WORDS.length);

        var selectedWord = WORDS[randomIndex];

        // Grab the corresponding scrambled word from the SCRAMBLED array

        function scrambledWord(string) {
            var a = string.split(""),
            n = a.length;

            for (var i = n - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
            return a.join("");
        }

        // prompt the user to guess the original word when given the scrambled word
        var guess = prompt("Guess the original word for " + scrambledWord(selectedWord));
        var fixedGuess = guess.toLowerCase().trim();
       

        // If the user guesses wrong, tell them they were wrong and the right word.
        try{

            if (fixedGuess !== selectedWord){
                alert("Nope! The right word is " + selectedWord);
                throw error;
            }
        }

        catch(error){
            playing = confirm("Press OK To keep playing or Cancel to quit");
        }
        
        // If the user guesses the correct word, congratulate them.
        
        if (fixedGuess === selectedWord){
            alert("Yay!");
            playing = false;
        }

        // What does confirm() return?
        // true if you click ok, false if you click cancel
        // What does setting the playing variable do?
    }

    alert("goodbye!");


