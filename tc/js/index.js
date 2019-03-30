class Mask {
    constructor({
        title,
        context,
        callback,
        That
    } = {}) {
        if (document.readyState === 'loading') return ($(() => {
            new Mask({
                title,
                context,
                callback,
                That: this
            })
        }), undefined)

        this.callback = callback

        const ct = $(`
    <div class="mask">
        <span class="mask-main">
            <span class="mask-header">
                <i class="iconfont icon-close-circle"></i>${title}</span>
            <div class="mask-line"></div>
            <div class="mask-body">
            </div>
        </span>
    </div>`)
        ct.find('.mask-body').append(context)

        this.el = ct
        $('body').append(ct)
        ct.on('click', e => {
            if ((e.target.className + ' ').indexOf('mask ') > -1) this.close(e)
        }).css('animation', 'bgcMask 0.4s').find('.mask-main').css('animation', 'scaleMask 0.4s').find('i').on('click', e => this.close(e))
    }

    close(e) {
        this.callback(e, () => {
            const el = this.el,
                maskMain = el.find('.mask-main')

            Promise.all([new Promise(r => {
                el.on('animationend', r)
            }), new Promise(r => {
                maskMain.on('animationend', r)
            })]).then(() => el.remove())

            el.css('animation', '')
            maskMain.css('animation', '')
            setTimeout(function () {
                el.css('animation', 'bgcMask 0.4s reverse forwards')
                maskMain.css('animation', 'scaleMask 0.4s reverse forwards')
            })
        })
    }
}