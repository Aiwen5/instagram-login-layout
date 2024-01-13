import Buttons from '../Button'
import styles from './Form.module.css'
import Footer from '../Footer'

export default function() {
    return(
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldSet}>
                            <img className='instagramLogo' src='./image/instagramName.png' alt="instagram" width="180px"></img>
                            
                            <div className='container'>
        
                                <div className="login-container">
                                    
                                    <input type="text" className="form-input" placeholder="Phone number, username, or email"/>
                                    <input type="password" className="form-input" placeholder="Password"/>
                                    <br></br>
                                    <Buttons></Buttons> 
                                    <br></br>
                                    
                                </div>
                                <div className={styles.lineBreak}>
                                    <div className="or">OR</div>
                                </div>
                                <div>
                                    <a className='facebook' href='www.facebook.com'>Log in with Facebook</a>
                                </div>
                                <br></br>
                                <div>
                                    <a className='forgot' href=''>Forgot password?</a>
                                </div>
                            
                            
                            
                            </div>
                        </fieldset>
                        
                    </form>
                    
                </div>
                <div className={styles.signUpBox}>
                    <p>Don't have an account? <a href=''>Sign up</a></p>
                </div>
                <div className='getTheApp'>
                    <p>Get the app.</p>
                </div>
                <Footer></Footer>
            
            </div>
        </>
    )
}