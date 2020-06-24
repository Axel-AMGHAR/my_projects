<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-gray-200">
<style>
    .rounded-tl-xl{
        border-top-left-radius: 2rem;
    }
    .rounded-br-xl{
        border-bottom-right-radius: 2rem;
    }
</style>
<div class="h-screen flex items-center justify-center">
    <div class="font-extrabold" style="transform: skewX(-10deg);">
        <div class="rounded-tl-xl py-4 px-8 bg-green-900 text-5xl leading-none">
            <h1 class="text-white ml-1">SUMMER 2020</h1>
            <h1 class="text-green-300">SUMMER 2020 - 25</h1>
        </div>
        <span class="text-3xl">
            <div class="flex flex-row justify-around bg-green-600 py-4 px-8">
                <div class="mr-16">
                    <h2 class="text-white">RECORD PERSONNEL</h2>
                    <img class="w-20 m-auto mt-4" style="transform: skewX(10deg);" src="{{asset('img/medal.png')}}" alt="">
                </div>
                <div class="flex flex-col items-end">
                    <h2 class="text-white p-1 pt-0">01:02.654</h2>
                    <h2 class="text-white bg-green-400 px-2">-00:03.456</h2>
                    <h2 class="text-green-200 p-1">TOP 9 <span class="font-normal">WORLD</span></h2>
                </div>
            </div>
            <div class="text-center divide-y-2 divide-green-400">
                <div class="opacity-75 text-green-400 bg-green-600 hover:opacity-100 hover:cursor-pointer hover:bg-white hover:text-green-900 py-1">AMELIORER</div>
                <div class="opacity-75 text-green-400 bg-green-600 hover:opacity-100 hover:cursor-pointer hover:bg-white hover:text-green-900 py-1">CHOSIR LES ADVERSAIRES</div>
                <div class="opacity-75 text-green-400 bg-green-600 hover:opacity-100 hover:cursor-pointer hover:bg-white hover:text-green-900 py-1 rounded-br-xl">SAUVEGARDER LE REPLAY</div>
            </div>
            </span>
    </div>
</div>
</body>
</html>