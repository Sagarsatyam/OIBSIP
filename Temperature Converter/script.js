function convertTemperature() {
    var degree = parseFloat(document.getElementById("degree").value);
    var unit = document.getElementById("unit").value;

    var result;
    if (unit === "fahrenheit") {
        result = (degree * 9/5) + 32; 
    } else {
        result = (degree - 32) * 5/9; 
    }

    // Display the result
    document.getElementById("result").value = result.toFixed(2);
}