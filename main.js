/* E-portfolio navigation – no dependencies, no cookies, no tracking.
 *
 * URL scheme (hash based, works on GitHub Pages without any server config):
 *   #welcome                      main tab
 *   #engineering/projects         main tab + sub-tab
 *   #cp-mobility                  in-page anchor (the right tab opens first)
 *
 * Without JavaScript every section is simply displayed one after another.
 */
(function () {
  'use strict';

  var pages = Array.prototype.slice.call(document.querySelectorAll('[data-page]'));
  var pageByName = {};
  pages.forEach(function (p) { pageByName[p.dataset.page] = p; });

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));

  function resolve(hash) {
    var id = decodeURIComponent((hash || '').replace(/^#/, ''));
    if (!id) return { page: 'welcome' };

    var parts = id.split('/');
    if (pageByName[parts[0]]) return { page: parts[0], sub: parts[1] };

    // Plain in-page anchor: find the tab (and sub-tab) that contains it.
    var el = document.getElementById(id);
    if (el) {
      var pageEl = el.closest('[data-page]');
      var subEl = el.closest('[data-sub]');
      if (pageEl) {
        return { page: pageEl.dataset.page, sub: subEl ? subEl.dataset.sub : undefined, anchor: el };
      }
    }
    return { page: 'welcome' };
  }

  function show(route, isFirstLoad) {
    var pageEl = pageByName[route.page];

    pages.forEach(function (p) { p.classList.toggle('active', p === pageEl); });

    navLinks.forEach(function (a) {
      if (a.dataset.nav === route.page) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });

    // Sub-tabs: default to the first one.
    var subs = Array.prototype.slice.call(pageEl.querySelectorAll(':scope > [data-sub]'));
    if (subs.length) {
      var wanted = route.sub || subs[0].dataset.sub;
      if (!subs.some(function (s) { return s.dataset.sub === wanted; })) wanted = subs[0].dataset.sub;
      subs.forEach(function (s) { s.classList.toggle('active', s.dataset.sub === wanted); });
      Array.prototype.forEach.call(pageEl.querySelectorAll('[data-sub-link]'), function (a) {
        if (a.dataset.subLink === wanted) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }

    var h1 = pageEl.querySelector('h1');
    document.title = (h1 ? h1.textContent.trim() + ' · ' : '') + 'Clem · E-portfolio';

    if (route.anchor) {
      route.anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
      if (h1 && !isFirstLoad) h1.focus({ preventScroll: true });
    }
  }

  function onRoute(isFirstLoad) { show(resolve(location.hash), isFirstLoad === true); }

  window.addEventListener('hashchange', function () { onRoute(false); });
  onRoute(true);

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
