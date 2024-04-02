import React, { type FormEventHandler } from 'react'

interface FormData {
  email: string
}

interface FormErrors {
  email: boolean
}

function Form() {
  const [formData, setFormData] = React.useState<FormData>({ email: '' });
  const [errors, setErrors] = React.useState<FormErrors>({ email: false });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: true })
      return
    }

    setErrors({ ...errors, email: false })
    window.location.href = '/success'
  }

  return (
    <form onSubmit={handleSubmit} className='my-8'>
      <div className='flex justify-between items-center'>
        <label htmlFor='email' className='mb-3 text-dark-slate-grey text-sm font-bold'>Email address</label>
        {errors.email && <span className='text-tomato text-sm font-bold'>Valid email required</span>}
      </div>
      <input
        type='text'
        name='email'
        id='email'
        placeholder='email@company.com'
        onChange={handleInputChange}
        value={formData.email}
        className={`p-5 w-full rounded-lg border-solid border-[1px] ${errors.email ? 'border-tomato bg-[#ff625730] text-tomato' : 'border-grey'}`}
      />
      <button
        type='submit'
        className='
          text-white
          bg-dark-slate-grey
          w-full
          p-5
          mt-6
          rounded-lg
          font-bold
          font-roboto
          spacing
          tracking-wide
          transition-btn
          hover-btn'
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}

export default Form