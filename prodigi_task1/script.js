<script>
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);

            const target = document.querySelector(`#${page}`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    function loadPage(page) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${page}.html`, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                document.getElementById('page-content').innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    loadPage('home');
</script>