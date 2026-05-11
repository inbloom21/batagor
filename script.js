const orderForm = document.getElementById('orderForm');
const result = document.getElementById('result');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const menu = document.getElementById('menuPilihan').value;
  const jumlah = document.getElementById('jumlah').value;

  result.textContent = `Terima kasih, ${nama}! Pesanan ${jumlah}x ${menu} sedang kami proses. Tim kami akan menghubungi Anda via WhatsApp.`;
  orderForm.reset();
});
