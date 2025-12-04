// 创建雪花效果
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 80;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        
        // 随机位置
        snowflake.style.left = Math.random() * 100 + '%';
        
        // 随机大小
        const size = Math.random() * 0.5 + 0.5;
        snowflake.style.fontSize = size + 'em';
        
        // 随机动画时长
        const duration = Math.random() * 10 + 10;
        snowflake.style.animationDuration = duration + 's';
        
        // 随机延迟
        const delay = Math.random() * 5;
        snowflake.style.animationDelay = delay + 's';
        
        snowContainer.appendChild(snowflake);
    }
}

// 创建彩灯
function createLights() {
    const lightsContainer = document.querySelector('.lights');
    const lightPositions = [
        // 第一段
        {x: 50, y: 20, color: 'red'},
        {x: 30, y: 45, color: 'blue'},
        {x: 70, y: 45, color: 'yellow'},
        
        // 第二段
        {x: 50, y: 70, color: 'purple'},
        {x: 25, y: 95, color: 'green'},
        {x: 75, y: 95, color: 'red'},
        {x: 40, y: 120, color: 'blue'},
        {x: 60, y: 120, color: 'yellow'},
        
        // 第三段
        {x: 50, y: 145, color: 'green'},
        {x: 20, y: 170, color: 'purple'},
        {x: 80, y: 170, color: 'red'},
        {x: 35, y: 195, color: 'blue'},
        {x: 65, y: 195, color: 'yellow'},
        {x: 15, y: 220, color: 'green'},
        {x: 85, y: 220, color: 'purple'},
        
        // 第四段
        {x: 50, y: 245, color: 'red'},
        {x: 25, y: 270, color: 'blue'},
        {x: 75, y: 270, color: 'yellow'},
        {x: 10, y: 295, color: 'green'},
        {x: 90, y: 295, color: 'purple'},
        {x: 40, y: 320, color: 'red'},
        {x: 60, y: 320, color: 'blue'},
        {x: 20, y: 345, color: 'yellow'},
        {x: 80, y: 345, color: 'green'},
    ];
    
    lightPositions.forEach((pos, index) => {
        const light = document.createElement('div');
        light.classList.add('light', `light-${pos.color}`);
        light.style.left = `calc(50% + ${pos.x - 50}px)`;
        light.style.top = pos.y + 'px';
        light.style.animationDelay = (index * 0.1) + 's';
        lightsContainer.appendChild(light);
    });
}

// 创建装饰球
function createOrnaments() {
    const ornamentsContainer = document.querySelector('.ornaments');
    const ornamentPositions = [
        // 第一段
        {x: 50, y: 35, color: 'gold'},
        
        // 第二段
        {x: 35, y: 85, color: 'red'},
        {x: 65, y: 105, color: 'blue'},
        
        // 第三段
        {x: 30, y: 155, color: 'silver'},
        {x: 70, y: 155, color: 'purple'},
        {x: 50, y: 185, color: 'gold'},
        {x: 20, y: 205, color: 'red'},
        {x: 80, y: 205, color: 'blue'},
        
        // 第四段
        {x: 35, y: 255, color: 'purple'},
        {x: 65, y: 255, color: 'gold'},
        {x: 15, y: 285, color: 'silver'},
        {x: 50, y: 285, color: 'red'},
        {x: 85, y: 285, color: 'blue'},
        {x: 25, y: 315, color: 'gold'},
        {x: 75, y: 315, color: 'purple'},
        {x: 45, y: 340, color: 'silver'},
        {x: 55, y: 340, color: 'red'},
    ];
    
    ornamentPositions.forEach((pos, index) => {
        const ornament = document.createElement('div');
        ornament.classList.add('ornament', `ornament-${pos.color}`);
        ornament.style.left = `calc(50% + ${pos.x - 50}px)`;
        ornament.style.top = pos.y + 'px';
        ornament.style.animationDelay = (index * 0.2) + 's';
        
        ornament.addEventListener('click', () => {
            showOrnamentSparkle(ornament);
        });
        
        ornamentsContainer.appendChild(ornament);
    });
}

// 盲盒点击计数器
let blindBoxClickCount = 0;

// 装饰球点击闪光效果
function showOrnamentSparkle(ornament) {
    ornament.style.animation = 'none';
    setTimeout(() => {
        ornament.style.animation = '';
    }, 10);
    
    // 检查是否触发彩蛋
    checkBlindBoxEasterEgg();
    
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            animation: sparkleOut 0.6s ease-out forwards;
        `;
        
        const rect = ornament.getBoundingClientRect();
        sparkle.style.left = rect.left + rect.width / 2 + 'px';
        sparkle.style.top = rect.top + rect.height / 2 + 'px';
        
        const angle = (Math.PI * 2 * i) / 5;
        const distance = 30;
        sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        sparkle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 600);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleOut {
            to {
                transform: translate(var(--tx), var(--ty));
                opacity: 0;
            }
        }
    `;
    if (!document.querySelector('style[data-sparkle]')) {
        style.setAttribute('data-sparkle', 'true');
        document.head.appendChild(style);
    }
}

// 礼物点击效果
function setupGiftInteraction() {
    const gifts = document.querySelectorAll('.gift');
    const messages = [
        '🎉 愿你圣诞快乐，新年如意！',
        '✨ 愿所有美好如期而至！',
        '🎊 祝你幸福满满，好运连连！',
        '💝 愿温暖与欢乐常伴你左右！',
        '🌟 祝你梦想成真，心想事成！',
        '🎁 愿这个圣诞为你带来无尽欢乐！',
        '🔔 铃儿响叮当，好运在路上！',
        '⭐ 愿你的每一天都闪闪发光！'
    ];
    
    gifts.forEach((gift, index) => {
        gift.addEventListener('click', () => {
            // 检查是否触发彩蛋
            checkBlindBoxEasterEgg();
            
            const message = messages[Math.floor(Math.random() * messages.length)];
            showMessage(message);
            createConfetti(gift);
        });
    });
}

// 创建礼物打开的五彩纸屑效果
function createConfetti(gift) {
    const rect = gift.getBoundingClientRect();
    const colors = ['#ff6b6b', '#4dabf7', '#ffd43b', '#da77f2', '#51cf66'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: confettiExplode 1s ease-out forwards;
        `;
        
        const angle = (Math.PI * 2 * i) / 20;
        const distance = 50 + Math.random() * 50;
        const rotation = Math.random() * 720 - 360;
        
        confetti.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        confetti.style.setProperty('--ty', Math.sin(angle) * distance - 30 + 'px');
        confetti.style.setProperty('--rotation', rotation + 'deg');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 1000);
    }
    
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes confettiExplode {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) rotate(var(--rotation));
                opacity: 0;
            }
        }
    `;
    if (!document.querySelector('style[data-confetti]')) {
        confettiStyle.setAttribute('data-confetti', 'true');
        document.head.appendChild(confettiStyle);
    }
}

// 检查盲盒彩蛋
function checkBlindBoxEasterEgg() {
    blindBoxClickCount++;
    
    // 大约每3次点击有机会触发（33%概率）
    if (Math.random() < 0.33) {
        showEasterEggImage();
        blindBoxClickCount = 0; // 重置计数
    }
}

// 显示彩蛋图片
function showEasterEggImage() {
    // 移除现有的图片
    const existingImage = document.querySelector('.easter-egg-image');
    if (existingImage) {
        existingImage.remove();
    }
    
    // 你可以在这里替换成你自己的图片链接
    // 方法1: 使用网络图片链接
    // const imageUrl = 'https://你的图片链接.jpg';
    
    // 方法2: 使用本地图片（将图片放在 images 文件夹并命名为 easter-egg.jpg）
    const imageUrl = 'images/easter-egg.jpg';
    
    const imageOverlay = document.createElement('div');
    imageOverlay.classList.add('easter-egg-image');
    imageOverlay.innerHTML = `
        <div class="easter-egg-content">
            <img src="${imageUrl}" alt="圣诞彩蛋" class="easter-egg-photo" />
            <div class="easter-egg-close">✕</div>
            <div class="easter-egg-text">🎉 恭喜你发现了隐藏彩蛋！🎉</div>
        </div>
    `;
    
    imageOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease-out;
        backdrop-filter: blur(5px);
    `;
    
    const style = document.createElement('style');
    style.innerHTML = `
        .easter-egg-content {
            position: relative;
            max-width: 90%;
            max-height: 90vh;
            animation: zoomIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .easter-egg-photo {
            max-width: 90vw;
            max-height: 80vh;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
                        0 0 0 5px rgba(255, 215, 0, 0.3),
                        0 0 30px rgba(255, 215, 0, 0.5);
            display: block;
            object-fit: contain;
        }
        
        .easter-egg-close {
            position: absolute;
            top: -15px;
            right: -15px;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #ff6b6b, #c92a2a);
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s;
        }
        
        .easter-egg-close:hover {
            transform: scale(1.2) rotate(90deg);
        }
        
        .easter-egg-text {
            margin-top: 20px;
            color: #ffd700;
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.8),
                         0 0 20px rgba(255, 215, 0, 0.6);
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes zoomIn {
            from {
                transform: scale(0.5) rotate(-10deg);
                opacity: 0;
            }
            to {
                transform: scale(1) rotate(0deg);
                opacity: 1;
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    
    if (!document.querySelector('style[data-easter-egg]')) {
        style.setAttribute('data-easter-egg', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(imageOverlay);
    
    // 点击关闭按钮或背景关闭
    const closeBtn = imageOverlay.querySelector('.easter-egg-close');
    closeBtn.addEventListener('click', () => {
        imageOverlay.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => imageOverlay.remove(), 300);
    });
    
    imageOverlay.addEventListener('click', (e) => {
        if (e.target === imageOverlay) {
            imageOverlay.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => imageOverlay.remove(), 300);
        }
    });
    
    // 添加淡出动画
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    if (!document.querySelector('style[data-fadeout]')) {
        fadeOutStyle.setAttribute('data-fadeout', 'true');
        document.head.appendChild(fadeOutStyle);
    }
}

// 显示消息
function showMessage(text) {
    // 移除现有的提示消息
    const existingPopup = document.querySelector('.popup-message');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    const popup = document.createElement('div');
    popup.classList.add('popup-message');
    popup.textContent = text;
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 250, 240, 0.95));
        padding: 30px 50px;
        border-radius: 20px;
        font-size: 1.5em;
        font-weight: bold;
        color: #c41e3a;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
                    0 0 0 3px rgba(255, 215, 0, 0.5);
        z-index: 1000;
        animation: popupFade 3s ease-in-out;
        text-align: center;
        max-width: 80%;
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// 添加弹出动画
const style = document.createElement('style');
style.textContent = `
    @keyframes popupFade {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5) rotate(-5deg);
        }
        10% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05) rotate(2deg);
        }
        15% {
            transform: translate(-50%, -50%) scale(0.98) rotate(-1deg);
        }
        20%, 85% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }
        90% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.02) rotate(1deg);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5) rotate(-5deg);
        }
    }
`;
document.head.appendChild(style);

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    createLights();
    createOrnaments();
    setupGiftInteraction();
    
    // 添加欢迎消息
    setTimeout(() => {
        showMessage('🎄 点击礼物和装饰球有惊喜哦！🎁');
    }, 1500);
});
