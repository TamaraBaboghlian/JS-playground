var John = {
    name: 'John',
    job: 'painter',
    activeFrom: 2015,
    calculateExperience: function() {
        console.log(this);
        console.log((new Date()).getFullYear() - this.activeFrom);
        function innerFunc() {
            console.log(this)  // Oops global!!
        }
        innerFunc();
    }
}

John.calculateExperience();

var Mark = {
    name: 'Mark',
    activeFrom: 2010
}

Mark.calculateExperience = John.calculateExperience;

Mark.calculateExperience();