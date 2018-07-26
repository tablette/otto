new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: "otto",
        tagline: "make finding content easy",
        apology: `Sorry, we haven't learned that trick yet.`, // add html elements - include link to top
        username: 'Username',
        password: 'Password',
        nameF: 'First Name',
        nameL: 'Last Name',
        numberOfLabels: 0,
        top: '#app',
        backToCreate: '#create',
        url: 'https://www.iainstitute.org/what-is-ia',
        classes: ['one', 'two'],
        coords: {
            x: 0,
            y: 0
        },
        includesCategories: false,
        doesNotIncludeCategories: true
    },
    methods: {
        // for greeting on landing
        greet(){
            let date = new Date();
            let hour = date.getHours();
            if (hour < 12) {
                tod = 'morning';
            } else if (hour < 18) {
                tod = 'afternoon';
            } else {
                tod = 'evening';
            }
            return `Good ${tod}! Let's go.`
        },
        // for typein - play with v-on click
        changeNumberOfLabels(number) {
            this.numberOfLabels += number
            if (this.numberOfLabels < 0) {
                alert("That's not possible.")
                this.numberOfLabels = 0;
            }
        },
        // for typein - play with v-on dblclick
        confirm(){
            alert(`Got it! You have ${this.numberOfLabels} labels.`) // instead, append to DOM if button clicked
        },
        // just for quick access to ready-made event properties
        logEvent(e){ // e = optional parameter: event object - call whatever you want e.g. e OR evt OR event
            console.log(e);
        },
        // for typein - play with v-if
        toggleY(){
            this.includesCategories = true
        },
        toggleN(){
            this.includesCategories = false
        },
        // for game to play with event properties offsetX and offsetY (positioning)
        logCoords(e){
            this.coords.x = e.offsetX // not this.data.coords.x, not this.x
            this.coords.y = e.offsetY
            if (this.coords.y === 150 && this.coords.y === 150) {
                alert("Congrats you found the exact middle!") // prevent execution before timer is started
            }
        },
        // for game - indirectly - passed as argument to startTimer below
        timesUp(){
            alert("Time's up!");
        },
        // for game to tell user when time is up
        startTimer(){
            setTimeout(this.timesUp, 3000); // stop execution if game is won
        }
    }
})