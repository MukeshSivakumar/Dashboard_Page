// New Constants

const productForm = document.getElementById('product-form');
const orderForm = document.getElementById('order-form');
const addProductBtn = document.getElementById('add-product-btn');
const placeOrderBtn = document.getElementById('place-order-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close-btn')[0];

const ordersTableBody = document.querySelector('#orders-table tbody');


// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART

let books_count = document.getElementById("books-count");
let toys_count = document.getElementById("toys-count");
let bags_count = document.getElementById("bags-count");

let jsonData = {
    "Bags" : 30,
    "Toys" :40,
    "Laptops" : 23,
    "Chargers" : 28,
    "Mouse" : 15,
    "Books" : 45
}


books_count.innerText = jsonData["Books"];
toys_count.innerText = jsonData["Toys"];
bags_count.innerText = jsonData["Bags"];
const barChartOptions = {
  series: [
    {
      data: [jsonData["Bags"], jsonData["Toys"], jsonData["Laptops"], jsonData["Chargers"], jsonData["Mouse"], jsonData["Books"]],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Bags', 'Toys', 'Laptops', 'Chargers', 'Mouse', 'Books'],
  },
  yaxis: {
    title: {
      text: 'Count',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
// const areaChartOptions = {
//   series: [
//     {
//       name: 'Purchase Orders',
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//     {
//       name: 'Sales Orders',
//       data: [11, 32, 45, 32, 34, 52, 41],
//     },
//   ],
//   chart: {
//     height: 350,
//     type: 'area',
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ['#4f35a1', '#246dec'],
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: 'smooth',
//   },
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//   markers: {
//     size: 0,
//   },
//   yaxis: [
//     {
//       title: {
//         text: 'Purchase Orders',
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: 'Sales Orders',
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//   },
// };

// const areaChart = new ApexCharts(
//   document.querySelector('#area-chart'),
//   areaChartOptions
// );
// areaChart.render();


function openModal(type) {
  modal.style.display = 'block';
  productForm.style.display = type === 'product' ? 'block' : 'none';
  orderForm.style.display = type === 'order' ? 'block' : 'none';
}

function closeModal() {
  modal.style.display = 'none';
  productForm.reset();
  orderForm.reset();
}

addProductBtn.addEventListener('click', () => openModal('product'));
placeOrderBtn.addEventListener('click', () => openModal('order'));
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});