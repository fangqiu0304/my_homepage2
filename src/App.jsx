import { useState } from 'react'
import './App.css'

function App() {
  const [showChat, setShowChat] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo">方遒</a>
            <ul className="nav-links">
              <li><a href="#about" className="nav-link">关于我</a></li>
              <li><a href="#ai" className="nav-link">AI探索</a></li>
              <li><a href="#media" className="nav-link">财经自媒体</a></li>
              <li><a href="#cases" className="nav-link">运营案例</a></li>
              <li><a href="#ai-tools" className="nav-link">AI工具</a></li>
              <li><a href="#contact" className="nav-link">保持联系</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in">
              <h1 className="hero-title">方遒</h1>
              <p className="hero-subtitle">专注两大领域</p>
              <ul className="hero-subtitle" style={{ listStyle: 'none', padding: 0 }}>
                <li>1. 用短视频讲清财经逻辑</li>
                <li>2. 为品牌制定新媒体内容策略</li>
              </ul>
              <p className="hero-subtitle">同时，探索AI如何赋能两者</p>
              <div className="hero-buttons">
                <button>查看我的运营案例</button>
                <button>与我的AI对话</button>
              </div>
            </div>
            <div className="hero-image fade-in">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20a%20financial%20content%20creator%20and%20digital%20marketing%20expert%2C%20confident%20pose%2C%20modern%20background%2C%20high%20quality%2C%20professional%20lighting&image_size=portrait_4_3" 
                alt="方遒" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <h2>关于我 - 方遒</h2>
          <div className="about-content">
            <div>
              <p>作为横跨财经内容创作、品牌新媒体运营及AI技术学习三大领域的实践者，我致力于用简洁明了的方式传递复杂的财经知识，为品牌打造有影响力的新媒体策略，并探索AI技术在内容创作和运营中的应用。</p>
              <p>我的独特优势在于将专业的财经知识与创意的内容形式相结合，同时运用数据驱动的方法优化运营效果，帮助品牌在竞争激烈的数字环境中脱颖而出。</p>
            </div>
            <div className="timeline">
              <h3>跨界学习时间轴</h3>
              <div className="timeline-item">
                <h4>财经内容创作</h4>
                <p>创建"财经少废话"自媒体矩阵，专注于用短视频形式解读复杂财经话题，获得广泛关注。</p>
              </div>
              <div className="timeline-item">
                <h4>新媒体运营</h4>
                <p>为周大福、东风风神等品牌提供新媒体运营服务，制定内容策略并执行，取得显著效果。</p>
              </div>
              <div className="timeline-item">
                <h4>AI学习与应用</h4>
                <p>深入学习AI技术，开发行业热词追踪助手、多平台标题优化器等工具，提升工作效率。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="media section">
        <div className="container">
          <h2>财经自媒体 - "财经少废话"</h2>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-thumbnail">📹</div>
              <div className="video-info">
                <h3>2024年投资趋势分析</h3>
                <p>解读2024年主要投资方向和市场机会，帮助投资者制定合理的资产配置策略。</p>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumbnail">📹</div>
              <div className="video-info">
                <h3>如何理解财报中的关键指标</h3>
                <p>用简单易懂的方式解释财报中的重要指标，帮助投资者快速判断公司财务状况。</p>
              </div>
            </div>
            <div className="video-card">
              <div className="video-thumbnail">📹</div>
              <div className="video-info">
                <h3>个人理财的五大误区</h3>
                <p>揭示个人理财中常见的误区，提供科学的理财方法和建议。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="cases section">
        <div className="container">
          <h2>新媒体运营案例库</h2>
          <div className="case-grid">
            <div className="case-card">
              <h3>周大福 - 品牌新媒体策略</h3>
              <h4>项目背景与目标</h4>
              <p>帮助周大福在年轻消费者群体中提升品牌认知度，增加社交媒体互动率。</p>
              <h4>核心工作</h4>
              <p>内容策划、脚本撰写、全平台运营、数据分析与优化。</p>
              <h4>策略与创意</h4>
              <p>结合节日热点和年轻人兴趣点，打造系列主题内容，增强品牌与消费者的情感连接。</p>
            </div>
            <div className="case-card">
              <h3>东风风神 - 产品推广</h3>
              <h4>项目背景与目标</h4>
              <p>为东风风神新款车型上市策划新媒体推广活动，提升关注度和试驾转化率。</p>
              <h4>核心工作</h4>
              <p>内容创意、KOL合作、社交媒体投放、活动执行与监测。</p>
              <h4>策略与创意</h4>
              <p>通过沉浸式体验和互动玩法，让用户深入了解产品特点，激发购买兴趣。</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai" className="ai section">
        <div className="container">
          <h2>AI探索与实践</h2>
          <div id="ai-tools" className="ai-tools">
            <div className="tool-card">
              <h3>AI工具推荐</h3>
              <h4>内容创作工具</h4>
              <p>推荐几款在财经内容创作中实际使用的AI工具，附简短使用心得。</p>
              <h4>运营增效工具</h4>
              <p>分享提升新媒体运营效率的AI工具，包括数据分析、用户画像等方面。</p>
            </div>
            <div className="tool-card">
              <h3>我的AI小应用</h3>
              <h4>行业热词追踪助手</h4>
              <p>自动监控财经领域热点词汇，为内容创作提供灵感和方向。</p>
              <h4>多平台标题优化器</h4>
              <p>根据不同平台特性，智能生成最适合的标题，提高内容点击率。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <h2>保持联系</h2>
          <div className="contact-info">
            <p>合作咨询邮箱：contact@fangqiu.com</p>
            <div className="social-links">
              <a href="#" className="social-link">领英</a>
              <a href="#" className="social-link">微信</a>
              <a href="#" className="social-link">抖音</a>
              <a href="#" className="social-link">B站</a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <div className="ai-assistant">
        <button 
          className="chat-button" 
          onClick={() => setShowChat(!showChat)}
        >
          💬
        </button>
        {showChat && (
          <div className="chat-window">
            <div className="chat-header">对话方遒</div>
            <div className="chat-messages">
              <p style={{ textAlign: 'left', marginBottom: '1rem' }}><strong>AI助手：</strong>你好！我是方遒的AI数字分身，有什么可以帮你的吗？</p>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="输入你的问题..." />
              <button>发送</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
