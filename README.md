# Wikipedia Viewer Using PHP

## Description

This example shows how to get the Wikipedia content via the [MediaWiki action API](https://www.mediawiki.org/wiki/API:Main_page) using PHP. The output data in [JSONP](https://en.wikipedia.org/wiki/JSONP) format contains several information such as **page id**, **page title** and **extract** which are parsed and used to form a list which user can click to open the corresponding Wikipedia page. It also makes use of [Special:Random](https://www.mediawiki.org/wiki/Manual:Random_page) to randomly bring user to a random page.

Similar idea but using jQuery can be found at https://github.com/lengieng/wikipedia-viewer-jquery

## Prerequisite

This example requires the following libraries:

1. [jQuery](https://code.jquery.com/jquery-2.2.2.min.js)
2. Bootstrap 3.3.6 [css](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css) and [js](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js)
3. [PHP](http://php.net/downloads.php) >= 5.6.*

## License & Authors

**Author:** Lengieng Ing (ing.lengieng@gmail.com)

This software is distributed under the MIT license. Please see the attached file called LICENSE.txt.