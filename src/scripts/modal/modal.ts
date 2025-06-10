document.addEventListener('DOMContentLoaded', () => {
    const $modal = document.querySelector<HTMLElement>('.modal')
    const $modalCloseButtons = document?.querySelectorAll('[data-field="modal-close"]')
    const $showModalButtons = document.querySelectorAll<HTMLButtonElement | HTMLAnchorElement>(
        '[data-field="show-form-modal"]'
    )

    $showModalButtons.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            $modal?.classList.add('_visible')
        })
    })

    $modalCloseButtons.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            const modal = (e.target as HTMLElement)?.closest('.modal')
            modal?.classList.remove('_visible')
        })
    })
})
