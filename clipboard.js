$("#copy-button").zclip({
    path: "js/ZeroClipboard.swf",
    copy: function(){
	return $("#text-to-copy").val();
	}
});
