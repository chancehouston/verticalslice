function init(pathToScript, linkElement = document.querySelector('.cutTheMustard')) {
    if (window.matchMedia && window.matchMedia(linkElement.media).matches) {
        var script = document.createElement('script');
        script.src = pathToScript;
        script.async = true;
        document.body.appendChild(script);
    }
};

export default init;