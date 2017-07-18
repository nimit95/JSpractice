/**
 * Created by nimit on 19/7/17.
 */
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    function getFullName(){
        return firstname + ' ' + lastname;
    }

    this.getName = function() {
        return getFullName() + "(" + this.getInitials() +")";
    };

    this.getInitials = function () {
        return firstname.charAt(0)+". " + lastname.charAt(0) + '.';
    }
}

var p = new Person('Nimit','Aggarwal');