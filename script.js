$(function() {
    // Inicializace Scrollify pro elementy s t��dou .scroll-section
    $.scrollify({
        section : ".scroll-section", // Selector pro sekce
        sectionName : "section-name", // Pou�ije data-section-name pro URL hash a navigaci
        interstitialSection : "", // Selector pro sekce, kter� nemaj� zabrat celou v��ku (nepou��v�me zde)
        easing: "easeOutExpo", // Typ animace scrollov�n�
        scrollSpeed: 1000, // Rychlost scrollov�n� (ms)
        offset : 0, // Posun (pokud by byla fixn� hlavi�ka)
        scrollbars: false, // Skryje nativn� scrollbary prohl�e�e
        standardScrollElements: "", // Elementy, uvnit� kter�ch m� fungovat norm�ln� scroll (nap�. pokud by se obsah neve�el)
        setHeights: true, // Nastav� v��ku sekc� (d�le�it�)
        overflowScroll: true, // Povol� scrollov�n� uvnit� sekce, POKUD je obsah del�� (z�lo�n� pl�n)
        updateHash: true, // Aktualizuje URL hash podle aktu�ln� sekce
        touchScroll: true, // Povol� scrollov�n� dotykem na mobiln�ch za��zen�ch
        before:function(index, sections) {}, // Callback p�ed scrollov�n�m
        after:function(index, sections) {}, // Callback po scrollov�n�
        afterResize:function() {}, // Callback po zm�n� velikosti okna
        afterRender:function() {} // Callback po inicializaci
    });

    // Voliteln�: P�id�n� navigace nebo odkaz�, kter� scrolluj� na sekce
    // Nap�. <a class="scroll-link" href="#contact">Kontakt</a>
    // $('.scroll-link').on('click', function(e) {
    //     e.preventDefault();
    //     $.scrollify.move($(this).attr('href'));
    // });
});