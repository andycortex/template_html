const burgerButton = document.getElementById('burgerButton');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuClose = document.getElementById('mobileMenuClose');

        function toggleMobileMenu() {
            burgerButton.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        }

        burgerButton.addEventListener('click', toggleMobileMenu);
        mobileMenuClose.addEventListener('click', toggleMobileMenu);

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !burgerButton.contains(e.target)) {
                burgerButton.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        function toggleSubmenu(id) {
            const submenu = document.getElementById(id);
            const toggle = event.target;
            
            submenu.classList.toggle('active');
            toggle.classList.toggle('active');
        }

        const snackbarMessages = {
            success: { title: 'Éxito', message: 'Operación completada correctamente', icon: '✅' },
            error: { title: 'Error', message: 'Ha ocurrido un error inesperado', icon: '❌' },
            warning: { title: 'Advertencia', message: 'Revisa la información antes de continuar', icon: '⚠️' },
            info: { title: 'Información', message: 'Aquí tienes información importante', icon: 'ℹ️' },
            debug: { title: 'Debug', message: 'Información de depuración para desarrolladores', icon: '🐛' },
            critical: { title: 'Crítico', message: 'Atención inmediata requerida', icon: '🚨' }
        };

        function showSnackbar(type) {
            const container = document.getElementById('snackbarContainer');
            const config = snackbarMessages[type];
            
            const snackbar = document.createElement('div');
            snackbar.className = `snackbar snackbar-${type}`;
            
            snackbar.innerHTML = `
                <span class="snackbar-icon">${config.icon}</span>
                <div class="snackbar-content">
                    <div class="snackbar-title">${config.title}</div>
                    <div class="snackbar-message">${config.message}</div>
                </div>
                <button class="snackbar-close" onclick="closeSnackbar(this)">×</button>
            `;
            
            container.appendChild(snackbar);
            
            setTimeout(() => {
                snackbar.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                closeSnackbar(snackbar.querySelector('.snackbar-close'));
            }, 5000);
        }

        function closeSnackbar(button) {
            const snackbar = button.closest('.snackbar');
            snackbar.classList.remove('show');
            
            setTimeout(() => {
                snackbar.remove();
            }, 300);
        }

        function openModal() {
            document.getElementById('modal').style.display = 'flex';
        }
        
        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }