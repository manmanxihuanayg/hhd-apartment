// H5应用主逻辑
let currentLanguage = 'zh';
let currentFilter = 'all';

// 语言包
const i18n = {
  zh: {
    app_title: "华海达公寓",
    slogan: "您的理想居住空间",
    tagline: "核心地段•精装品质•24h安保",
    all_units: "全部房源",
    studio: "大单间",
    bedroom_1: "一居室",
    bedroom_2: "两居室",
    area: "面积",
    floor: "楼层",
    per_month: "/月",
    about_title: "关于我们",
    description: "房源描述",
    facilities: "配套设施",
    gallery: "房源相册"
  },
  en: {
    app_title: "HHD APARTMENT",
    slogan: "Your Ideal Living Space",
    tagline: "Prime Location • Premium Quality • 24h Security",
    all_units: "All Units",
    studio: "Studio",
    bedroom_1: "1 Bedroom",
    bedroom_2: "2 Bedrooms",
    area: "Area",
    floor: "Floor",
    per_month: "/month",
    about_title: "About Us",
    description: "Description",
    facilities: "Facilities",
    gallery: "Photo Gallery"
  },
  th: {
    app_title: "HHD APARTMENT",
    slogan: "พื้นที่อยู่อาศัยที่เหมาะสม",
    tagline: "ทำเลที่ดี • คุณภาพเยี่ยม • รักษาความปลอดภัย 24 ชม",
    all_units: "ทุกห้อง",
    studio: "สตูดิโอ",
    bedroom_1: "1 ห้องนอน",
    bedroom_2: "2 ห้องนอน",
    area: "พื้นที่",
    floor: "ชั้น",
    per_month: "/เดือน",
    about_title: "เกี่ยวกับเรา",
    description: "คำอธิบาย",
    facilities: "สิ่งอำนวยความสะดวก",
    gallery: "แกลเลอรี่รูปภาพ"
  }
};

// 获取翻译
function t(key) {
  return i18n[currentLanguage][key] || key;
}

// 获取房源类型
function getPropertyType(type) {
  const typeMap = {
    studio: {
      zh: '开间',
      en: 'Studio',
      th: 'สตูดิโอ'
    },
    bedroom_1: {
      zh: '一居室',
      en: '1 Bedroom',
      th: '1 ห้องนอน'
    },
    bedroom_2: {
      zh: '两居室',
      en: '2 Bedrooms',
      th: '2 ห้องนอน'
    }
  };
  return typeMap[type]?.[currentLanguage] || type;
}

// 更新界面语言
function updateLanguage() {
  document.getElementById('appTitle').textContent = t('app_title');
  document.getElementById('slogan').textContent = t('slogan');
  document.getElementById('tagline').textContent = t('tagline');
  document.getElementById('languageLabel').textContent = currentLanguage === 'zh' ? '语言' : currentLanguage === 'en' ? 'Language' : 'ภาษา';
  document.getElementById('allUnits').textContent = t('all_units');
  document.getElementById('studio').textContent = t('studio');
  document.getElementById('aboutTitle').textContent = t('about_title');
  
  document.title = t('app_title');
  
  renderProperties();
}

// 切换语言
function changeLanguage(lang) {
  currentLanguage = lang;
  
  // 更新语言按钮状态
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  updateLanguage();
}

// 切换筛选
function changeFilter(filter) {
  currentFilter = filter;
  
  // 更新筛选按钮状态
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.filter === filter) {
      tab.classList.add('active');
    }
  });
  
  renderProperties();
}

// 渲染房源列表
function renderProperties() {
  const container = document.getElementById('propertyList');
  let filteredProperties = properties;
  
  if (currentFilter !== 'all') {
    filteredProperties = properties.filter(item => item.type === currentFilter);
  }
  
  container.innerHTML = filteredProperties.map(item => `
    <div class="property-card" onclick="showDetail('${item.id}')">
      <img src="${item.images[0]}" alt="${item.name}" class="property-image">
      
      <div class="property-type-badge">
        <span class="type-badge-text">${getPropertyType(item.type)}</span>
      </div>
      
      <div class="property-info">
        <div class="property-header">
          <h3 class="property-name">${item['name_' + currentLanguage] || item.name}</h3>
        </div>
        
        <div class="property-meta">
          <div class="meta-item">
            <span class="meta-label">${t('area')}:</span>
            <span class="meta-value">${item.area}㎡</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${t('floor')}:</span>
            <span class="meta-value">${item.floor}F</span>
          </div>
        </div>
        
        <div class="price-divider"></div>
        
        <div class="property-price">
          <span class="price-label">PRICE</span>
          <span class="price-text">${item.currency}${item.price}${t('per_month')}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 显示详情
function showDetail(id) {
  const property = properties.find(p => p.id === id);
  if (!property) return;
  
  const features = property['features_' + currentLanguage] || property.features_zh;
  const description = property['description_' + currentLanguage] || property.description_zh;
  const name = property['name_' + currentLanguage] || property.name;
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <div class="detail-header">
      <h2>${name}</h2>
    </div>
    
    <div class="detail-gallery">
      ${property.images.map(img => `
        <img src="${img}" alt="${name}" class="detail-image">
      `).join('')}
    </div>
    
    <div class="detail-section">
      <h3>${t('description')}</h3>
      <p>${description}</p>
    </div>
    
    <div class="detail-section">
      <h3>${t('facilities')}</h3>
      <div class="features-list">
        ${features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
      </div>
    </div>
    
    <div class="detail-info">
      <div class="info-item">
        <span class="info-label">${t('area')}</span>
        <span class="info-value">${property.area}㎡</span>
      </div>
      <div class="info-item">
        <span class="info-label">${t('floor')}</span>
        <span class="info-value">${property.floor}F</span>
      </div>
      <div class="info-item">
        <span class="info-label">押金政策</span>
        <span class="info-value">${property.deposit_policy}</span>
      </div>
      <div class="info-item price-item">
        <span class="info-label">价格</span>
        <span class="info-value">${property.currency}${property.price}${t('per_month')}</span>
      </div>
    </div>
  `;
  
  document.getElementById('detailModal').style.display = 'block';
}

// 关闭模态框
function closeModal() {
  document.getElementById('detailModal').style.display = 'none';
}

// 显示关于
function showAbout() {
  const aboutContent = currentLanguage === 'zh' 
    ? '华海达公寓（HHD APARTMENT）致力于为海外租客提供高品质的公寓租赁服务。我们精选黄金地段房源，提供24小时安保，确保您的居住安全与舒适。'
    : currentLanguage === 'en'
    ? 'HHD Apartment is dedicated to providing high-quality apartment rental services for overseas tenants. We carefully select properties in prime locations and provide 24-hour security to ensure your safety and comfort.'
    : 'HHD Apartment มุ่งมั่นที่จะให้บริการเช่าอพาร์ตเมนต์คุณภาพสูงสำหรับผู้เช่าต่างชาติ เราคัดสรรที่พักในทำเลที่ดีและให้บริการรักษาความปลอดภัย 24 ชั่วโมงเพื่อให้มั่นใจในความปลอดภัยและความสะดวกสบายของคุณ';
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <div class="about-content">
      <h2>${t('about_title')}</h2>
      <p>${aboutContent}</p>
    </div>
  `;
  
  document.getElementById('detailModal').style.display = 'block';
}

// 点击模态框外部关闭
window.onclick = function(event) {
  const modal = document.getElementById('detailModal');
  if (event.target === modal) {
    closeModal();
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  updateLanguage();
});
