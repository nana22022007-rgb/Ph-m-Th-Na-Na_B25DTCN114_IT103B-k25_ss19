let data = [
  { id: 1, name: "Nguyễn Văn An", phone: "0901234567", email: "nguyenvanan@email.com" },
  { id: 2, name: "Trần Thị Bình", phone: "0912345678", email: "tranthibinh@email.com" },
  { id: 3, name: "Lê Văn Cường", phone: "0901232321", email: "levancuong@email.com" },
  { id: 4, name: "Phạm Thị Dung", phone: "0901988892", email: "phamthidung@email.com" },
  { id: 5, name: "Đặng Tuấn Phong", phone: "09876544321", email: "dangtuanphong@email.com" },

];
let nextId = 6;

function renderData() {
  let str = "";
  data.forEach((contact, index) => {
    str += `<tr>
                <td>${index + 1}</td>
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="updateData()">Sửa</button>
                    <button class="btn-delete" onclick="deletaData(${index})">Xóa</button>
                  </div>
                </td>
              </tr>`
  })
  document.getElementById("contact-tbody").innerHTML = str;
};

renderData();

function deletaData(index) {
  ok = confirm("bạn có chắc muốn xóa không?")
  if (ok) {
    data.splice(index, 1);
    renderData()
  } else {
    alert("Đã hủy thao tác xóa")
  }

}

function updateData(index) {
  let name = getElementById("contact-name").value;
  let phone = getElementById("contact-phone").value;
  let email = getElementById("contact-email").value;




}
function validateContact(name, phone, email, address) {
  if (!name || name.trim() === '') {
    alert('Họ tên không được để trống!');
    return false;
  }

  if (name.trim().length < 2) {
    alert('Họ tên phải có ít nhất 2 ký tự!');
    return false;
  }
  if (!phone || phone.trim() === '') {
    alert('Số điện thoại không được để trống!');
    return false;
  }

  if (!email || email.trim() === '') {
    alert('Email không được để trống!');
    return false;
  }

  if (isAdding && contacts.some(c => c.email.toLowerCase() === email.trim().toLowerCase())) {
    alert('Email đã tồn tại trong danh bạ!');
    return false;
  }
  return true;
}
