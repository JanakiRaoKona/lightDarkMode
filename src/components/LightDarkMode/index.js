import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeThemeMode = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    const {isDarkMode} = this.state

    return (
      <div className="container">
        <div className={isDarkMode ? 'theme-container' : 'dark-container'}>
          <h1 className={isDarkMode ? 'heading' : 'white-theme-heading'}>
            Click to Change Mode
          </h1>
          <button
            className="button"
            type="button"
            onClick={this.changeThemeMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
