document.addEventListener('DOMContentLoaded', () => {
    const mediaQuery = window.matchMedia('(max-width: 1199px)')

    const $burger = document.querySelector('[data-field="burger"]')
    const $burgerContent = document.querySelector('[data-field="burger-content"]')
    const $overlay = document.querySelector('[data-field="overlay"]')
    const $body = document.body

    $burger?.addEventListener('click', () => {
        $body.classList.toggle('stop-scroll')
        $burger?.classList.toggle('_active')
        $burgerContent?.classList.toggle('_visible')
        $overlay?.classList.toggle('_visible')
    })

    document.addEventListener('click', (e) => {
        if (!mediaQuery.matches) return

        const target = e.target as HTMLElement

        if (
            !$burgerContent?.contains(target) &&
            !$burger?.contains(target) &&
            $burgerContent?.classList.contains('_visible')
        ) {
            $body.classList.remove('stop-scroll')
            $burger?.classList.remove('_active')
            $burgerContent?.classList.remove('_visible')
            $overlay?.classList.remove('_visible')
        }
    })
})
