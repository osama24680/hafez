//******************************************************************************************************************
//* Price *
const planData = {
    30: [
        { name: 'Package A', price: 20 },
        { name: 'Package B', price: 35 },
        { name: 'Package C', price: 50 },
        { name: 'Package D', price: 70 },
        { name: 'Package E', price: 85 },
        { name: 'Package F', price: 100 },
    ],
    45: [
        { name: 'Package A', price: 30 },
        { name: 'Package B', price: 50 },
        { name: 'Package C', price: 70 },
        { name: 'Package D', price: 95 },
        { name: 'Package E', price: 115 },
        { name: 'Package F', price: 135 },
    ],
    60: [
        { name: 'Package A', price: 40 },
        { name: 'Package B', price: 65 },
        { name: 'Package C', price: 90 },
        { name: 'Package D', price: 120 },
        { name: 'Package E', price: 145 },
        { name: 'Package F', price: 170 },
    ]
};

const courseSelect = document.getElementById('courseSelect');
const durationSelect = document.getElementById('durationSelect');
const packageSelect = document.getElementById('packageSelect');
const priceInput = document.getElementById('priceInput');

function updatePrice() {
    if (
        courseSelect.selectedIndex > 0 &&
        durationSelect.selectedIndex > 0 &&
        packageSelect.selectedIndex > 0
    ) {
        priceInput.value = `${packageSelect.value}$`;
        priceInput.style.color = '#000';
    } else {
        priceInput.value = 'Select course, duration, and package to see price';
        priceInput.style.color = 'red';
    }
}

// Update package options when duration changes
durationSelect.addEventListener('change', () => {
    const duration = durationSelect.value;
    packageSelect.innerHTML = '<option disabled selected>Select Package</option>';
    planData[duration].forEach(pkg => {
        const option = document.createElement('option');
        option.value = pkg.price;
        option.textContent = `${pkg.name} - ${pkg.price}$`;
        packageSelect.appendChild(option);
    });
    updatePrice();
});

// Update price when package changes
packageSelect.addEventListener('change', updatePrice);
courseSelect.addEventListener('change', updatePrice);


//******************************************************************************************************************
//* Validation *

const form = document.getElementById("courseForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
    let valid = true;

    function showError(id, message) {
        document.getElementById(id + "-error").textContent = message;
        valid = false;
    }

    const firstname = document.getElementById("firstname");
    if (!firstname.value.trim()) showError("firstname", "First name is required");

    const lastname = document.getElementById("lastname");
    if (!lastname.value.trim()) showError("lastname", "Last name is required");

    const phone = document.getElementById("phone");
    if (!/^(\+?\d{10,15})$/.test(phone.value.trim())) showError("phone", "Enter a valid phone number");

    const email = document.getElementById("email");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) showError("email", "Enter a valid email");

    const course = document.getElementById("courseSelect");
    if (!course.value || course.selectedIndex === 0) showError("courseSelect", "Please select a course");

    const duration = document.getElementById("durationSelect");
    if (!duration.value || duration.selectedIndex === 0) showError("durationSelect", "Please select a duration");

    const pkg = document.getElementById("packageSelect");
    if (!pkg.value || pkg.selectedIndex === 0) showError("packageSelect", "Please select a package");

    const country = document.getElementById("countrySelect");
    if (!country.value || country.selectedIndex === 0) showError("countrySelect", "Please select a country");

    const price = document.getElementById("priceInput");
    const messageText = document.getElementById("messageText");

    if (valid) {
        const message =

            `
                New Registration Request:
                Name: ${firstname.value.trim()} ${lastname.value.trim()}
                Phone: ${phone.value.trim()}
                Email: ${email.value.trim()}
                Course: ${course.value}
                Duration: ${duration.value}
                Package: ${pkg.value}
                Price: ${price.value}
                Country: ${country.value}
                Notes: ${messageText.value.trim()}
            `

        const phoneNumber = "201016015170";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");

        form.reset();
    }

});



// Live validation
function attachLiveValidation(id, validatorFn) {
    const input = document.getElementById(id);
    input.addEventListener("input", () => {
        const errorDiv = document.getElementById(id + "-error");
        const message = validatorFn(input.value);
        errorDiv.textContent = message || "";
    });
}

attachLiveValidation("firstname", val => val.trim() === "" ? "First name is required" : "");
attachLiveValidation("lastname", val => val.trim() === "" ? "Last name is required" : "");
attachLiveValidation("phone", val => /^(\+?\d{10,15})$/.test(val.trim()) ? "" : "Enter a valid phone number");
attachLiveValidation("email", val => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val.trim()) ? "" : "Enter a valid email");

["courseSelect", "durationSelect", "packageSelect", "countrySelect"].forEach(id => {
    const select = document.getElementById(id);
    select.addEventListener("change", () => {
        const errorDiv = document.getElementById(id + "-error");
        errorDiv.textContent = (select.selectedIndex === 0) ? "This field is required" : "";
    });
});

//******************************************************************************************************************
//* Free_Trial_Class_text *

var typed = new Typed("#Free_Trial_Class_text", {
    strings: ["Course"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});
