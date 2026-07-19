@AGENTS.md

# 项目概况

- 客户：海宁三鑫剃须刀剪（SUMTHIN®）
- 域名：sumthinblades.com
- 技术栈：Next.js (App Router, SSG) + Tailwind CSS 4 + Cloudflare Pages
- 定位：B2B 外贸独立站，精密刀片制造商
- SEO 策略：内容驱动型电商（博客拉流量 → 产品页转化）

# 博客写作规范

每篇博客必须满足以下要求：

## 1. 内容结构
- 开头有明确的价值主张（读者为什么要读这篇）
- 核心 insight/数据支撑（不是泛泛而谈，要有制造商视角的独特见解）
- 必须有至少一个可引用的具体数据点（GEO 优化需求）
- FAQ 区块（3-5 个问答，用于 FAQPage Schema）
- 结尾有 CTA（引导到产品页或询盘页）

## 2. 图片插入规范
- 每篇博客至少插入 2-3 张图片
- 图片使用 Markdown 语法：`![alt text](/images/xxx.png "图片说明文字")`
- 图片类型搭配：
  - **产品图**：使用 /images/products/ 下的已有产品图，展示相关刀片
  - **工厂图**：使用 /images/factory/ 下的工厂实拍，增强信任感
  - **场景图/示意图**：如有外部素材可后续补充（占位用产品图）
- 图片位置：
  - 第一张图放在第一个 H2 标题之后（让读者快速看到实物）
  - 中间段落适当穿插（每 300-400 字一张，避免大段纯文字）
  - 表格/对比类内容前后各一张
- alt 文字要包含关键词但自然（如 "SUMTHIN A5 detachable pet grooming blade #7F"）

## 3. 产品图路径参考
- 标准刀片对（理发/人用）：`/images/products/1667884791109649.png`
- A5 宠物刀头（卡扣式）：`/images/products/1668564537164379.png`、`/images/products/1668564572169143.png`
- A5 带锁扣细节：`/images/products/1668564902107057.png`
- T型刀头：`/images/products/1668390465127568.png`
- 陶瓷刀片：`/images/products/1667886227120405.png`
- 羊毛剪梳片（13齿）：`/images/products/1667884563151830.png`
- 羊毛剪梳片（9齿）：`/images/products/1667884595195153.png`
- 工厂航拍：`/images/factory/aboutus-aerial.jpg`

## 4. SEO 要求
- 每篇文章目标覆盖 1 个主词 + 3-5 个长尾词
- 关键词自然分布在 H1/H2/首段/表格/alt 文字中
- 内链到相关产品页和其他博客文章
- 数据来自 blog.ts 的 keywords 字段

## 5. 写作风格
- 制造商专家视角（不是普通博主）
- 有具体数字：硬度 HRC、温度、工序数、MOQ 等
- 适当提及 SUMTHIN 优势但不过度推销（2-3 处自然植入）
- 语言：英文，专业但可读
