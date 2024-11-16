export default function ChangePassword() {
    return (
      <div>
        <h1>Change Password</h1>
        <form>
          <div>
            <label htmlFor="newPassword">New Password</label>
            <input type="password" id="newPassword" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
  