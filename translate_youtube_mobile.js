// javascript://url%20=%20document.location.href;re%20=%20/v%253D([^%25%26]+)/;if%20(%20re.test(%20url%20)%20)%20{location%20=%20%27http://youtube.com/watch?v=%27%20+%20RegExp.$1;}%20else%20{alert(%20%27Unrecognized%20URL%20format%27%20);}

// Example URLs I have seen:
//
// http://m.youtube.com/?/watch?desktop_uri=%2Fwatch%3Fv%3D43sbtkQM6zc&v=43sbtkQM6zc&gl=US
// http://m.youtube.com/#/watch?desktop_uri=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDX5GZ-MOD70&v=DX5GZ-MOD70&gl=US
// http://m.youtube.com/#/watch?xl=xl_blazer&v=gmT6gGpwmUU

// Use %25<hex> here. The %25 resolves to "%" so %252F becomes %2F
// in the final bookmarklet.

url = document.location.href;
// re = /v%253D([^%25%26]+)([%25%26]|$)/;
re = /v%253D([^%25%26]+)/;

if (re.test(url)) {
  location = 'http://youtube.com/watch?v=' + RegExp.$1;
} else {
  alert('Unrecognized URL format');
}

