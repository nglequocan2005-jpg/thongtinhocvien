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

html += `
<div class="card">

<p><b>Họ và tên:</b> ${item.ten}</p>
<p><b>Mã học viên:</b> ${item.ma}</p>
<p><b>Ngày sinh:</b> ${item.ngaysinh}</p>
<p><b>CCCD:</b> ${item.cccd}</p>
<p><b>SĐT:</b> ${item.sdt}</p>
<p><b>Quê quán:</b> ${item.quequan}</p>
<p><b>Trú quán:</b> ${item.truquan}</p>
<p><b>Dân tộc:</b> ${item.dantoc}</p>
<p><b>Tôn giáo:</b> ${item.tongiao}</p>
<p><b>TBM khóa:</b> ${item.tbm}</p>
<p><b>Xếp loại:</b> ${item.xeploai}</p>

<button class="copy"
onclick="copyData(
'Họ tên: ${item.ten}\n' +
'Mã học viên: ${item.ma}\n' +
'Ngày sinh: ${item.ngaysinh}\n' +
'SĐT: ${item.sdt}\n' +
'Quê quán: ${item.quequan}\n' +
'Trú quán: ${item.truquan}'
)">
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
