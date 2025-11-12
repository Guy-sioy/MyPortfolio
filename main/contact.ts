// ============================================
//  contact.ts
// ใช้ควบคุมระบบปุ่มในหน้า Contact Section
// ============================================

// ฟังก์ชันคัดลอกข้อความ
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("📋 Email copied to clipboard!");
  });
}

// toast
function showToast(message: string) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

//  เพิ่ม event ให้ปุ่มคัดลอกอีเมล
document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector<HTMLButtonElement>("#copy-email");
  const githubBtn = document.querySelector<HTMLButtonElement>("#open-github");
  const linkedinBtn = document.querySelector<HTMLButtonElement>("#open-linkedin");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = "youremail@example.com"; // 🔧 เปลี่ยนเป็นอีเมลของกาย
      copyToClipboard(email);
    });
  }

  if (githubBtn) {
    githubBtn.addEventListener("click", () => {
      window.open("https://github.com/yourusername", "_blank");
    });
  }

  window.onload = () => {
  const linkedinBtn = document.querySelector<HTMLButtonElement>("#open-linkedin");

  if (linkedinBtn) {
    linkedinBtn.addEventListener("click", () => {
      window.open("https://www.linkedin.com/in/nantapat-sukkaewnarong-3b161238b/", "_blank");
    });
  }
};

});
