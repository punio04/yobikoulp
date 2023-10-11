"use strict";

if (!formmailerEmbedScriptLoaded) {
  document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('.formmailer-embed').forEach(function (element) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://' + element.dataset.formHost + '/fms/' + element.dataset.formHash + '?errorScroll=0');
      iframe.setAttribute('frameborder', 'no');
      iframe.style.width = '100%';
      iframe.style.height = '500px';
      iframe.style.backgroundColor = "#FFFFFF";
      element.appendChild(iframe);
      iframe.addEventListener('load', function (e) {
        if (iframe.formmailerEmbedIframeLoaded) {
          e.currentTarget.scrollIntoView(true);
        }

        iframe.formmailerEmbedIframeLoaded = true;
      });
    });
  });
  window.addEventListener('message', function (e) {
    if (e.data.app && e.data.app == 'formmailer') {
      if (e.data.message == 'heightChanged') {
        document.querySelectorAll('.formmailer-embed iframe').forEach(function (element) {
          if (element.contentWindow == e.source) {
            // スクロールバーのon/offによりコンテンツサイズが変わる場合がある
            // iframeのサイズがコンテンツサイズちょうどだと、スクロールバーのon/offを無限に発生させる可能性があるため、4pxあけておく
            element.style.height = e.data.params.height + 4 + 'px';
          }
        });
      }
    }
  });
  var formmailerEmbedScriptLoaded = true;
}
