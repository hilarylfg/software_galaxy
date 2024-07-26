<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script>
        function createStars() {
            let bgBlack = document.getElementById("bg");
            const baseStars = 1500;

            for (let i = 0; i < baseStars; i++) {
                let star = document.createElement("div");
                star.className = "star";
                star.style.top = Math.random() * 99.8 + "%";
                star.style.left = Math.random() * 99.8 + "%";

                let size = Math.random() * 3 + "px";
                star.style.width = size;
                star.style.height = size;

                star.style.opacity = Math.random();

                bgBlack.appendChild(star);
            }
        }
    </script>
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body id="bg" class="wrapper" onload="createStars()">
    @inertia
</body>

</html>
