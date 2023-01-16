import { DEFAULT_TITLE } from "../utils/constants.js";
import { renderHeader, renderFooter, renderCard } from "./renderer.js";
import { depressions } from "../data/depressions.js";
import { replaceImgSrc } from "../utils/utils.js";

(() => {
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('afterbegin', renderHeader(DEFAULT_TITLE));
    body.insertAdjacentHTML('beforeend', renderFooter());

    const container = document.getElementById('main-row');
    depressions.forEach(d => container.innerHTML += renderCard(d));

    replaceImgSrc(document.getElementsByTagName('img'));
})();