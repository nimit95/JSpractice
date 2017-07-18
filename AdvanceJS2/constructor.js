/**
 * Created by nimit on 18/7/17.
 */


/// this refers to new scope when new is used, In Js this is scope from which fn is called
/// when calling function fruit(without new) it takes scope of the window. As the calling scope is window
function fruit(name, origin) {
    this.name = name;
    this.origin = origin;
}

var f = new fruit('mango', 'UP');

/// if return is function then new doesnt work and the fn returns the function. advised not to use return in constructor calls