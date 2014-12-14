/**
 * Created by arxxbx on 11/15/2014.
 */
var serviceModule=angular.module('app.serviceModule',[]);
serviceModule.service("ContactService", function() {
    var uid = 1;
    var contacts = [{
        id:"0",
        name: "Baiju",
        email:"hellow@email.com",
        phone:"123-456-7890"
    }];

    this.save=function(contact) {
        if(contact.id==null) {
            //current value of uid?, this will work since this is a test program and every time you
            // //start the program you end up with an empty list, in actual program
            //a service need to fetch a UID
            contact.id=uid++;
            contacts.push(contact);
        } else
        {
            for (i in contacts) {
                if(contacts[i].id==contact.id) {
                    contacts[i]=contact;
                }
            }
        }
    };
    this.get=function(id) {
        for(i in contacts) {
            if (contacts[i].id== id) {
                return contacts[i];
            }
        }
    };
    this.deleteContact=function(id) {
        for (i in contacts) {
            if (contacts[i].id==id) {
                contacts.splice(i,1)
            }
        }
    };
    this.list = function() {
        return contacts;
    };
});