/* ============================================================
   FAIRY FRIENDS E-READER
   ============================================================ */


/* ============================================================
   PAGE-SPECIFIC SETTINGS
   ============================================================

   Change these four variables for each page.
   ============================================================ */

/* ============================================================
   DEFAULT READER SETTINGS
   ============================================================ */

const readerDefaults = {
    color_scheme: "bw",
    font_size: 5,
    font: "times",
    bline: false
};


/* ============================================================
   STORAGE KEY
   ============================================================

   This is the name used by localStorage.

   Since this is specific to this story, changing settings
   here will not affect other stories on your website.
   ============================================================ */

const storageKey = "fairyFriendsReaderSettings";


/* ============================================================
   LOAD SETTINGS
   ============================================================ */

function loadReaderSettings() {

    const saved =
        localStorage.getItem(storageKey);

    if (saved === null) {
        return { ...readerDefaults };
    }

    try {

        const settings =
            JSON.parse(saved);

        return {
            ...readerDefaults,
            ...settings
        };

    }
    catch (error) {

        console.error(
            "Could not load reader settings:",
            error
        );

        return {
            ...readerDefaults
        };
    }
}


/* ============================================================
   SAVE SETTINGS
   ============================================================ */

function saveReaderSettings(settings) {

    localStorage.setItem(
        storageKey,
        JSON.stringify(settings)
    );
}


/* ============================================================
   VALIDATE SETTINGS
   ============================================================ */

function validateReaderSettings(settings) {

    const validColorSchemes = [
        "bw",
        "wb",
        "gb",
        "gy"
    ];


    /* Color scheme */

    if (
        !validColorSchemes.includes(
            settings.color_scheme
        )
    ) {

        settings.color_scheme = "bw";
    }


    /* Font size */

    settings.font_size =
        Number(settings.font_size);


    if (
        !Number.isFinite(
            settings.font_size
        )
    ) {

        settings.font_size = 5;
    }


    if (settings.font_size < 2) {
        settings.font_size = 2;
    }


    if (settings.font_size > 15) {
        settings.font_size = 15;
    }


    /* Font */

    if (
        settings.font !== "dyslexie"
    ) {

        settings.font = "times";
    }


    /* Varying colors */

    settings.bline =
        settings.bline === true;


    return settings;
}


/* ============================================================
   LOAD AND VALIDATE
   ============================================================ */

let readerSettings =
    loadReaderSettings();

readerSettings =
    validateReaderSettings(
        readerSettings
    );

saveReaderSettings(
    readerSettings
);


/* ============================================================
   COLOR SCHEME
   ============================================================ */

function getColors(colorScheme) {

    switch (colorScheme) {

        case "wb":

            return {
                background: "black",
                text: "white"
            };


        case "gb":

            return {
                background: "black",
                text: "#049604"
            };


        case "gy":

            return {
                background: "#FFF9D1",
                text: "#049604"
            };


        case "bw":
        default:

            return {
                background: "white",
                text: "black"
            };
    }
}


/* ============================================================
   APPLY COLOR SCHEME
   ============================================================ */

function applyColorScheme() {

    const colors =
        getColors(
            readerSettings.color_scheme
        );


    document.documentElement.style
        .setProperty(
            "--reader-background",
            colors.background
        );


    document.documentElement.style
        .setProperty(
            "--reader-font-color",
            colors.text
        );
}


/* ============================================================
   APPLY FONT SIZE
   ============================================================ */

function applyFontSize() {

    document.documentElement.style
        .setProperty(
            "--reader-font-size",
            readerSettings.font_size
        );
}


/* ============================================================
   APPLY FONT
   ============================================================ */

function applyFont() {

    const paragraphs =
        document.querySelectorAll(
            "p.Para"
        );


    paragraphs.forEach(
        paragraph => {

            if (
                readerSettings.font ===
                "dyslexie"
            ) {

                paragraph.style.fontFamily =
                    "OpenDyslexic";
            }

            else {

                paragraph.style.fontFamily =
                    '"Times New Roman", Times, serif';
            }
        }
    );
}


/* ============================================================
   APPLY VARYING COLORS
   ============================================================ */

function applyVaryingColors() {

    const paragraphs =
        document.querySelectorAll(
            "p.Para"
        );


    paragraphs.forEach(
        paragraph => {

            paragraph.classList.remove(
                "varying-colors"
            );

            paragraph.style.backgroundImage =
                "";
        }
    );


    if (!readerSettings.bline) {
        return;
    }


    let backgroundImage;


    switch (
        readerSettings.color_scheme
    ) {

        case "gb":
        case "gy":

            backgroundImage =
                "url('text_green_yellow.png')";

            break;


        case "bw":

            backgroundImage =
                "url('dark_black_blue_red.png')";

            break;


        case "wb":
        default:

            backgroundImage =
                "url('light_white_blue_red.png')";

            break;
    }


    paragraphs.forEach(
        paragraph => {

            paragraph.classList.add(
                "varying-colors"
            );

            paragraph.style.backgroundImage =
                backgroundImage;
        }
    );
}


/* ============================================================
   APPLY ALL READER SETTINGS
   ============================================================ */

function applyReaderSettings() {

    applyColorScheme();

    applyFontSize();

    applyFont();

    applyVaryingColors();
}


/* ============================================================
   INITIALIZE SETTINGS FORM
   ============================================================ */

function initializeSettingsForm() {


    /* Color scheme */

    const colorRadio =
        document.querySelector(
            `input[name="color_scheme"][value="${readerSettings.color_scheme}"]`
        );


    if (colorRadio) {
        colorRadio.checked = true;
    }


    /* Font */

    const fontRadio =
        document.querySelector(
            `input[name="font"][value="${readerSettings.font}"]`
        );


    if (fontRadio) {
        fontRadio.checked = true;
    }


    /* Varying colors */

    const bline =
        document.querySelector(
            'input[name="bline"]'
        );


    if (bline) {
        bline.checked =
            readerSettings.bline;
    }


    /* Font size */

    const fontSize =
        document.querySelector(
            'input[name="font_size"]'
        );


    if (fontSize) {

        fontSize.value =
            readerSettings.font_size;
    }
}


/* ============================================================
   SETTINGS FORM
   ============================================================ */

function setupSettingsForm() {

    const form =
        document.getElementById(
            "reader-settings-form"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /* Color */

            const colorScheme =
                document.querySelector(
                    'input[name="color_scheme"]:checked'
                );


            if (colorScheme) {

                readerSettings.color_scheme =
                    colorScheme.value;
            }


            /* Font */

            const font =
                document.querySelector(
                    'input[name="font"]:checked'
                );


            if (font) {

                readerSettings.font =
                    font.value;
            }


            /* Varying colors */

            const bline =
                document.querySelector(
                    'input[name="bline"]'
                );


            if (bline) {

                readerSettings.bline =
                    bline.checked;
            }


            /* Font size */

            const fontSize =
                document.querySelector(
                    'input[name="font_size"]'
                );


            if (fontSize) {

                readerSettings.font_size =
                    Number(fontSize.value);
            }


            /* Validate */

            readerSettings =
                validateReaderSettings(
                    readerSettings
                );


            /* Save */

            saveReaderSettings(
                readerSettings
            );


            /* Apply */

            applyReaderSettings();


            /* Update form */

            initializeSettingsForm();
        }
    );
}


/* ============================================================
   NAVIGATION
   ============================================================ */

function setupNavigation() {

    const previousLinks =
        document.querySelectorAll(
            "#previous-page, #previous-page-bottom"
        );


    const nextLinks =
        document.querySelectorAll(
            "#next-page, #next-page-bottom"
        );


    /* Previous page */

    previousLinks.forEach(
        link => {

            if (previousPage === "") {

                link.style.display =
                    "none";
            }

            else {

                link.href =
                    previousPage;
            }
        }
    );


    /* Next page */

    nextLinks.forEach(
        link => {

            if (nextPage === "") {

                link.style.display =
                    "none";
            }

            else {

                link.href =
                    nextPage;
            }
        }
    );
}


/* ============================================================
   PAGE NUMBER
   ============================================================ */

function setupPageNumber() {

    const pageNumberElement =
        document.getElementById(
            "page-number"
        );


    if (!pageNumberElement) {
        return;
    }


    pageNumberElement.textContent =
        `${pageNumber} of ${totalPages}`;
}


/* ============================================================
   INTERNET EXPLORER CHECK
   ============================================================ */

function checkBrowser() {

    const isInternetExplorer =
        navigator.userAgent.indexOf(
            "MSIE"
        ) !== -1
        ||
        navigator.appVersion.indexOf(
            "Trident/"
        ) > 0;


    if (isInternetExplorer) {

        alert(
            "Please view this in a modern browser such as Chrome or Microsoft Edge."
        );

        return false;
    }


    return true;
}


/* ============================================================
   INITIALIZE READER
   ============================================================ */

function initializeReader() {

    if (!checkBrowser()) {
        return;
    }


    applyReaderSettings();

    initializeSettingsForm();

    setupSettingsForm();

    setupNavigation();

    setupPageNumber();
}


/* ============================================================
   START
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    initializeReader
);