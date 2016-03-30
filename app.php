<?php
/**
  * Perform wiki search through MediaWiki action API.
  *
  * @param string $what    The search string
  *
  * @return json object containing result if successful or
  *         error message & code if failed.
  */
function wikiSearch($what) {
    // Format: https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&utf8=1&exsentences=1&exlimit=max&exintro=1&explaintext=1&gsrnamespace=0&gsrlimit=10&gsrsearch=SEARCH-TEXT
    $url = 'http://en.wikipedia.org/w/api.php';            
    $url .= '?action=query&format=json&prop=extracts&generator=search';
    $url .= '&utf8=1&exsentences=1&exlimit=max&exintro=1&explaintext=1';
    $url .= '&gsrnamespace=0&gsrlimit=10&gsrsearch=' . urlencode($what);
    
    $options = array(
        CURLOPT_RETURNTRANSFER => true,   // return web page
        CURLOPT_HEADER         => false,  // don't return headers
        CURLOPT_FOLLOWLOCATION => true,   // follow redirects
        CURLOPT_USERAGENT      => $_SERVER['HTTP_USER_AGENT'], // name of client
        CURLOPT_SSL_VERIFYPEER => false,
    ); 

    $ch = curl_init($url);
    curl_setopt_array($ch, $options);

    $response = curl_exec($ch);
    if ($response === false) {
        throw new Exception('Curl error: ' . curl_error($ch));
    }
    curl_close($ch);
    return $response;
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $response = '';
    if (isset($_GET["what"]) && !empty($_GET["what"])) {
        try {
            $response = wikiSearch($_GET["what"]);
            echo $response;
        } catch (Exception $e) {
//            header('Content-Type: application/json');
            echo json_encode(array(
                    'error' => array(
                        'code' => $e->getCode(),
                        'message' => $e->getMessage()
                    )
            ));
        }
    } else {
        echo json_encode(array(
                'error' => array(
                    'code' => '',
                    'message' => 'Search text not found.'
                )
        ));
    }
}
?>