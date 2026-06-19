import { useState } from 'react'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(2) // simulating network delay
    let r = await fetch('http://localhost:3000/', {
      method: 'post',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
    let result = await r.text()
    console.log(data, result)
    //   if (data.username !== 'Goku') {
    //     setError('myForm', { message: "Invalid Usename or Password" })
    //   }
    //   if (data.username === "Ravi") {
    //     setError('blocked', {
    //       message: (
    //         <>
    //           Congratulations Aapke Bhadwe Dost ne
    //           <br />
    //           uske sath aapko bhi block karva diya hai
    //           <br />
    //           Dost name = "Bansi"
    //         </>
    //       )
    //     })
    //   }
    //   if (data.username === "Bansi") {
    //     setError('blocked', {
    //       message: (
    //         <>
    //           "Sorry bina girl friend valo
    //           <br />
    //           ke liye yhan jgah nhin hai!"
    //         </>
    //       )
    //     })
    //   }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder='username'
            {...register('username', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 3, message: 'Min length is 3' },
              maxLength: { value: 8, message: 'Max length is 8' }
            })}
            type="text"
          /><br />
          {errors.username && errors.username.message}<br />

          <input
            placeholder='password'
            {...register('password', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 3, message: 'Min length is 3' },
              maxLength: { value: 8, message: 'Max length is 8' }
            })}
            type="password"
          /><br />
          {errors.password && errors.password.message}<br />

          <input disabled={isSubmitting} type="submit" value="Submit" />
          <div>{errors.myForm && errors.myForm.message}</div><br />
          <div>{errors.blocked && errors.blocked.message}</div><br />
        </form>
      </div>
    </>
  )
}

export default App   