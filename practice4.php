<?php
$size = intval($_POST['size']);
echo "<table border='1'>";
echo "<tr>";
echo "<th></th>";
for ($i=1; $i< $size + 1; $i++){
    echo "<th>" . $i . "</th>";
}
echo "<tr>";

for ($i = 1; $i < $size + 1; $i++) {
    echo "<tr>";
    echo "<th>" . $i . "</th>";
    for ($j = 1; $j < $size + 1; $j++) {
            echo "<td>" . ($i*$j) . "</td>";
    }
    echo "</tr>";

}
echo "</table>";
?>





