
document.addEventListener("DOMContentLoaded", function() {
    const certificates = ["c1.png", "c2.png", "c3.png", "c4.png","c5.png","c6.png","c7.png"];
    let index = 0;

    const certificateImg = document.getElementById("certificate");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!certificateImg || !prevBtn || !nextBtn) {
        console.error("Error: Elements not found!");
        return;
    }

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + certificates.length) % certificates.length;
        certificateImg.src = certificates[index];
    });

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % certificates.length;
        certificateImg.src = certificates[index];
    });
});

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
});

