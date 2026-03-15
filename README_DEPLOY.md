# GitHub Pages 部署教程 - HHD APARTMENT

## 📦 准备工作

在开始部署前，请确认：
- ✅ 已拥有 GitHub 账号（[https://github.com](https://github.com)）
- ✅ `hhd-h5` 文件夹已准备完成

---

## 🚀 部署步骤（5分钟完成）

### 第一步：创建 GitHub 仓库

1. **登录 GitHub**
   - 访问 [https://github.com](https://github.com) 并登录账号

2. **创建新仓库**
   - 点击右上角 `+` 图标
   - 选择 `New repository`
   - 仓库名称输入：`hhd-apartment`
   - 选择 `Public`（公开仓库）
   - ✅ 勾选 `Add a README file`
   - 点击 `Create repository`

---

### 第二步：上传 H5 文件

1. **进入上传界面**
   - 在新创建的仓库页面
   - 点击 `Add file` → `Upload files`

2. **上传所有文件**
   
   需要上传以下文件和文件夹：
   
   ```
   hhd-h5/
   ├── index.html        ← 必须上传
   ├── app.js            ← 必须上传
   ├── style.css         ← 必须上传
   ├── properties.js     ← 必须上传
   ├── README.md         ← 可选
   ├── README_DEPLOY.md  ← 可选
   └── images/           ← 整个文件夹必须上传
       ├── photo01.jpg
       └── properties/
           ├── A02/
           ├── A05/
           ├── A12/
           ├── A19/
           └── A22/
   ```

3. **拖拽上传**
   - 将 `hhd-h5` 文件夹中的所有内容（**不含 hhd-h5 文件夹本身**）拖入上传区域
   - 等待文件上传完成

4. **提交更改**
   - 在底部 `Commit changes` 输入框填写：`Initial commit`
   - 点击绿色按钮 `Commit changes`

---

### 第三步：启用 GitHub Pages

1. **进入设置**
   - 在仓库页面点击顶部 `Settings` 标签

2. **配置 Pages**
   - 在左侧边栏找到并点击 `Pages`
   - 在 `Build and deployment` 部分：
     - `Source` 选择：`Deploy from a branch`
     - `Branch` 选择：`main` 分支
     - 文件夹选择：`/(root)`
   - 点击 `Save`

3. **等待部署**
   - 页面显示 "Your site is live at..." 即部署成功
   - 通常需要 1-3 分钟，刷新页面查看

4. **访问你的网站**
   - 访问链接格式：`https://你的用户名.github.io/hhd-apartment/`
   - 示例：如果你的用户名是 `zhangsan`，链接为：
     `https://zhangsan.github.io/hhd-apartment/`

---

## 🔧 如何更新网站

当你需要修改网站内容时：

1. **修改本地文件**
   - 在 `hhd-h5` 文件夹中编辑相应文件
   - 例如：修改 `properties.js` 更新房源信息

2. **上传更新**
   - 回到 GitHub 仓库
   - 点击 `Add file` → `Upload files`
   - 上传修改后的文件
   - 提交更改

3. **自动更新**
   - GitHub Pages 会自动检测更改并重新部署
   - 等待 1-2 分钟后刷新网站查看

---

## ⚠️ 常见问题

### ❌ 问题1：页面显示 404 Not Found

**解决方案：**
- 确认仓库名称与 URL 路径一致
- 确认 `index.html` 在仓库根目录
- 等待 2-3 分钟让 GitHub 完成部署

### ❌ 问题2：图片无法显示

**解决方案：**
- 确保上传了完整的 `images` 文件夹
- 检查文件名大小写（GitHub 区分大小写）
- 确认图片路径在浏览器中可访问

### ❌ 问题3：页面样式混乱

**解决方案：**
- 确认 `style.css` 已上传
- 清除浏览器缓存后刷新
- 检查 CSS 文件内容是否完整

### ❌ 问题4：语言切换不工作

**解决方案：**
- 确认 `app.js` 已正确上传
- 检查浏览器控制台是否有 JavaScript 错误

---

## 🎯 快速检查清单

部署完成后，请逐一检查：

- [ ] 网站可以正常访问
- [ ] 首页横幅图片显示正常
- [ ] 房源列表显示完整
- [ ] 点击房源卡片可以打开详情页
- [ ] 语言切换按钮工作正常
- [ ] "关于我们"按钮可以打开模态框
- [ ] 在手机浏览器中显示正常

---

## 📱 分享你的网站

部署成功后，你可以：

1. **直接分享链接**
   - 复制你的 GitHub Pages 链接发送给他人

2. **绑定自定义域名**
   - 在 `Settings` → `Pages` → `Custom domain` 输入你的域名
   - 按提示配置 DNS CNAME 记录

3. **生成二维码**
   - 将网站链接生成二维码供手机扫码访问

---

## 🆘 需要帮助？

如果遇到问题：

1. 检查 GitHub Actions 是否有构建错误
   - 仓库 → `Actions` 标签
2. 查看浏览器控制台错误信息
   - 按 F12 打开开发者工具 → Console 标签
3. 重新部署：在 Pages 设置中点击重新部署按钮

---

## 📊 技术规格

- **框架**：纯 HTML5 + CSS3 + JavaScript（无依赖）
- **响应式**：支持手机、平板、桌面
- **语言**：中文、英文、泰文
- **图片格式**：JPG
- **部署平台**：GitHub Pages（免费）

---

祝部署顺利！🎉
