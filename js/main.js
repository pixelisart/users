var MYAPP = (function(nsp){
    'use strict';

    var loadJSON = function(path){
        var jsonObj;
        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");

        xobj.open("GET", path);

        xobj.onreadystatechange = function(){
            if(xobj.readyState === 4){
                jsonObj = JSON.parse(xobj.responseText);
                //console.log(jsonObj);
                parseData(jsonObj);
            }
        };

        xobj.send(null);
    },
    parseData = function(jsonObj){
        var i, userData = '';
        var users = document.getElementById('users');

        for(i = 0; i < jsonObj.length; i++){
            // userData += '<div class="col-lg-6">' +
            //                 '<h3>' + jsonObj[i].name + '</h3>' +
            //                 '<address>' +
            //                     '<strong>' + jsonObj[i].company.name + '</strong><br />' +
            //                     jsonObj[i].address.street + ', ' + jsonObj[i].address.suite + '<br />' +
            //                     jsonObj[i].address.city + ', ' + jsonObj[i].address.zipcode + '<br />' +
            //                     '<abbr title="Phone">Phone:</abbr> ' + jsonObj[i].phone + '<br />' +
            //                     '<abbr title="Email">Email:</abbr> ' + jsonObj[i].email + '<br />' +
            //                     '<abbr title="Website">Website:</abbr> ' + jsonObj[i].website + '<br />' +
            //                 '</address>' +
            //             '</div>';

            jsonObj[i] = new User(jsonObj[i]);
        }
        console.log(jsonObj);
        users.innerHTML = userData;
    },
    init = function(){
        loadJSON("https://jsonplaceholder.typicode.com/users");
    },
    domReady = function(func){
        document.addEventListener("DOMContentLoaded", function(){
            if(typeof func === "function"){
                func();
            }
        }, false);
    };

    var User = function(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.address = obj.address;
        this.phone = obj.phone;
        this.website = obj.website;
        this.company = obj.company;
    };


    domReady(init());
    
    return nsp;


})(MYAPP || {});