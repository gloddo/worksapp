// Initialize Firebase
var config = {
	apiKey: "AIzaSyDg7OV-1D2cuyUh1oaYFRuMTxqDiI7Zq1U",
	authDomain: "worksapp-born2code.firebaseapp.com",
	databaseURL: "https://worksapp-born2code.firebaseio.com",
	projectId: "worksapp-born2code",
	storageBucket: "worksapp-born2code.appspot.com",
	messagingSenderId: "752738389147"
}
firebase.initializeApp(config);

$(document).ready(() => {
	$(".chat").scrollTop(100000)

	$(".menu-button").click(function() {
		$("aside").toggle("slide");
	});

	$(".p-icon").click(function() {
		$("#block").toggle("slide", {
			direction: "down"
		});
	});

	$(".home").click(function() {
		$("#block").hide("slide", {
			direction: "down"
		});
	})
})


function sendMessage(event) {
	let c = 0;
	if (event.which == 13 && event.target.value) {
		c++
		var time = new Date().toLocaleTimeString('en-GB', {
			hour12: false,
			hour: "numeric",
			minute: "numeric"
		});
		var date = new Date().toLocaleDateString();
		$(".chat").append(
			`<article class="chat-row" id=s${c}>
        <span class="message">
          ${event.target.value}
        </span>
        <span class="message-date">
          <div class="line1">
            ${date}
          </div>
          <div class="line2">
            ${time}
          </div>
        </span>
      </article>`)
		event.target.value = ""
		$(".unseen").removeClass("unseen")
		//  $(".chat").scrollTop($(".chat")[0].scrollHeight)
		$(".chat").scrollTop(10000)
	}
}


function logout() {
	firebase.auth().signOut().then(function() {
		alert('logout effettuato')
	}).catch(function(error) {
		// An error happened
		alert('errore')
	})
}