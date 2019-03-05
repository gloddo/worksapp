$(document).ready(() => {
	$(".chat").scrollTop(100000)

	$("#menu-btn").on("click", () => {
		$("aside").toggle();
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


	function logout () { 
      firebase.auth().signOut().then(function() {
      alert('logout effettuato')
    }).catch(function(error) {
      // An error happened
      alert('errore')
      })
    }