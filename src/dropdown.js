import '@/dropdown.css'

const dropdown = document.querySelector('.dropdown')
const btn = document.querySelector('.dropdown__btn')
const list = document.querySelector('.dropdown__list')

const ERROR_MESSAGES = {
  dropdown: 'The element .dropdown was not found',
  btn: 'The element .dropdown__btn was not found',
  list: 'The element .dropdown__list was not found',
  trigger:
    "The trigger type selected is unknown. Please select 'click' or 'hover'.",
}

const elements = { dropdown, btn, list }

for (const [key, element] of Object.entries(elements)) {
  if (!element) {
    console.error(`Dropdown error: ${ERROR_MESSAGES[key]}`)
  }
}

try {
  const triggerType = btn.dataset.trigger

  list.classList.add('dropdown__list--hidden')

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
    const id = dropdown.id || 'No id found'
    console.error(
      `Dropdown error: ${ERROR_MESSAGES.trigger}\n\nDropdown ID: ${id}`,
    )
  }
} catch (error) {
  console.error(error)
}
