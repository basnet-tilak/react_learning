
import "../styles/RegistrationPage.css"

const RegistrationPage = () => {
    return (
        <>
            <div class="registrationContainer">

                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>

                <div class="form-group">
                    <label for="Full Name">Full-Name</label>
                    <input type="text" id="username" name="username" required />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div class="form-group">
                    <label for="contact">Contact</label>
                    <input type="number" id="contact" name="contact" required />
                </div>

                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" required />
                </div>
                <button type="submit">Register</button>
            </div>
        </>
    )
}
export default RegistrationPage;