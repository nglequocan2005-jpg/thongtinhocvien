function searchData(){

let keyword=document.getElementById("keyword").value.trim();

if(keyword==""){
alert("Nhập từ khóa");
return;
}

document.getElementById("loading").style.display="block";

fetch(API_URL+"?keyword="+encodeURIComponent(keyword))

.then(r=>r.json())

.then(data=>{

document.getElementById("loading").style.display="none";

let html="";

if(data.length==0){

html="<h3>Không tìm thấy dữ liệu</h3>";

}else{

data.forEach(item=>{

html+=`

<div class="card">

<p><b>Mã:</b> ${item.ma}</p>

<p><b>Họ tên:</b> ${item.ten}</p>

<p><b>SĐT:</b> ${item.sdt}</p>

<p><b>Địa chỉ:</b> ${item.diachi}</p>

<button class="copy"

onclick="copyData('${item.ma} | ${item.ten} | ${item.sdt} | ${item.diachi}')">

📋 Sao chép

</button>

</div>

`;

});

}

document.getElementById("result").innerHTML=html;

})

.catch(()=>{

document.getElementById("loading").style.display="none";

alert("Không kết nối được API");

});

}

function copyData(text){

navigator.clipboard.writeText(text);

alert("Đã sao chép");

}
