!(function(e) {
  "use strict";
  let o = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  if (
    (e(".navbar-nav > li  a").each(function() {
      (e(this).attr("href") !== o && "" !== e(this).attr("href")) ||
      e(this).addClass("active");
    }),
    e(".counter").length && e(".counter").counterUp({ delay: 10, time: 1200 }),
      e(window).on("scroll", function() {
        let o = e(".sticky-menu");
        e(window).scrollTop() >= 100
          ? o.addClass("fixed")
          : o.removeClass("fixed");
      }),
      e(window).on("scroll", function() {
        e(this).scrollTop() > 200
          ? e(".scroll-top").fadeIn()
          : e(".scroll-top").fadeOut();
      }),
      e(".scroll-top").on("click", function() {
        return e("html, body").animate({ scrollTop: 0 }), !1;
      }),
      e("input,textarea").each(function() {
        e(this).data("holder", e(this).attr("placeholder")),
          e(this).on("focusin", function() {
            e(this).attr("placeholder", "");
          }),
          e(this).on("focusout", function() {
            e(this).attr("placeholder", e(this).data("holder"));
          });
      }),
      e(".mixitUp-container").length)
  ) {
    let s = document.querySelector(".mixitUp-container");
    mixitup(s);
  }
  e("#page-scroll-container-one").length &&
  e("#page-scroll-container-one").pagepiling({
    scrollingSpeed: 50,
    loopTop: !0,
    loopBottom: !0
  }),
  e("#page-scroll-container-two").length &&
  e("#page-scroll-container-two").pagepiling({
    scrollingSpeed: 50,
    loopTop: !0,
    loopBottom: !0
  }),
  e("select").length && e(".theme-select-menu").selectize(),
  e("#credit-card").length &&
  e(".payment-radio-button").on("click", function() {
    e("#credit-card").is(":checked")
      ? e(".credit-card-form").show(300)
      : e(".credit-card-form").hide(300);
  }),
    e("img.svg").each(function() {
      let o = e(this),
        s = o.attr("id"),
        t = o.attr("class"),
        r = o.attr("src");
      e.get(
        r,
        function(r) {
          let i = e(r).find("svg");
          void 0 !== s && (i = i.attr("id", s)),
          void 0 !== t && (i = i.attr("class", t + " replaced-svg")),
          !(i = i.removeAttr("xmlns:a")).attr("viewBox") &&
          i.attr("height") &&
          i.attr("width") &&
          i.attr(
            "viewBox",
            "0 0 " + i.attr("height") + " " + i.attr("width")
          ),
            o.replaceWith(i);
        },
        "xml"
      );
    }),
  e(".product-value").length &&
  (e(".value-increase").on("click", function() {
    let o = e(this)
        .closest("ul")
        .find(".product-value"),
      s = parseInt(o.val());
    isNaN(s) || o.val(s + 1);
  }),
    e(".value-decrease").on("click", function() {
      let o = e(this)
          .closest("ul")
          .find(".product-value"),
        s = parseInt(o.val());
      !isNaN(s) && s > 1 && o.val(s - 1);
    })),
    e(window).on("load", function() {
      e("#ctn-preloader").fadeOut(),
        e("#preloader")
          .delay(350)
          .fadeOut("slow"),
        e("body")
          .delay(350)
          .css({ overflow: "visible" }),
      e("[data-aos]").length && AOS.init({ duration: 1e3, mirror: !0 });
      let o = e(".fancybox");
      if (
        (o.length &&
        o.fancybox({
          arrows: !0,
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          animationEffect: "zoom-in-out",
          transitionEffect: "zoom-in-out"
        }),
          e("#isotop-gallery-wrapper").length)
      ) {
        let s = e("#isotop-gallery-wrapper").isotope({
          itemSelector: ".isotop-item",
          percentPosition: !0,
          masonry: { columnWidth: ".grid-sizer" }
        });
        e(".isotop-menu-wrapper").on("click", "li", function() {
          let o = e(this).attr("data-filter");
          s.isotope({ filter: o });
        }),
          e(".isotop-menu-wrapper").each(function(o, s) {
            let t = e(s);
            t.on("click", "li", function() {
              t.find(".is-checked").removeClass("is-checked"),
                e(this).addClass("is-checked");
            });
          });
      }
    });
})(jQuery);
