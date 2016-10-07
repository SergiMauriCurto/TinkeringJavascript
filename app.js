var showFullName = function(sn1) {
    console.log (this.firstName + " " + this.sn1 + " " +)
}

var person = {

    firstName :"Sergi",
    sn1 :"Mauri",

    var person = {
        firstNAme: name,
        sn1: 'Mauri,'
        fullname: showFullName
    };

person.showFullName ();

showFullName();

var copiaShowFullName = showFullName.bind(person);

copiaShowFullName();

showFullName.call(person, 'Curto')

