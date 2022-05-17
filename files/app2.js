const MakeTerms = (terms) => {
  let model = document.createElement('div')
  model.classList.add(
    'fixed',
    'inset-0',
    'backdrop-blur',
    'flex',
    'justify-center',
    'items-center'
  )

  let inner = document.createElement('div')
  inner.classList.add(
    'flex',
    'flex-col',
    'justify-center',
    'rounded-xl',
    'bg-red-500',
    'px-10',
    'py-4',
    'm-16',
    'max-w-3xl',
    'shadow-lg',
    'ring-4',
    'ring-red-600'
  )

  let title = document.createElement('div')
  title.classList.add(
    'text-white',
    'text-4xl',
    'flex',
    'justify-center',
    'mb-4'
  )
  title.innerText = 'Terms and Conditions'

  let text = document.createElement('div')
  text.classList.add('text-white', 'mb-8')
  text.innerText = terms

  let form = document.createElement('form')
  form.classList.add('flex', 'justify-center', 'items-center', 'gap-2')

  let label = document.createElement('label')
  label.for = 'checkbox'
  label.classList.add('text-white', 'text-lg')
  label.innerText = 'Agree'

  let input = document.createElement('input')
  input.type = 'checkbox'
  input.id = 'checkbox'

  let button = document.createElement('button')
  button.type = 'submit'
  button.classList.add(
    'flex',
    'px-2',
    'bg-teal-500',
    'hover:bg-teal-600',
    'rounded',
    'h-8',
    'justify-center',
    'items-center',
    'text-white'
  )

  button.innerText = 'Continue'

  form.appendChild(label)
  form.appendChild(input)
  form.appendChild(button)

  inner.appendChild(title)
  inner.appendChild(text)
  inner.appendChild(form)

  model.appendChild(inner)

  let link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/gh/dcralph/dcralph/files/tailwind.css'

  document.head.appendChild(link)
  document.body.appendChild(model)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('yes')
    if (!input.checked) {
      alert('Please accept the terms and conditions')
      return
    }
    // model.classList.add('hidden')
    document.body.removeChild(model)
  })
}
