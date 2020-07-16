<?php
$updatecache = 60 * 15;

// echo "hello <br />";
function printFile()
{
    // echo "printing file";
    header("Content-Type: application/json");
    echo file_get_contents('repos.json');
}
function downloadUrlToFile($url, $outFileName)
{
    if (is_file($url)) {
        copy($url, $outFileName);
    } else {
        $options = array(
            CURLOPT_FILE => fopen($outFileName, 'w'),
            CURLOPT_TIMEOUT => 28800, // set this to 8 hours so we dont timeout on big files
            CURLOPT_URL => $url,
            CURLOPT_USERAGENT => "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/22.0.1216.0 Safari/537.2",
        );

        $ch = curl_init();
        curl_setopt_array($ch, $options);
        curl_exec($ch);
        curl_close($ch);
    }
}
function dlFile()
{
    // echo "downloading file";
    if (file_exists('repos.json')) {
        unlink('repos.json');
    }
    downloadUrlToFile("https://api.github.com/users/Luigi-Pizzolito/repos", "repos.json");
    printFile();
    // file_put_contents('repos.json', fopen("https://api.github.com/users/Luigi-Pizzolito/repos", 'r'));
    // set_time_limit(0);
    // $file = file_get_contents("https://api.github.com/users/Luigi-Pizzolito/repos");
    // file_put_contents('repos.json', $file);

    //copy("https://api.github.com/users/Luigi-Pizzolito/repos", 'repos.json');
}

if (file_exists('repos.json')) {
    $filesaved = filemtime('repos.json');
    $now = time();
    $difft = ($now - $filesaved);
    // echo "repos.json was last modified: " . $filesaved . "<br />";
    // echo "current time is" . $now . "<br />";
    // echo "time dif is" . $difft . "<br />";
    // echo "thres is " . $updatecache . "<br />";
    // echo "update: " . ($difft > $updatecache) . "<br />" . "<br />";
    //check the milk
    if ($difft > $updatecache) {
        // expired
        // echo "updating old cache" . "<br />";
        dlFile();
        // printFile();
    } else {
        // still fresh
        // echo "file exists" . "<br />";
        printFile();
        
    }
} else {
    dlFile();
}
