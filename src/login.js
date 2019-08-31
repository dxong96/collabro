import React from 'react'
function Login(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
	return <div className="row justify-content-center">
      <div className="col-lg-5">
        <div className="card bg-secondary shadow border-0">
          <div className="card-body px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <form>
              <div className="form-group mb-3">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                  </div>
                  <input className="form-control" placeholder="Email" type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                  </div>
                  <input className="form-control" placeholder="Password" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input className="custom-control-input" id="customCheckLogin" type="checkbox"/>
                <label className="custom-control-label" htmlFor="customCheckLogin">
                  <span>Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary my-4"
                  onClick={() => props.onSignIn(email, password)}
                >Sign in</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <a href="#" className="text-light"><small>Forgot password?</small></a>
          </div>
          <div className="col-6 text-right">
            <a href="#" className="text-light"><small>Create new account</small></a>
          </div>
        </div>
      </div>
    </div>
}

export default Login