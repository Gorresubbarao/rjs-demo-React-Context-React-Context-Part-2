import {Component} from 'react'

import LanguageContext from './context/LanguageContext'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    // console.log('activeLanguage changeLanguage', activeLanguage)
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    // console.log('activeLanguage render', activeLanguage)
    return (
      <LanguageContext.Provider
        value={{
          activeLanguage,
          changeLanguage: this.changeLanguage,
        }}
      >
        <Header />
        <LandingSection />
        <FeaturesSection />
      </LanguageContext.Provider>
    )
    // console.log('value render', value)
  }
}

export default App
