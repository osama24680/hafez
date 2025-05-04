const planData = {
    30: [
        { name: 'Package A', price: 20, classes: '4 Classes/month', features: ['1 class/week', 'Monthly Billing'] },
        { name: 'Package B', price: 35, classes: '8 Classes/month', features: ['2 classes/week', 'Save 7% on 6 month'] },
        { name: 'Package C', price: 50, classes: '12 Classes/month', features: ['3 classes/week', 'Save 10% on 12 month'] },
        { name: 'Package D', price: 70, classes: '16 Classes/month', features: ['4 classes/week', 'Progress Tracking'] },
        { name: 'Package E', price: 85, classes: '20 Classes/month', features: ['5 classes/week', 'Most Popular'], highlight: true },
        { name: 'Package F', price: 100, classes: '24 Classes/month', features: ['6 classes/week', 'Save 10% Yearly'] },
    ],
    45: [
        { name: 'Package A', price: 30, classes: '4 Classes/month', features: ['1 class/week (45 min)', 'Monthly Billing'] },
        { name: 'Package B', price: 50, classes: '8 Classes/month', features: ['2 classes/week (45 min)', 'Save 7%'] },
        { name: 'Package C', price: 70, classes: '12 Classes/month', features: ['3 classes/week (45 min)', 'Extra Practice'] },
        { name: 'Package D', price: 95, classes: '16 Classes/month', features: ['4 classes/week', 'Longer Sessions'] },
        { name: 'Package E', price: 115, classes: '20 Classes/month', features: ['5 classes/week', 'Best Value'], highlight: true },
        { name: 'Package F', price: 135, classes: '24 Classes/month', features: ['6 classes/week', 'Full Immersion'] },
    ],
    60: [
        { name: 'Package A', price: 40, classes: '4 Classes/month', features: ['1 class/week (1 hr)', 'Monthly Billing'] },
        { name: 'Package B', price: 65, classes: '8 Classes/month', features: ['2 classes/week', 'Save 7%'] },
        { name: 'Package C', price: 90, classes: '12 Classes/month', features: ['3 classes/week', 'Q&A Time'] },
        { name: 'Package D', price: 120, classes: '16 Classes/month', features: ['4 classes/week', 'In-depth Sessions'] },
        { name: 'Package E', price: 145, classes: '20 Classes/month', features: ['5 classes/week', 'Top Choice'], highlight: true },
        { name: 'Package F', price: 170, classes: '24 Classes/month', features: ['6 classes/week', 'Best for Families'] },
    ]
};

const tabs = document.querySelectorAll('.tab-btn');
const container = document.getElementById('plans-container');

function renderPlans(duration) {
    container.innerHTML = '';
    planData[duration].forEach(plan => {
        const planBox = document.createElement('div');

        planBox.className = 'plan' + (plan.highlight ? ' highlight' : '');

        planBox.innerHTML = `
      <h3>${plan.name}</h3>
      <div class="price">$${plan.price}/mo</div>
      <div>${plan.classes}</div>
      <ul class="features">
        ${plan.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
     <div class="btn-join">
        <button><a href="registration.html">Select</a></button>
      </div>
    `;
        container.appendChild(planBox);
    });
}


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderPlans(tab.dataset.duration);
    });
});

// Initial load
renderPlans(30);
