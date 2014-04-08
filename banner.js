//Retreiving Cookies
function getCookie(c_name)
{
    if (document.cookie.length > 0)
    {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1)
        {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return null;
}

//Setting Cookies
function setCookie(name, value, expires, path, domain, secure)
{
    var today = new Date();
    today.setTime(today.getTime());
    if (expires)
    {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + "=" + escape(value) +
    ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
    ((path) ? ";path=" + path: "") +
    ((domain) ? ";domain=" + domain: "") +
    ((secure) ? ";secure": "");
}

function createmessage(htmlStr) {
	var frag = document.createDocumentFragment(),
		temp = document.createElement('div');
	temp.innerHTML = htmlStr;
	while (temp.firstChild) {
		frag.appendChild(temp.firstChild);
	}
	return frag;
}

var fragment = createmessage('<style type="text/css">a#heartbleed_x:hover { color: #666666;} #heartbleed_message a:hover {color: #2c8315;}</style><div id="heartbleed_message" style="background-color: #dff0d8; border: 1px solid #d6e9c6; box-sizing: border-box; width: 100%; padding: 20px; position: relative; text-align: left;"><h4 style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal; text-shadow: none; color: #3c763d; margin: 0 50px 0 0; width: 80%;">This site has been tested and is <span style="font-weight: bold;">not affected</span> by the Heartbleed bug. <a href="http://heartbleed.com/" target="_blank" style="color: #2c8315; text-decoration: underline; text-shadow: none;">Learn more</a>, <a href="http://ssllabs.com/ssltest/analyze.html?d=' + window.location.hostname + '" target="_blank" style="color: #2c8315; text-decoration: underline; text-shadow: none;">check this site</a>, or <a id="heartbleed_close" href="#" onclick="mydiv = document.getElementById(\'heartbleed_message\');mydiv.parentNode.removeChild(mydiv);return false;" style="color: #2c8315; text-decoration: underline; text-shadow: none;">close this</a>.</h4> <a id="heartbleed_x" href="#" onclick="mydiv = document.getElementById(\'heartbleed_message\');mydiv.parentNode.removeChild(mydiv);return false;" style="color: #aaaaaa; font-weight: normal; font-size: 24px; text-decoration: none; text-shadow: none; position: absolute; right: 25px; top: 15px">x</a><div class="clear" style="clear: both;"></div></div>');


if(getCookie('display_heartbleed_message')){
	//do nothing, message has been seen
} else {
	document.body.insertBefore(fragment, document.body.childNodes[0]);
	setCookie('display_heartbleed_message', 'true', 7, '/', '', '');
}
