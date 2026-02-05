class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="bg-gray-900 shadow-md sticky top-0 z-50">
            <div class="max-w-screen-2xl mx-auto px-6 h-14 flex items-center justify-between">

                <!-- LOGO -->
                <a href="index.html" class="flex items-center text-white font-bold text-lg">
                    <i data-feather="gamepad" class="text-steam-500 mr-2"></i>
                    Monex Store
                </a>

                <!-- LINKS -->
                <nav class="hidden lg:flex gap-6 text-sm">
                    <a href="index.html" class="text-gray-400 hover:text-white">Loja</a>
                    <a href="comunidade.html" class="text-gray-400 hover:text-white">Comunidade</a>
                    <a href="#" class="text-gray-400 hover:text-white">Biblioteca</a>
                    <a href="#" class="text-gray-400 hover:text-white">Notícias</a>
                </nav>

                <!-- SEARCH -->
                <div class="hidden md:flex items-center bg-gray-800 px-3 py-1 rounded-md w-72">
                    <i data-feather="search" class="text-gray-400 w-4 h-4 mr-2"></i>
                    <input type="text" placeholder="Search games..."
                        class="bg-transparent text-sm outline-none text-white w-full">
                </div>

                <!-- AÇÕES -->
                <div class="flex items-center gap-4">

                    <button class="text-gray-400 hover:text-white">
                        <i data-feather="shopping-cart"></i>
                    </button>

                    <button class="text-gray-400 hover:text-white">
                        <i data-feather="bell"></i>
                    </button>

                    <!-- AVATAR COM ZOOM -->
                    <img
                        src="http://static.photos/people/200x200/1"
                         class="profile-img profile-img-member" w-8 h-8 rounded-full object-cover border border-gray-700 cursor-zoom-in"
                        alt="Perfil">
                </div>

            </div>
        </header>

        <!-- MODAL DE ZOOM -->
        <div id="profileModal" class="profile-modal hidden">
            <span class="close-modal">&times;</span>
            <img id="profileModalImg">
        </div>
        `;

        feather.replace();
        this.initProfileZoom();
    }

    initProfileZoom() {
        const avatar = this.querySelector(".profile-avatar");
        const modal = this.querySelector("#profileModal");
        const modalImg = this.querySelector("#profileModalImg");
        const close = this.querySelector(".close-modal");

        avatar.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modalImg.src = avatar.src;
        });

        close.addEventListener("click", () => {
            modal.classList.add("hidden");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }
}

customElements.define("custom-navbar", CustomNavbar);

