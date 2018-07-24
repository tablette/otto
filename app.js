new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        title: "otto",
        tagline: "make finding content easy",
        apology: "Sorry, we haven't learned that trick yet.",
        username: 'Username',
        password: 'Password',
        name: 'User Userson',
        numberOfLabels: 0,
        url: 'https://www.iainstitute.org/what-is-ia',
        classes: ['one', 'two']
    },
    methods: {
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
            return `Hello and good ${tod} to you!`
        },
        changeNumberOfLabels(number) {
            this.numberOfLabels += number
            if (this.numberOfLabels < 0) {
                alert("That's not possible.")
                this.numberOfLabels = 0;
            }
        },
        confirm(){
            alert(`Got it! You have ${this.numberOfLabels} labels.`) // instead, append to DOM if button clicked
            
        }
    }
})