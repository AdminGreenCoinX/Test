/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
     app.receivedEvent('deviceready');
					app.contactCreate();
					app.contactFind();
				},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
				contactCreate: function(){
		   var myContact = navigator.contacts.create({"displayName": "Test User"});
     myContact.note = "This contact has a note.";
     console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
					 var contact = navigator.contacts.create();
        contact.displayName = "Plumber";
        contact.nickname = "Plumber";                 // specify both to support all devices
        var name = new ContactName();
        name.givenName = "Jane";
        name.familyName = "Doe";
        contact.name = name;

        // save
        contact.save(onSaveSuccess,onSaveError);

        // clone
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);

				},
				contactFind: function(){
					var options = new ContactFindOptions();
					options.filter = "";
					options.multiple = true;
					var fields = ["*"];
					navigator.contacts.find(fields, onSuccess, onError, options);
				},
};
function onSuccess(contacts) {
	for (var i = 0; i < contacts.length; i++) {
					alert("Display Name = " + contacts[i].displayName);
	}
}
function onError(contactError) {
 alert('onError!');
}
 function onSaveSuccess(contact) {
        alert("Save Success");
    }

    // onSaveError: Failed to get the contacts
    //
    function onSaveError(contactError) {
        alert("Error = " + contactError.code);
    }


app.initialize();