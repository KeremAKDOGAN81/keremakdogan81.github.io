// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener("DOMContentLoaded", () => {
  // Mobil Menü İşlemleri
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  // Butona tıklandığında menüyü aç/kapat
  mobileToggle.addEventListener("click", () => {
    // 'active' sınıfını ekle veya çıkar
    mobileMenu.classList.toggle("active");

    // Buton animasyonu için opsiyonel (hamburger ikonunu çarpı yapma gibi efektler eklenebilir)
    // Şimdilik basit tutuyoruz.
  });

  // Menüdeki bir linke tıklanırsa menüyü otomatik kapat
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  // Klavye efektleri veya mouse takibi gibi ek özellikler buraya eklenebilir
  console.log("Portfolyo sitesi başarıyla yüklendi!");
});
