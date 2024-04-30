import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {useLocation} from 'react-router'

ReactDOM.render(
  <Router>
    <TestApp />
  </Router>,
  document.getElementById('root'),
)

function TestApp() {
  const location = useLocation()
  return (
    <div>
      <h1>Test App</h1>
    </div>
  )
}
