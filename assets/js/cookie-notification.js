function add_cookie_notification(){
    const notification_texts = [
    ["this website uses cookies", "h1"],
    ["click anywhere to close this message", "h5"]
    ];

    const notification_div = document.createElement("div")
    for(i=0;i<notification_texts.length;i++){
        notification_div.appendChild(document.createElement(notification_texts[i][1]));
        notification_div.children[i].appendChild(document.createTextNode(notification_texts[i][0]));
    }

    notification_div.classList.add("cookie-notification");
    notification_div.style.width = window.innerWidth;

    document.body.appendChild(notification_div);
}

function check_show_cookies_notification(){
    //show notification if cookie not present
    if(getCookie("cookie_notification_closed") == undefined){
        add_cookie_notification()
        return true
    }
    else{//don't show
        console.log(getCookie("cookie_notification_closed"))
        return false
    }
}

// returns the cookie with the given name,
// or undefined if not found
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    
function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        // add other defaults here if necessary
        ...options
        };
        
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
      }
    }
    
    document.cookie = updatedCookie;
}

function set_notification_cookie(){
    setCookie("cookie_notification_closed", "1", {"max-age":31536000});//cookie expires in one year
    const notification_div = document.getElementsByClassName("cookie-notification")[0];
    notification_div.style.display = "none"
}

const notification = check_show_cookies_notification();
if(notification){
    document.addEventListener('click', set_notification_cookie);
}