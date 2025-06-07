document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll<HTMLElement>('[data-field="expanded"]')
    const listenedBtns = new WeakSet<HTMLButtonElement>()

    const mq = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')

    function applyClamp() {
        const linesToShow = mq.matches ? 7 : 3

        items.forEach((typeItem) => {
            const textEl = typeItem.querySelector<HTMLElement>('.types__text')
            const btn = typeItem.querySelector<HTMLButtonElement>('.types__toggle-btn')
            if (!textEl || !btn) return

            textEl.style.maxHeight = ''
            textEl.style.overflow = ''
            typeItem.classList.remove('_expanded')
            btn.textContent = 'Подробнее'

            const lineHeight = parseFloat(getComputedStyle(textEl).lineHeight)
            const threshold = lineHeight * linesToShow

            if (textEl.scrollHeight > threshold) {
                btn.style.display = ''
                textEl.style.maxHeight = `${threshold}px`
                textEl.style.overflow = 'hidden'
            } else {
                btn.style.display = 'none'
            }

            if (!listenedBtns.has(btn)) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault()
                    const expanded = typeItem.classList.toggle('_expanded')
                    if (expanded) {
                        textEl.style.maxHeight = ''
                        textEl.style.overflow = ''
                        btn.style = 'display: none'
                    } else {
                        textEl.style.maxHeight = `${threshold}px`
                        textEl.style.overflow = 'hidden'
                        btn.style = 'display: none'
                    }
                })
                listenedBtns.add(btn)
            }
        })
    }

    applyClamp()

    mq.addEventListener('change', applyClamp)
})
