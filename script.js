const letterText = `亲爱的同学：
张诗妍。

其实我注意你很久了。
是早读课上你认真背书的侧脸，是课间操时你不经意扬起的笑，是放学路上你和同学打闹的身影，每次不经意看到，我的心跳都会偷偷慢半拍。

我攒了好多好多想和你说的话，攒了好多好多想和你一起做的事：
想和你一起去图书馆刷完一套又一套的题，想和你一起在操场看日落吹晚风，想和你一起分享小卖部刚冰好的汽水，想把我藏了很久的喜欢，认认真真地告诉你。

我喜欢你，不是一时兴起，是蓄谋已久。

所以，你愿意，和我在一起吗？`;

const typingText = document.getElementById('typingText');
const cursor = document.getElementById('cursor');
let index = 0;
const typingSpeed = 50;

function typing() {
    if (index < letterText.length) {
        if (letterText.charAt(index) === '\n') {
            typingText.innerHTML += '<br>';
        } else {
            typingText.innerHTML += letterText.charAt(index);
        }
        index++;
        setTimeout(typing, typingSpeed);
    } else {
        cursor.style.display = 'none';
    }
}
typing();

// 音乐播放（用户点击后触发）
document.body.addEventListener('click', () => {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic.paused) bgMusic.play().catch(() => {});
}, { once: true });

// 同意按钮与爱心
document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('successModal').style.display = 'flex';
    createHearts();
});

// 关闭弹窗
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('successModal').style.display = 'none';
});

// 拒绝按钮乱跑
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 爱心生成
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.fontSize = (Math.random() * 10 + 10) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}
