
document.getElementById("topupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const id = document.getElementById("userId").value;
  const server = document.getElementById("serverId").value;
  const amount = document.getElementById("amount").value;
  const payment = document.getElementById("payment").value;
  alert(`Pesanan:
ID: ${id}
Server: ${server}
Jumlah: ${amount} Diamond
Pembayaran: ${payment}`);
});
