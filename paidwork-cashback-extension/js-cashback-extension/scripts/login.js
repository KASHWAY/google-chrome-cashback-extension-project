  $('.sign-in-button').on('click', function() {
    var myWindow = window.open("https://www.paidwork.com/sign-in", "_blank", "width=300,height=600");
     function cookiess() {
        chrome.cookies.getAll({url: "https://www.paidwork.com"}, function(cookies) {
        
        const zLoginCookie = cookies.find(cookie => cookie.name === 'z_login');
    if (zLoginCookie) {

      const zLoginValue = zLoginCookie.value;
      localStorage.setItem('User_id', zLoginValue);
      myWindow.close();
      window.close();
    } 
});
}
    setInterval(cookiess, 1000);

});
  $('.register-button').on('click', function() {
    window.open("https://www.paidwork.com/register", "_blank");
});

// // Otwarcie lub utworzenie bazy danych IndexedDB
// var request = indexedDB.open('mydb', 1);

// // Obsługa zdarzenia wywoływanego podczas aktualizacji wersji bazy danych
// request.onupgradeneeded = function(event) {
//   var db = event.target.result;

//   // Utworzenie obiektu magazynu danych (tabeli) cashback_partners
//   var cashbackPartnersStore = db.createObjectStore('cashback_partners', { keyPath: 'id' });
//   cashbackPartnersStore.createIndex('name', 'name', { unique: false });
//   cashbackPartnersStore.createIndex('category', 'category', { unique: false });
// };

// // Obsługa zdarzenia udanego otwarcia bazy danych
// request.onsuccess = function(event) {
//   var db = event.target.result;

//   // Rozpoczęcie transakcji odczytu
//   var transaction = db.transaction(['cashback_partners'], 'readonly');
//   var objectStore = transaction.objectStore('cashback_partners');

//   // Pobranie wszystkich danych z tabeli cashback_partners
//   var getAllRequest = objectStore.getAll();

//   getAllRequest.onsuccess = function(event) {
//     var result = event.target.result;

//     // Wyświetlenie pobranych danych
//     result.forEach(function(item) {
//       console.log('ID: ' + item.id + ', Name: ' + item.name + ', Category: ' + item.category);
//     });
//   };

//   transaction.oncomplete = function(event) {
//     // Zakończenie transakcji
//     db.close();
//   };
// };

// // Obsługa zdarzenia błędu otwarcia bazy danych
// request.onerror = function(event) {
//   console.log('Błąd otwarcia bazy danych: ' + event.target.errorCode);
// };