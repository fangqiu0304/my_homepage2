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
              {/* 新增导航项 */}
              <li><a href="#project" className="nav-link">数据分析工具</a></li>
              <li><a href="#learning" className="nav-link">学习复盘</a></li>
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
                <button onClick={() => document.getElementById('case').scrollIntoView({behavior: 'smooth'})}>查看编程学习成果</button>
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
              {/* 新增时间轴项目 */}
              <div className="timeline-item">
                <h4>技术项目开发</h4>
                <p>独立开发短视频数据分析工具，结合Python数据处理与React前端展示，将技术能力应用于实际业务场景。</p>
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

      {/* 新增：短视频数据分析工具项目展示 */}
      <section id="case" className="project section">
        <div className="container">
          <h2>短视频数据分析工具项目展示</h2>
          <div className="project-intro">
            <p>这个短视频数据分析工具，是我为解决财经内容创作中的痛点开发的 —— 它能自动抓取并整理多平台视频数据，快速生成选题参考和内容复盘报告，帮我把从数据里找灵感的时间缩短了 80%。开发过程中我用 Python 做数据爬取和清洗，Supabase 存结构化数据，再用 React 搭了前端可视化界面，算是把这门课的知识点串起来做了个实战项目。</p>
          <img src="/tool_screenshot_1.png" alt="短视频分析工具截图" style={{maxWidth: '100%', margin: '1rem 0', borderRadius: '8px'}} />
<img src="/tool_screenshot_2.png" alt="Supabase数据截图" style={{maxWidth: '100%', margin: '1rem 0', borderRadius: '8px'}} />
          </div>
          
          <div className="project-features">
            <h3>项目核心功能</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h4>多平台数据采集</h4>
                <p>支持抖音、B站、YouTube等主流平台的数据抓取，自动获取播放量、点赞、评论等关键指标。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h4>趋势分析与预测</h4>
                <p>基于历史数据，分析内容趋势变化，预测热门话题和最佳发布时间点。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>竞品分析模块</h4>
                <p>跟踪竞争对手内容表现，提供差异化策略建议和内容优化方向。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h4>响应式数据仪表板</h4>
                <p>适配PC和移动端的可视化界面，直观展示关键数据指标和变化趋势。</p>
              </div>
            </div>
          </div>

          <div className="project-tech">
            <h3>技术架构与实现</h3>
            <div className="tech-stack">
              <div className="tech-category">
                <h4>后端技术栈</h4>
                <ul>
                  <li><strong>Python</strong> - 数据处理与分析核心</li>
                  <li><strong>Flask</strong> - 轻量级Web框架构建API</li>
                  <li><strong>Pandas/Numpy</strong> - 数据清洗与计算</li>
                  <li><strong>Requests/Selenium</strong> - 数据采集与自动化</li>
                  <li><strong>SQLite</strong> - 本地数据存储</li>
                </ul>
              </div>
              <div className="tech-category">
                <h4>前端技术栈</h4>
                <ul>
                  <li><strong>React</strong> - 构建交互式用户界面</li>
                  <li><strong>Chart.js</strong> - 数据可视化图表</li>
                  <li><strong>CSS3/Flexbox</strong> - 响应式布局设计</li>
                  <li><strong>Axios</strong> - API请求处理</li>
                  <li><strong>React Router</strong> - 页面路由管理</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-screenshot">
            <h3>项目界面展示</h3>
            <div className="screenshot-placeholder">
              <div className="screenshot-desc">
                <p>数据分析仪表板 - 展示关键指标和趋势变化</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 新增：学习复盘板块 */}
      <section id="learning" className="learning section">
        <div className="container">
          <h2>技术学习复盘与总结</h2>
          <p className="section-subtitle">从短视频数据分析工具项目中，我系统地学习和实践了以下技术知识：</p>
          
          <div className="learning-content">
            <div className="learning-category">
              <h3>Python技能提升</h3>
              <div className="learning-item">
                <h4>数据处理与分析</h4>
                <ul>
                  <li>掌握了Pandas进行数据清洗、转换和聚合操作</li>
                  <li>使用NumPy进行数值计算和统计分析</li>
                  <li>实践了数据可视化库Matplotlib和Seaborn</li>
                </ul>
              </div>
              <div className="learning-item">
                <h4>Web开发与API构建</h4>
                <ul>
                  <li>使用Flask框架搭建RESTful API接口</li>
                  <li>实现前后端分离架构，处理跨域请求</li>
                  <li>设计合理的数据库模型和API响应格式</li>
                </ul>
              </div>
              <div className="learning-item">
                <h4>数据采集与自动化</h4>
                <ul>
                  <li>使用Requests库获取网页数据</li>
                  <li>掌握Selenium进行动态网页内容抓取</li>
                  <li>实现定时任务自动化数据更新</li>
                </ul>
              </div>
            </div>

            <div className="learning-category">
              <h3>前端开发技能提升</h3>
              <div className="learning-item">
                <h4>React核心概念</h4>
                <ul>
                  <li>深入理解组件化开发和Props/State管理</li>
                  <li>掌握Hooks（useState, useEffect, useContext）的使用</li>
                  <li>实现条件渲染和列表渲染的最佳实践</li>
                </ul>
              </div>
              <div className="learning-item">
                <h4>状态管理与数据流</h4>
                <ul>
                  <li>使用Context API进行全局状态管理</li>
                  <li>掌握组件间通信的多种方式</li>
                  <li>实现复杂表单的状态管理和验证</li>
                </ul>
              </div>
              <div className="learning-item">
                <h4>UI/UX与响应式设计</h4>
                <ul>
                  <li>实践现代CSS布局（Flexbox, Grid）</li>
                  <li>实现移动端优先的响应式设计</li>
                  <li>优化页面加载性能和用户体验</li>
                </ul>
              </div>
            </div>

            <div className="learning-category full-width">
              <h3>项目开发经验总结</h3>
              <div className="project-insights">
                <div className="insight-card">
                  <h4>需求分析与规划</h4>
                  <p>从财经内容创作的实际需求出发，明确工具的核心功能和使用场景，避免过度工程化。</p>
                </div>
                <div className="insight-card">
                  <h4>技术选型与权衡</h4>
                  <p>选择轻量级技术栈，平衡开发效率与项目复杂度，确保项目可维护性和扩展性。</p>
                </div>
                <div className="insight-card">
                  <h4>问题解决能力</h4>
                  <p>在开发过程中遇到数据源变动、API限制等技术挑战，通过查阅文档和社区资源找到解决方案。</p>
                </div>
                <div className="insight-card">
                  <h4>持续迭代优化</h4>
                  <p>基于实际使用反馈，不断优化功能设计和用户体验，形成开发-测试-改进的良性循环。</p>
                </div>
              </div>
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