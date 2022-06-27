<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title') - {{ config('app.name') }}</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles -->
    @include('admin.partials.styles')
    @yield('styles')
    <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
</head>
<body class="app sidebar-mini rtl">
    @include('admin.partials.header')
    @include('admin.partials.sidebar')
    <main class="app-content" id="app">
        @yield('content')
    </main>
    <!-- Scripts -->
    @include('admin.partials.scripts')
    @stack('scripts')
</body>
</html>
