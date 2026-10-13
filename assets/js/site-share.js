/* Progressive-enhancement sharing; no trackers or external libraries. */
(() => {
  const shareButton = document.querySelector('.rss7-footer__share-button');
  const status = document.querySelector('.rss7-footer__status');
  if (!shareButton || !status) return;
  let statusTimer;
  const announce = message => {
    status.textContent = message;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => { status.textContent = ''; }, 6000);
  };
  async function copyUrl(url) {
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(url); return true; } catch (_) {}
    }
    const input = document.createElement('textarea');
    input.value = url;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.left = '-9999px';
    document.body.append(input);
    input.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (_) {}
    input.remove();
    return ok;
  }
  shareButton.addEventListener('click', async () => {
    const data = { title: document.title, url: window.location.href.split('#')[0] };
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(data);
        announce('共有画面を開きました。');
        return;
      } catch (error) {
        if (error && error.name === 'AbortError') return;
      }
    }
    const copied = await copyUrl(data.url);
    announce(copied ? 'ページのURLをコピーしました。' : 'コピーできませんでした。アドレスバーのURLを共有してください。');
  });
})();
