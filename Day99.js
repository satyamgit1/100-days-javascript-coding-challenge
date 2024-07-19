//* Write a JavaScript code for adding new elements dynamically.

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>

<body>
    <button onclick="create()">
        Click Here!
    </button>

    <script>
        function create() {
            let geeks = document.createElement('geeks');
            geeks.textContent = "Geeksforgeeks";
            geeks.setAttribute('class', 'note');
            document.body.appendChild(geeks);
        }
    </script>
</body>
</html>

