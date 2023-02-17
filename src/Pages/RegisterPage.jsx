import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div className='container 75vh'>
        <div className='row mt-5'>
         <div className='col-md-5'>
                <div className='card'>
                <div className='card-header'>
                        <h3>Register as a <strong>Student</strong></h3>
                    </div>
                    <div className='card-body'>
                        <form>
                            <label className='mb-2 d-block' htmlFor='nickname'>Username</label>
                            <input className='mb-3 form-control' name= 'nickname' id='nickname' placeholder='Kullancı Adı'></input>

                            <label className='mb-2 d-block' htmlFor='mail'>Email</label>
                            <input className='mb-3 form-control' name='mail' id='mail' placeholder='Email' type={"email"}></input>
                            
                            <label className='mb-2 d-block' htmlFor='password'>Enter Your Password</label>
                            <input className='mb-3 form-control' name= 'password'  type="password" id='password' placeholder='Password'></input>

                            <label className='mb-2 d-block' htmlFor='passwordCheck'>Enter Your Password Again</label>
                            <input className='mb-3 form-control'  type="password" name= 'passwordCheck' id='passwordCheck' placeholder='Password'></input>

                            <button type='submit' className='btn w-100 btn-primary'>Register</button>
                        </form>
                    </div>
                </div>   
        </div>
        <div className='col-md-2' style={{textAlign:'center'}}>
            <h2>or</h2>
        </div>
        <div className='col-md-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Register as a <strong>Teacher</strong></h3>
                    </div>
                    <div className='card-body'>
                        <form>
                            <label className='mb-2 d-block' htmlFor='nickname'>Username</label>
                            <input className='mb-3 form-control' name= 'nickname' id='nickname' placeholder='Kullancı Adı'></input>

                            <label className='mb-2 d-block' htmlFor='mail'>Email</label>
                            <input className='mb-3 form-control' name='mail' id='mail' placeholder='Email' type={"email"}></input>
                            
                            <label className='mb-2 d-block' htmlFor='password'>Enter Your Password</label>
                            <input className='mb-3 form-control' name= 'password'  type="password" id='password' placeholder='Password'></input>

                            <label className='mb-2 d-block' htmlFor='passwordCheck'>Enter Your Password Again</label>
                            <input className='mb-3 form-control'  type="password" name= 'passwordCheck' id='passwordCheck' placeholder='Password'></input>

                            <button type='submit' className='btn w-100 btn-primary'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
