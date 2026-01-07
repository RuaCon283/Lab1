import './App.css'
import VietnamMap from './VietnamMap'

function App() {
  return (
    <div className="app-container">
      {/* Phần tiêu đề và thông tin cá nhân */}
      <div className="content">
        <h1>Trương Văn Vũ</h1>
        <h2>28/03/2003</h2>
        <h2>Bản đồ Việt Nam</h2>
      </div>

      {/* Phần bản đồ full-width */}
      <div className="map-wrapper">
        <VietnamMap />
      </div>
    </div>
  )
}

export default App
