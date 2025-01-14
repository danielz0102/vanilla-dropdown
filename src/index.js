import './index.css'

const ERROR_MESSAGES = {
  btn: 'The element .dropdown__btn was not found',
  list: 'The element .dropdown__list was not found',
  trigger:
    "The trigger type selected is unknown. Please select 'click' or 'hover'.",
}

export default function setupDropdown(dropdown) {
  const btn = dropdown.querySelector('.dropdown__btn')
  const list = dropdown.querySelector('.dropdown__list')
  const elements = { btn, list }

  for (const [key, element] of Object.entries(elements)) {
    if (!element) {
      console.error(`Dropdown error: ${ERROR_MESSAGES[key]}`)
    }
  }

  try {
    const triggerType = btn.dataset.trigger
    const fade = list.hasAttribute('data-fade')
    const id = dropdown.id || 'No id found'

    list.classList.add('dropdown__list--hidden')

    if (fade) list.classList.add('dropdown__list--fade')

    if (triggerType === 'click') {
      btn.addEventListener('click', (e) => {
        list.classList.toggle('dropdown__list--hidden')
      })
    } else if (triggerType === 'hover') {
      btn.addEventListener('mouseenter', (e) => {
        list.classList.remove('dropdown__list--hidden')
      })

      dropdown.addEventListener('mouseleave', (e) => {
        list.classList.add('dropdown__list--hidden')
      })
    } else {
      console.error(
        `Dropdown error: ${ERROR_MESSAGES.trigger}\n\nDropdown ID: ${id}`,
      )
    }
  } catch (error) {
    console.error(error)
  }
}
