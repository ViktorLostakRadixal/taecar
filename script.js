$(function() {
    // Inicializace Scrollify pro elementy s tøídou .scroll-section
    $.scrollify({
        section : ".scroll-section", // Selector pro sekce
        sectionName : "section-name", // Použije data-section-name pro URL hash a navigaci
        interstitialSection : "", // Selector pro sekce, které nemají zabrat celou výšku (nepoužíváme zde)
        easing: "easeOutExpo", // Typ animace scrollování
        scrollSpeed: 1000, // Rychlost scrollování (ms)
        offset : 0, // Posun (pokud by byla fixní hlavièka)
        scrollbars: false, // Skryje nativní scrollbary prohlížeèe
        standardScrollElements: "", // Elementy, uvnitø kterých má fungovat normální scroll (napø. pokud by se obsah nevešel)
        setHeights: true, // Nastaví výšku sekcí (dùležité)
        overflowScroll: true, // Povolí scrollování uvnitø sekce, POKUD je obsah delší (záložní plán)
        updateHash: true, // Aktualizuje URL hash podle aktuální sekce
        touchScroll: true, // Povolí scrollování dotykem na mobilních zaøízeních
        before:function(index, sections) {}, // Callback pøed scrollováním
        after:function(index, sections) {}, // Callback po scrollování
        afterResize:function() {}, // Callback po zmìnì velikosti okna
        afterRender:function() {} // Callback po inicializaci
    });

    // Volitelné: Pøidání navigace nebo odkazù, které scrollují na sekce
    // Napø. <a class="scroll-link" href="#contact">Kontakt</a>
    // $('.scroll-link').on('click', function(e) {
    //     e.preventDefault();
    //     $.scrollify.move($(this).attr('href'));
    // });
});