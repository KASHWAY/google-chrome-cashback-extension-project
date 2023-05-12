// Dane profilu
const profileData = {
  name: "John Doe",
  cashbackHistory: [
    { title: "Cashback 1", amount: "$0" },
    { title: "Cashback 2", amount: "$0" },
    { title: "Cashback 3", amount: "$0" }
  ],
  chartData: [10, 20, 30, 15, 25, 40, 20]
};

// Wyświetlanie historii cashbacków
const historyList = document.getElementById("history-list");
profileData.cashbackHistory.forEach(cashback => {
  const listItem = document.createElement("li");
  listItem.textContent = `${cashback.title}: ${cashback.amount}`;
  historyList.appendChild(listItem);
});

// Tworzenie wykresu
const chartContainer = document.getElementById("chart-container");
profileData.chartData.forEach(value => {
  const chartBar = document.createElement("div");
  chartBar.className = "chart-bar";
  chartBar.style.width = `${value}px`;
  chartContainer.appendChild(chartBar);
});
