<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect value of input field
    $networkID = htmlspecialchars($_POST['networkID']);
    
    // Save the data to a file
    $file = 'data.txt';  // File where data will be saved
    file_put_contents($file, $networkID . PHP_EOL, FILE_APPEND | LOCK_EX);
    
    // Redirect or give a success message
    echo "Network ID saved! <a href='index.html'>Go back</a>";
} else {
    echo "Invalid request method.";
}
?>
