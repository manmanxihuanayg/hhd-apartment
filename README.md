# HHD APARTMENT - H5应用部署指南

## 🚀 部署到 GitHub Pages

### 方法一：通过 GitHub 网页界面部署（推荐新手）

#### 1. 创建 GitHub 仓库
1. 访问 [GitHub](https://github.com/) 并登录
2. 点击右上角的 `+` 按钮，选择 `New repository`
3. 仓库名称填写：`hhd-apartment`
4. 设置为 `Public`（公开）
5. 勾选 `Add a README file`
6. 点击 `Create repository`

#### 2. 上传文件
1. 在新创建的仓库页面，点击 `Add file` → `Upload files`
2. 将 `hhd-h5` 文件夹中的所有内容拖拽上传：
   - `index.html`
   - `app.js`
   - `style.css`
   - `properties.js`
   - `images` 文件夹（包含所有图片）
3. 滚动到底部，在 `Commit changes` 输入框填写：`Initial commit`
4. 点击 `Commit changes`

#### 3. 启用 GitHub Pages
1. 进入仓库页面，点击 `Settings`
2. 在左侧菜单找到 `Pages`
3. 在 `Build and deployment` 部分的 `Source` 下拉菜单选择 `Deploy from a branch`
4. 在 `Branch` 下拉菜单选择 `main` 分支，文件夹选择 `/(root)`
5. 点击 `Save`

等待 1-2 分钟后，GitHub Pages 会生成访问链接（格式：`https://你的用户名.github.io/hhd-apartment/`）

---

### 方法二：通过 Git 命令行部署（推荐有 Git 经验的用户）

#### 1. 安装 Git（如果未安装）
- Windows：从 [git-scm.com](https://git-scm.com/) 下载安装
- macOS：`brew install git`
- Linux：`sudo apt-get install git`

#### 2. 初始化并推送代码
```bash
# 进入项目目录
cd hhd-h5

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 重命名主分支为 main（如果需要）
git branch -M main

# 添加远程仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/hhd-apartment.git

# 推送到 GitHub
git push -u origin main
```

#### 3. 启用 GitHub Pages
后续步骤同方法一的"启用 GitHub Pages"部分。

---

## 📝 自定义域名（可选）

如果你有自己的域名，可以绑定到 GitHub Pages：

1. 在仓库的 `Settings` → `Pages` 中
2. 在 `Custom domain` 输入你的域名（如 `www.yourdomain.com`）
3. 点击 `Save`
4. 按照提示在你的域名 DNS 设置中添加：
   - 记录类型：`CNAME`
   - 主机记录：`www`（或 `@`）
   - 记录值：`YOUR_USERNAME.github.io`

---

## 🎨 功能说明

- ✅ 支持中英泰三语切换
- ✅ 房源列表展示
- ✅ 房源详情查看（图片轮播、设施列表）
- ✅ 关于我们页面
- ✅ 响应式设计，支持手机和电脑访问
- ✅ 现代化 UI 设计

---

## 🔧 常见问题

### Q: 页面无法访问？
A: 检查 GitHub Pages 是否部署完成（通常需要 1-2 分钟），刷新页面等待。

### Q: 图片无法显示？
A: 确保上传了完整的 `images` 文件夹，检查图片路径是否正确。

### Q: 如何修改房源信息？
A: 直接编辑 `properties.js` 文件，修改后重新提交到 GitHub 即可。

---

## 📞 技术支持

如有问题，请检查：
1. 文件结构是否正确
2. 是否为公开仓库
3. GitHub Pages 设置是否正确
