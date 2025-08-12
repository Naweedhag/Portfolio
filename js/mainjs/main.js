const toggler = document.querySelector('.nav__toggler');
const navbar = document.querySelector('.nav');
toggler.addEventListener('click', (e) => {
    navbar.classList.toggle('nav__expanded');
});

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');



tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const targetTabContent = document.querySelector(
            tab.dataset.tabTarget
        );
        
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        targetTabContent.classList.add('active');
    });
});
Logger.addEventListener("click", (event) => { 
    event.target.classList.toggle("nav_expanded");});

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVE CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});