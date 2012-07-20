
A small collection of Javascript browser bookmarklets.

I can't convince GitHub's Markdown parser to include the links here for
dragging. Each `.js` file has the bookmarklet on line 1.

## count\_instapapers ##

Counts the number of items on the currently displayed page at instapaper.com.

I wrote this because I found myself frequently counting the number of items in
my Read Later folder, which was sent to my Kindle weekly in batches of 20
or fewer articles.

## goodreads\_amazon\_lookup ##

Get the ASIN from an Amazon URL and look it up on goodreads.com.

The ASIN is what Goodreads uses for Kindle editions, so it should work
reliably for those.

As far as I can tell, Amazon uses a book's ISBN as its ASIN in the case of
print books. So far in my testing, this bookmarklet works for print books as
well. YMMV.

## shorten\_amazon\_url ##

Do you find Amazon's product page URLs ridiculously long? They're a pain to
paste into an IM window or an email. For most product pages, a much shorter
version can be used. For instance, you can turn this:

	http://www.amazon.com/gp/product/014311638X/ref=s9_simh_gw_p14_i1?
    pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-2&pf_rd_r=1V6X9CF9300FXVK16QJY&
    pf_rd_t=101&pf_rd_p=470938631&amp;pf_rd_i=507846

into this:

	http://www.amazon.com/gp/product/014311638X

When you're on an Amazon product page and want to shorten the URL, click the
bookmarklet. You'll be taken to the same page, but with a shorter URL.

## translate\_youtube\_mobile ##

I run into this issue a lot: I get to a YouTube mobile page on my iPhone, and
not wanting to view the video that moment, I save it to Instapaper. But when
I go back to view it, it doesn't work. I get a generic YouTube Mobile page.

I noticed that the video ID is embedded in the URL. The browser just doesn't
want to see it for some reason. Luckily, Javascript can fix that.

When you encounter a YouTube Mobile page that shows up as a generic "front
page", click the bookmarklet, and it should load the original video you had
saved.

