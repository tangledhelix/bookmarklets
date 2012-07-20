// javascript:var%20prefix%20=%20%27http://www.goodreads.com/search/search?search_type=books&search%5Bquery%5D=%27;var%20url%20=%20document.location.href;var%20dp_re%20=%20/\/dp\//;var%20gp_re%20=%20/\/gp\/product\//;if%20(%20dp_re.test(%20url%20)%20)%20{location%20=%20url.replace(%20/^http:\/\/[^\/]+.*\/dp\/([^\/]+)\/.*$/,%20prefix%20+%20%22$1%22%20);}%20else%20if%20(%20gp_re.test(%20url%20)%20)%20{location%20=%20url.replace(%20/^http:\/\/[^\/]+.*\/gp\/product\/([^\/]+)\/.*$/,%20prefix%20+%20%22$1%22%20);}%20else%20{alert(%20%27Unrecognized%20URL%20format%27%20);}

var prefix = 'http://www.goodreads.com/search/search?search_type=books&search%5Bquery%5D=';

var url = document.location.href;

var dp_re = /\/dp\//;
var gp_re = /\/gp\/product\//;

if (dp_re.test(url)) {
  location = url.replace(/^http:\/\/[^\/]+.*\/dp\/([^\/]+)\/.*$/, prefix + "$1");
} else if (gp_re.test(url)) {
  location = url.replace(/^http:\/\/[^\/]+.*\/gp\/product\/([^\/]+)\/.*$/, prefix + "$1");
} else {
  alert('Unrecognized URL format');
}

