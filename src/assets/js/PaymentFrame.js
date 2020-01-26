function PaymentFrame(iframeElementId, iframeDomain, iframePath) {
	this.iframe = document.getElementById(iframeElementId);
	this.iframeDomain = iframeDomain;
	if (typeof iframePath !== 'undefined') {
		this.iframeUrl = iframeDomain + iframePath;
	} else {
		this.iframeUrl = iframeDomain + '/PaymentFrame';
	}
	this.paymentSubmittedCallback = null;
}

PaymentFrame.prototype = {
	
	setPaymentSubmittedCallback: function(callback) {
		this.paymentSubmittedCallback = callback;
	},
	
	request: function() {
		var iframeAttributes = Array.prototype.slice.call(this.iframe.attributes);
		var form = this.iframe.contentDocument.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", this.iframeUrl);
		this.iframe.contentDocument.body.appendChild(form);
		for (var i = 0; i < iframeAttributes.length; i++) {
			var attribute = iframeAttributes[i];
			var input;
			if (attribute.name.indexOf("data-hmac") !== 0) {
				continue;
			}
			input = this.iframe.contentDocument.createElement("input");
			input.setAttribute("type", "hidden");
			input.setAttribute("name", attribute.name.replace("data-", ""));
			input.setAttribute("value", attribute.value);
			form.appendChild(input);
		}
		
		window.addEventListener("message", (function(event) {
			var message;
			var origin = event.origin;

			if (origin !== this.iframeDomain && (origin + ':443') !== this.iframeDomain) {
				return;
			}
			
			message = JSON.parse(event.data);
			if (message.type === "height") {
				this.iframe.style.height = message.content + 'px';
			}
			if (message.type === "paymentSubmitted" && this.paymentSubmittedCallback !== null) {
				this.paymentSubmittedCallback(message.content);
			}
			if (message.type === "reload") {
				window.location.reload();
			}

		}).bind(this));
		
		form.submit();
	}
};