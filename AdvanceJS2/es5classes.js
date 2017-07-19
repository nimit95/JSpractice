/**
 * Created by nimit on 19/7/17.
 */

/*
    this can refer to two things in JS context and as well as scope(in case of new) depending upon the
    usage.

    Here a function Person is made, which takes in two parameters firstname and lastname.

    So using a new operator Person is defined and assigned to a variable p.

    P is created in a new scope(bc of new operator), so in this case this(JS) refers to new scope.
    The variables defined using this are becomes keys for the new scope. And a refrence to this scope
    is returned by new operator.

    function or var are in the local scope. Due to closure property they are available to the functions
    defined in Person.

    public functions can call any private function through their name due to closure and local scope.
    when it calls public functions or variable it needs this. 'this' in this case would refer to object
    from which function is called.

    Eg p object would have a function getInitials, so to call it current p context is used with help of
    this. Here this works as normal context.

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