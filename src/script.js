// script.js 전체 교체

document.addEventListener("DOMContentLoaded", () => {

    // 1. 부드러운 스크롤 (네비게이션 링크 클릭 시)
    const navLinks = document.querySelectorAll("a[href^='#']");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            // href가 #이거나 비어있으면 무시
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();

                // ★ 중요: window.scrollTo 대신 scrollIntoView 사용
                // .page 내부에서 해당 섹션으로 부드럽게 이동시킴
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // 모바일 메뉴가 열려있다면 닫기
                const nav = document.querySelector(".nav"); // 클래스명 확인 필요 (.top-bar-right 등)
                if (nav && nav.classList.contains("nav-open")) {
                    nav.classList.remove("nav-open");
                }
            }
        });
    });

    // 2. 모바일 메뉴 토글 (HTML에 .nav-toggle 버튼이 있다고 가정)
    const toggleBtn = document.querySelector(".nav-toggle");
    // 실제 메뉴를 감싸는 요소 (예: .top-bar-right 또는 별도 모바일 메뉴)
    const navMenu = document.querySelector(".top-bar-right");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("nav-open");
        });
    }

    // 3. Contact 폼 제출 막기 (데모용)
    const contactForm = document.querySelector(".contact-form"); // HTML에 form 클래스 확인 필요
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thanks! We'll get back to you soon.");
        });
    }
});