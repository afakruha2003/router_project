import React, { useState } from 'react'

const Login = ({ isLogin, setIsLogin }) => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  //useStateSnippet
  //arrow function kullandığın zaman daha sonra onu başka bir yerde kullanmaya çalıştığında ( ) koymana gerek yok
  const handleSubmit = (e) => {
    e.preventDefault();//bu aslında sayfanın yenilemnmesini engelliyor
    setIsLogin(true);



    //burada login olunduktan sonra form sıfırlansın işlemi yapıyoruz
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>

      <form className='login' onSubmit={handleSubmit} >
        <h1 className='text-center my-3'>Login</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputSurname" className="form-label">Surname</label>
          <input type="text" className="form-control" id="exampleInputSurname" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Login






