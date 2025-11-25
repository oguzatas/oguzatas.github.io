<nav class="bg-white shadow-lg border-b border-innodra-green-100 sticky top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-20">
            <!-- Logo and Brand -->
            <div class="flex items-center space-x-4">
                <div class="w-12 h-12 relative">
                    <img src="/img/innodra-cube2.svg" alt="Innodra Solutions Logo" class="w-full h-full object-contain" loading="eager" />
                </div>
                <div class="flex flex-col">
                    <h1 class="text-2xl font-bold text-innodra-gray-900">INNODRA</h1>
                    <p class="text-sm text-innodra-green-600 font-medium tracking-wider">SOLUTIONS</p>
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="/" class="text-innodra-gray-700 hover:text-innodra-green-600 font-medium transition-colors duration-300 relative group">
                    Home
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-innodra-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/about" class="text-innodra-gray-700 hover:text-innodra-green-600 font-medium transition-colors duration-300 relative group">
                    About
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-innodra-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#services" class="text-innodra-gray-700 hover:text-innodra-green-600 font-medium transition-colors duration-300 relative group">
                    Services
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-innodra-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" class="text-innodra-gray-700 hover:text-innodra-green-600 font-medium transition-colors duration-300 relative group">
                    Contact
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-innodra-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>

            <!-- CTA Button -->
            <div class="hidden md:block">
                <a href="#contact" class="bg-innodra-green-500 hover:bg-innodra-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-innodra-green-500/25">
                    Get Started
                </a>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button class="text-innodra-gray-700 hover:text-innodra-green-600" onclick="toggleMobileMenu()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="hidden md:hidden pb-4">
            <div class="flex flex-col space-y-4">
                <a href="/" class="text-innodra-gray-700 hover:text-innodra-green-600 font-medium py-2 transition-colors duration-300">Home</a>
                <a href="/about" class="text-innodra-gray-700 hover:text-innodra-green-600 font-medium py-2 transition-colors duration-300">About</a>
                <a href="#services" class="text-innodra-gray-700 hover:text-innodra-green-600 font-medium py-2 transition-colors duration-300">Services</a>
                <a href="#contact" class="text-innodra-gray-700 hover:text-innodra-green-600 font-medium py-2 transition-colors duration-300">Contact</a>
                <a href="#contact" class="bg-innodra-green-500 hover:bg-innodra-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center">
                    Get Started
                </a>
            </div>
        </div>
    </div>

    <script>
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
    </script>
</nav>