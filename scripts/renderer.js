function renderHeader(title) {
    return `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand">Sierszańskie Zapadliska</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../pages/video.html">Materiały wideo dotyczące zapadlisk</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main role="main">
            <section class="jumbotron text-center">
                <div class="container">
                    <h1 class="jumbotron-heading">Sierszańskie Zapadliska</h1>
                    <p class="lead text-danger">${title}</p>
                    <!-- <p>
                        <a href="#" class="btn btn-primary my-2">Main call to action</a>
                        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                    </p> -->
                </div>
            </section>
        </main>
    `;
}

function renderFooter(renderHomePageButton) {
    return `
        <footer class="text-muted bg-dark">
            <div class="container">
                <div class="card-body">
                    <p class="float-right">
                        ${renderHomePageButton ? '<a href="../" class="btn btn-danger">Strona główna</a>' : ''}
                        <a href="#" class="btn btn-secondary">Powrót do góry</a>
                    </p>
                </div>
            </div>
        </footer>
    `;
}

function renderErrorMessage(message) {
    return `
        <div class="alert alert-danger" role="alert">
            ${message}
        </div>
    `;
}

function renderCard(depression) {
    return `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="${depression.imgSrc}"/>
                <div class="card-body">
                    <p class="card-text">${depression.name}. ${depression.description}</p>
                    <ul>
                        <li>Głębokość: ${depression.depth} ${depression.depth === 'b.d.' ? '' : 'metrów.'}</li>
                        <li>Średnica: ${depression.diameter} ${depression.diameter === 'b.d.' ? '' : 'metrów.'}</li>
                    </ul>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a class="btn btn-sm btn-outline-primary" target='_blank'href="https://www.google.com/maps/search/${depression.latitude},+${depression.longitude}">Zobacz mapę</a>
                            <a class="btn btn-sm btn-outline-success" href="./pages/images.html?zapadlisko=${depression.query}">Więcej zdjęć</a>
                            <a class="btn btn-sm btn-outline-danger" href="./pages/media.html?zapadlisko=${depression.query}">Media</a>
                        </div>
                        <small class="text-muted">${depression.date}</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMediaContainer(url) {
    return `
        <main role="main">
            <div class="album py-5 bg-light">
                <div class="container">
                    <div id="list-group" class="list-group">
                    </div>
                </div>
            </div>
        </main>
    `;
}

function renderMedia(url) {
    return `
        <a href=${url} target="_blank" class="list-group-item list-group-item-action">${url}</a>
    `;
}

function renderImagesContainer() {
    return `
        <main role="main">
            <div class="album py-5 bg-light">
                <div class="container">
                    <div id="main-row" class="row"></div>
                </div>
            </div>
        </main>
    `
}

function renderImage(url) {
    return `
        <div class="col-md-4">
            <div class="mb-4 box-shadow">
                <a href=${url} target="_blank"><img class="card-img-top" src="${url}"></a>
            </div>
        </div>
    `;
}

function renderBody(headerTitle, renderHomePageButton, dataContainer) {
    if (dataContainer !== undefined) {
        document.body.innerHTML = dataContainer;
    }

    document.body.insertAdjacentHTML('afterbegin', renderHeader(headerTitle));
    document.body.insertAdjacentHTML('beforeend', renderFooter(renderHomePageButton));
}

export {
    renderHeader,
    renderFooter,
    renderErrorMessage,
    renderCard,
    renderMediaContainer,
    renderMedia,
    renderImagesContainer,
    renderImage,
    renderBody
};