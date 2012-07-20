// javascript:var%20url%20=%20document.location.href;var%20dp_re%20=%20/\/dp\//;var%20gp_re%20=%20/\/gp\/product\//;if%20(%20dp_re.test(%20url%20)%20)%20{location%20=%20url.replace(%20/^(http:\/\/[^\/]+).*(\/dp\/[^\/]+)\/.*$/,%20%22$1$2%22%20);}%20else%20if%20(%20gp_re.test(%20url%20)%20)%20{location%20=%20url.replace(%20/^(http:\/\/[^\/]+).*(\/gp\/product\/[^\/]+)\/.*$/,%20%22$1$2%22%20);}%20else%20{alert(%20%27Unrecognized%20URL%20format%27%20);}

var url = document.location.href;

var dp_re = /\/dp\//;
var gp_re = /\/gp\/product\//;

if (dp_re.test(url)) {
  location = url.replace(/^(http:\/\/[^\/]+).*(\/dp\/[^\/]+)\/.*$/, "$1$2");
} else if (gp_re.test(url)) {
  location = url.replace(/^(http:\/\/[^\/]+).*(\/gp\/product\/[^\/]+)\/.*$/, "$1$2");
} else {
  alert('Unrecognized URL format');
}

