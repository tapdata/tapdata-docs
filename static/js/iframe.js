if (window.self !== window.top) {
    const urlParams = new URLSearchParams(location.search)
    if (urlParams.get('from') === 'cloud') {
        let style = document.createElement('style')
        let arr = ['div[class^="announcementBar_"]', 'div[class^="tocCollapsible_"]', '.navbar', '.theme-doc-breadcrumbs', '.theme-doc-sidebar-container', '.theme-doc-version-badge', /*'#下一步', '#下一步 + p',*/ '.theme-doc-footer', '.pagination-nav', '.footer', '._hj_feedback_container', '.theme-doc-markdown > h1 ~ .tooltip']
        style.innerHTML = `
            :where(${arr.join(',')}){ display: none !important; }
        `
        document.getElementsByTagName('head').item(0).appendChild(style)
    }
}
