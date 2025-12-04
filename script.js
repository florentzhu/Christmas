// 创建雪花效果
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 50;
    
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

// 礼物点击效果
function setupGiftInteraction() {
    const gifts = document.querySelectorAll('.gift');
    const messages = [
        '🎉 愿你圣诞快乐，新年如意！',
        '✨ 愿所有美好如期而至！',
        '🎊 祝你幸福满满，好运连连！',
        '💝 愿温暖与欢乐常伴你左右！',
        '🌟 祝你梦想成真，心想事成！'
    ];
    
    gifts.forEach((gift, index) => {
        gift.addEventListener('click', () => {
            const message = messages[Math.floor(Math.random() * messages.length)];
            showMessage(message);
        });
    });
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
        background: rgba(255, 255, 255, 0.95);
        padding: 30px 50px;
        border-radius: 15px;
        font-size: 1.5em;
        font-weight: bold;
        color: #c41e3a;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: popupFade 3s ease-in-out;
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
            transform: translate(-50%, -50%) scale(0.5);
        }
        10%, 90% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    setupGiftInteraction();
    
    // 添加欢迎消息
    setTimeout(() => {
        showMessage('🎄 点击礼物有惊喜哦！🎁');
    }, 1000);
});
