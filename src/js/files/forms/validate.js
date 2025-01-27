//* Валидцаия форм
import JustValidate from 'just-validate'
import { flsModules } from '../modules.js'

document.querySelectorAll('.form').forEach((form) => {
  const validation = new JustValidate(form)
  validation
    .addField('.input-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function(_, item) {
          const phone = item['.input-tel']['elem'].inputmask.unmaskedvalue()
          return phone.length === 10
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => {
      const form = event.target
      let formData = new FormData(form)
      const formAction = form.getAttribute('action')
        ? form.getAttribute('action').trim()
        : '#'
      const formMethod = form.getAttribute('method')
        ? form.getAttribute('method').trim()
        : 'POST'
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            flsModules.popup.open('#thanks')
          }
        }
      }

      xhr.open(formMethod, formAction, true)
      xhr.send(formData)
      event.target.reset()
    })
})
