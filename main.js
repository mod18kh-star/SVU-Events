// فلترة الفعاليات عند تغيير القائمة
function filterEvents() {
  var category = document.getElementById("categoryFilter").value;
  var cards = document.getElementsByClassName("event-card");

  for (var i = 0; i < cards.length; i++) {
    var cardCategory = cards[i].getAttribute("data-category");

    if (category === "all" || cardCategory === category) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}


// 🔥 هذا الجزء الناقص عندك (المهم جداً)
window.onload = function () {
  var params = new URLSearchParams(window.location.search);
  var cat = params.get("cat");

  var filter = document.getElementById("categoryFilter");

  // إذا دخل من تصنيف (مثلاً music)
  if (cat && filter) {
    filter.value = cat;
    filterEvents();
  }
};


// التحقق من نموذج التواصل
function validateContact() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var alertBox = document.getElementById("formAlert");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    alertBox.className = "alert alert-danger";
    alertBox.innerHTML = "يرجى تعبئة جميع الحقول المطلوبة.";
    alertBox.style.display = "block";
    return false;
  }

  if (!emailPattern.test(email)) {
    alertBox.className = "alert alert-danger";
    alertBox.innerHTML = "يرجى إدخال بريد إلكتروني صحيح.";
    alertBox.style.display = "block";
    return false;
  }

  alertBox.className = "alert alert-success";
  alertBox.innerHTML = "تم إرسال رسالتك بنجاح. شكراً لتواصلك معنا.";
  alertBox.style.display = "block";
  return false;
}