new Vue({ // note is or looks like object
    el: '#app', // element / just a css selector
    data: {
        tagline: 'help users sniff out the content they need',
        name: 'User Userson',
        username: 'Username',
        password: 'Password',
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
            return `Hello and good ${tod} to you, dear ${this.name}!`
        }
    }
})