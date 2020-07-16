<?php
if (isset($_GET["href"]) && isset($_GET["highlight"])) {
    header("Content-Type:image/svg+xml");
    $img = file_get_contents('https://gh-card.dev/repos/' . $_GET["href"] . ".svg?link_target=_top");

    $bg = "#444444";
    $title = "#eeeeee";
    $lang = "#dddddd";
    $border = "#222222";

    $img = str_replace('#ffffff', $bg, $img);
    $img = str_replace('#586069', $title, $img);
    $img = str_replace('#24292e', $lang, $img);
    $img = str_replace('#eaecef', $border, $img);
    $img = str_replace('#0366d6', '#'.$_GET["highlight"], $img);

    echo $img;
} else {
    header("Content-Type:text/plain");
    die("No repository [href] or colour [highlight] specified in GET request.");
}
?>