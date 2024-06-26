import Footer from './components/footer'
import GithubIcon from './components/githubIcon'
import MainSection from './components/mainSection'
import './style/main.scss'

function App() {
  return (
    <div className="container">
      <div>
        <GithubIcon />
        <MainSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
