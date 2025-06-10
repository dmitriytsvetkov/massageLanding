import { default as JustValidate, Rules } from 'just-validate'
import { Maskito } from '@maskito/core'
import { masks } from '@/lib'

document.addEventListener('DOMContentLoaded', () => {
    const $form = document.querySelector<HTMLFormElement>('[data-field="feedback-form"')

    const formFields = {
        name: {
            error: '[data-field="feedback-form"] [data-field="name-error"]',
            input: '[data-field="feedback-form"] [data-field="name-input"]',
        },
        phone: {
            error: '[data-field="feedback-form"] [data-field="phone-error"]',
            input: '[data-field="feedback-form"] [data-field="phone-input"]',
        },
        type: {
            error: '[data-field="feedback-form"] [data-field="type-error"]',
            select: '[data-field="feedback-form"] [data-field="type-select"]',
        },
    }

    if ($form) {
        console.log($form)
        const validation = new JustValidate($form, {
            errorFieldCssClass: '_error',
            errorFieldStyle: {},
            errorLabelCssClass: 'field__error-text',
            errorLabelStyle: {},
            focusInvalidField: false,
            successFieldCssClass: '_valid',
        })
            .addField(
                formFields.name.input,
                [
                    {
                        errorMessage: 'Введите ваше имя',
                        rule: Rules.Required,
                    },
                ],
                {
                    errorFieldStyle: '',
                    errorsContainer: formFields.name.error,
                }
            )
            .addField(
                formFields.phone.input,
                [
                    {
                        errorMessage: 'Введите ваш номер телефона',
                        rule: Rules.Required,
                    },
                    {
                        errorMessage: 'Номер должен состоять из 11 цифр',
                        validator: (value: unknown) =>
                            String(value).replace(/\D/g, '').length === 11,
                    },
                ],
                {
                    errorsContainer: formFields.phone.error,
                }
            )
            .addField(
                formFields.type.select,
                [
                    {
                        rule: 'required',
                        errorMessage: 'Выберите тип массажа',
                    },
                ],
                {
                    errorsContainer: formFields.type.error,
                }
            )
            .onSuccess(() => {
                console.log('success')
            })

        const select = document.querySelector<HTMLElement>('[data-field="select-container"]')

        if (select) {
            const selected = select.querySelector<HTMLElement>('[data-selected]')
            const options = select.querySelector<HTMLOptionElement>('.select__options')
            const hiddenInput = document.querySelector<HTMLInputElement>(
                '[data-field="type-select"]'
            )

            selected?.addEventListener('click', () => {
                options?.classList.toggle('_hidden')
            })

            options?.querySelectorAll('.select__option').forEach((option) => {
                const el = option as HTMLElement

                el.addEventListener('click', () => {
                    if (selected && hiddenInput) {
                        selected.textContent = el.textContent
                        selected.classList.add('_selected')
                        hiddenInput.value = el.dataset.value || ''
                    }

                    options.classList.add('_hidden')

                    validation.revalidateField(formFields.type.select).then((isValid: boolean) => {
                        if (isValid) {
                            select.classList.remove('_error')
                        } else {
                            select.classList.add('_error')
                        }
                    })
                })
            })

            validation.onFail((fields) => {
                if (select) {
                    if (fields[formFields.type.select].isValid === false) {
                        select.classList.add('_error')
                    } else {
                        select.classList.remove('_error')
                    }
                }
            })
        }

        const $phone = document.querySelector<HTMLInputElement>(formFields.phone.input)

        if ($phone) {
            new Maskito($phone, masks.phone)
        }
    }
})
