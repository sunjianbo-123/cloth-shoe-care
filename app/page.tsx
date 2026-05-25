"use client";

import { FormEvent, useState } from "react";

const serviceCards = [
  {
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=720&q=80",
    alt: "挂放整齐的衣物",
    title: "衣物精洗",
    body: "衬衫、外套、羊毛、真丝、羽绒按面料分区洗护。",
    price: "¥19 起",
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=720&q=80",
    alt: "一双干净运动鞋",
    title: "鞋履清洁",
    body: "球鞋、帆布、麂皮、皮靴深层去渍、除味和护理。",
    price: "¥39 起",
  },
  {
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=720&q=80",
    alt: "皮具包袋细节",
    title: "皮具养护",
    body: "包袋、皮衣、钱包补色、滋养、防霉和边角修复。",
    price: "¥89 起",
  },
  {
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=720&q=80",
    alt: "整洁卧室家纺",
    title: "家纺除螨",
    body: "床品、窗帘、地毯清洗消杀，干爽封装送回。",
    price: "¥29 起",
  },
];

const processItems = [
  ["01", "拍照建档", "记录品牌、材质、污渍、磨损和附件，生成取件凭证。"],
  ["02", "分检预处理", "油渍、泥渍、汗渍、霉点先局部处理，再进入对应洗护线。"],
  ["03", "精洗与定型", "低温清洗、柔护漂洗、自然烘干，鞋履做鞋楦支撑定型。"],
  ["04", "质检封装", "复查洁净度、手感、气味和形态，独立防尘包装。"],
];

const pricingRows = [
  ["基础衣物洗护", "衬衫、T恤、休闲裤、针织衫", "¥19-49"],
  ["高端衣物护理", "西装、大衣、真丝、羊绒、羽绒", "¥59-199"],
  ["鞋履深度清洁", "运动鞋、帆布鞋、皮鞋、靴子", "¥39-129"],
  ["皮具护理修复", "包袋、皮衣、钱包、皮带", "¥89 起"],
  ["家纺清洗除螨", "四件套、被芯、窗帘、地毯", "¥29 起"],
];

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=82",
    alt: "整洁洗衣空间",
    label: "独立分区操作台",
  },
  {
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=720&q=82",
    alt: "衣物护理细节",
    label: "衣物护理",
  },
  {
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=720&q=82",
    alt: "干净鞋履陈列",
    label: "鞋履养护",
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=720&q=82",
    alt: "干净家居织物",
    label: "家纺清洁",
  },
  {
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=720&q=82",
    alt: "清洁护理用品",
    label: "护理用品",
  },
];

const reviewStats = [
  ["4.9", "近 30 天到店评分"],
  ["82%", "复购客户占比"],
  ["1,200+", "累计洗护件数"],
];

const reviews = [
  {
    body: "白色运动鞋边缘发黄处理得很干净，取回时鞋型也撑好了，不是软塌塌的一双。",
    reviewer: "陈先生",
    service: "鞋履清洁",
    detail: "同城取送 · 2 双球鞋",
  },
  {
    body: "羊绒大衣洗完没有变硬，门店提前说明了袖口旧磨损不能完全恢复，沟通很清楚。",
    reviewer: "周女士",
    service: "高端衣物护理",
    detail: "到店送洗 · 羊绒大衣",
  },
  {
    body: "上门取送比较省事，窗帘拆洗后封装送回，家里没有洗后潮味。",
    reviewer: "王女士",
    service: "家纺除螨",
    detail: "上门取送 · 客厅窗帘",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsToastVisible(true);
    window.setTimeout(() => setIsToastVisible(false), 2800);
  }

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="净履衣橱首页" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true" />
            <span>净履衣橱</span>
          </a>
          <div className={`nav-links${isMenuOpen ? " is-open" : ""}`} id="navLinks">
            <a href="#services" onClick={closeMenu}>洗护项目</a>
            <a href="#process" onClick={closeMenu}>洗护流程</a>
            <a href="#pricing" onClick={closeMenu}>价目预约</a>
            <a href="#location" onClick={closeMenu}>门店信息</a>
          </div>
          <div className="nav-actions">
            <a className="btn btn-primary" href="#booking">立即预约</a>
            <button
              className="icon-button"
              type="button"
              aria-label="展开导航"
              aria-controls="navLinks"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              <span className="hamburger" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="净履衣橱洗护店">
          <div className="hero-bg" aria-hidden="true">
            <img className="hero-slide" src="/assets/hero-reception.png" alt="" fetchPriority="high" />
            <img className="hero-slide" src="/assets/hero-shoe-care.png" alt="" />
            <img className="hero-slide" src="/assets/hero-garment-care.png" alt="" />
          </div>
          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow">衣物与鞋履专业洗护</p>
              <h1>让常穿的更耐穿</h1>
              <p className="hero-copy">从衬衫西装到球鞋皮靴，按材质分检、手工预处理、低温精洗和定型养护，支持同城取送与到店急件。</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#booking">预约取送</a>
                <a className="btn btn-secondary" href="#pricing">查看价目</a>
              </div>
              <div className="hero-metrics" aria-label="门店服务数据">
                <div className="metric">
                  <strong>24h</strong>
                  <span>常规订单出检测报告</span>
                </div>
                <div className="metric">
                  <strong>7类</strong>
                  <span>面料与鞋材分线处理</span>
                </div>
                <div className="metric">
                  <strong>3km</strong>
                  <span>门店周边免费取送</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="kicker">Services</p>
                <h2>衣服、鞋子、皮具和家纺，一店处理。</h2>
              </div>
              <p>每件物品先做材质和污渍评估，再确认洗护方案。特殊污渍、染色风险、老化开胶都会提前沟通。</p>
            </div>

            <div className="service-grid">
              {serviceCards.map((service) => (
                <article className="service-card" key={service.title}>
                  <img src={service.image} alt={service.alt} />
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                    <span className="price">{service.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split" id="process">
          <div className="section-inner split-layout">
            <div>
              <p className="kicker">Process</p>
              <h2>透明流程，拿回去之前你知道每一步。</h2>
              <div className="process-list">
                {processItems.map(([step, title, body]) => (
                  <div className="process-item" key={step}>
                    <span className="step">{step}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="media-panel">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=82" alt="洗护工作台上的清洁工具" />
              <div className="status-strip" aria-label="洗护状态">
                <span>已建档</span>
                <span>洗护中</span>
                <span>待取回</span>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="kicker">Pricing</p>
                <h2>常用项目明码标价，疑难件先评估再报价。</h2>
              </div>
              <p>以下为基础服务价，实际价格会根据材质、污染程度、尺寸和修复需求确认。</p>
            </div>

            <div className="pricing-layout">
              <div className="table-wrap">
                <table aria-label="洗护价目表">
                  <thead>
                    <tr>
                      <th>项目</th>
                      <th>适用范围</th>
                      <th>参考价</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingRows.map(([name, scope, price]) => (
                      <tr key={name}>
                        <td><strong>{name}</strong></td>
                        <td>{scope}</td>
                        <td>{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <aside className="booking" id="booking" aria-label="预约表单">
                <h3>预约洗护</h3>
                <p>提交后门店会在营业时间内联系你确认件数、取送地址和预估时间。</p>
                <form className="form-grid" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label>
                      姓名
                      <input name="name" autoComplete="name" required placeholder="如：李小姐" />
                    </label>
                    <label>
                      手机
                      <input name="phone" autoComplete="tel" required inputMode="tel" placeholder="用于确认订单" />
                    </label>
                  </div>
                  <label>
                    洗护项目
                    <select name="service" required defaultValue="">
                      <option value="">请选择</option>
                      <option>衣物精洗</option>
                      <option>鞋履清洁</option>
                      <option>皮具养护</option>
                      <option>家纺除螨</option>
                      <option>多项目组合</option>
                    </select>
                  </label>
                  <div className="form-row">
                    <fieldset className="delivery-field">
                      <legend>取送方式</legend>
                      <div className="delivery-options">
                        <label className="delivery-option">
                          <input type="radio" name="pickup" value="上门取货" required />
                          <span>上门取货</span>
                        </label>
                        <label className="delivery-option">
                          <input type="radio" name="pickup" value="到店送洗" defaultChecked required />
                          <span>到店送洗</span>
                        </label>
                      </div>
                    </fieldset>
                    <label>
                      期望时间
                      <input type="date" name="date" required />
                    </label>
                  </div>
                  <label>
                    备注
                    <textarea name="notes" placeholder="例如：两双白鞋，一件羊毛大衣，有咖啡渍" />
                  </label>
                  <button className="btn btn-primary" type="submit">提交预约</button>
                </form>
              </aside>
            </div>
          </div>
        </section>

        <section className="gallery" aria-label="门店洗护实景">
          <div className="section-inner gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-item" key={item.label}>
                <img src={item.image} alt={item.alt} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="reviews">
          <div className="section-inner">
            <div className="reviews-header">
              <div className="section-heading reviews-heading">
                <div>
                  <p className="kicker">Reviews</p>
                  <h2>适合日常复购，也能处理心疼的贵重件。</h2>
                </div>
                <p>门店保留每件物品的洗护记录，复洗时能延续上次的材质判断和护理方式。</p>
              </div>

              <div className="review-score" aria-label="客户评价数据">
                {reviewStats.map(([value, label]) => (
                  <div className="review-stat" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.reviewer}>
                  <div className="review-card-top">
                    <div className="stars" aria-label="五星评价">★★★★★</div>
                    <span>{review.service}</span>
                  </div>
                  <p>{review.body}</p>
                  <div className="reviewer">
                    <span>{review.reviewer}</span>
                    <small>{review.detail}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="location">
          <div className="section-inner location-layout">
            <div className="info-panel">
              <p className="kicker">Visit</p>
              <h2>到店或预约取送都可以。</h2>
              <h3>净履衣橱洗护店</h3>
              <ul className="info-list">
                <li><strong>地址</strong>长春市南关区太原东街 116 号嘉柏湾小区</li>
                <li><strong>营业时间</strong>周一至周日 09:30-21:00</li>
                <li><strong>联系电话</strong>021-6888 9012</li>
                <li><strong>取送范围</strong>门店 3 公里内免费，超出范围按距离计费</li>
              </ul>
            </div>
            <div className="map-frame">
              <img src="/assets/location-map-ai.png" alt="门店位于长春市南关区太原东街116号嘉柏湾小区，地图用红色箭头标出嘉柏湾位置" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span><strong>净履衣橱</strong> | 衣物、鞋履、皮具、家纺专业洗护</span>
          <span>沪ICP备示例号 · 支持企业团洗与长期托管</span>
        </div>
      </footer>

      <div className={`toast${isToastVisible ? " is-visible" : ""}`} role="status" aria-live="polite">
        预约已记录，门店会尽快联系你确认。
      </div>
    </>
  );
}
