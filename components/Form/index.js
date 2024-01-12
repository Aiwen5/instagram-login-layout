import Buttons from '../Button'
import styles from './Form.module.css'

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
                                    
                                    <input type="text" class="form-input" placeholder="Phone number, username, or email"/>
                                    <input type="password" class="form-input" placeholder="Password"/>
                                    <br></br>
                                    <Buttons></Buttons> 
                                    <br></br>
                                    
                                </div>
                                <div className={styles.lineBreak}>
                                    <hr width="40%" size="2"/>
                                    <div className="or">OR</div>
                                    <hr width="40%" size="2"/>
                                    
                                </div>
                            
                            
                            
                            </div>
                        </fieldset>
                    </form>
                </div>

            </div>
        </>
    )
}