var Friends = {

    toggleStatus : (friend) => {
        console.log(friend);
        if (Friends[friend] === false || Friends[friend] === undefined) {
            Friends[friend] = true;
        } else {
            Friends[friend] = false;
        }
        
    }

};