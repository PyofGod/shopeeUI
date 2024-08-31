document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#imgslide .slide');
    let currentSlide = 0;
    const slideInterval = 3000; // เวลาในมิลลิวินาที (3 วินาที)

    function showNextSlide() {
        slides[currentSlide].style.opacity = 0; // ซ่อนภาพปัจจุบัน
        currentSlide = (currentSlide + 1) % slides.length; // ไปยังภาพถัดไป และวนกลับไปที่ภาพแรกหากถึงภาพสุดท้าย
        slides[currentSlide].style.opacity = 1; // แสดงภาพถัดไป
    }

    setInterval(showNextSlide, slideInterval);
});