

// quản lý tuyến sinh


var getElm = function(id) {
    return document.getElementById(id);
};


var tinhDiem = function () {

    var diemMonMot = parseFloat(getElm('diemMonMot').value)
    var diemMonHai = parseFloat(getElm('diemMonHai').value)
    var diemMonBa =  parseFloat(getElm('diemMonBa').value)
    
    var rdkhuVuc_A = getElm('rdkhuVuc_A')
    var rdkhuVuc_B = getElm('rdkhuVuc_B')
    var rdkhuVuc_C = getElm('rdkhuVuc_C')
    var ipKhongTrongKhuVucUutien = getElm('ipKhongTrongKhuVucUutien').value

    var rdDoiTuongMot =getElm('rdDoiTuongMot')
    var rdDoiTuongHai =getElm('rdDoiTuongHai')
    var rdDoiTuongBa =getElm('rdDoiTuongBa')
    var ipKhongThuocDienUuTien =getElm('ipKhongThuocDienUuTien').value
    var ipDiemChuan = getElm('ipDiemChuan').value

    var ketQua = getElm('ketQua')
    var point =  getElm('point')

    var diemUuTienKhuVuc;
    var diemUuTienDoiTuong;



    if(ipDiemChuan<=0 || ipDiemChuan>34.5) {
        alert('Để điểm chuẩn sai cách. Vui lòng nhập lại điểm!!!')
    } 


    if(diemMonMot<0 || diemMonHai<0 || diemMonBa<0) {
        alert('Không được nhập điểm ít hơn 0')
        return
    } else if(diemMonMot>10 || diemMonHai>10 || diemMonBa>10) {
        alert('Không được nhập điểm lớn hơn 10')
        return
    } 

    var diemTongKet = diemMonMot + diemMonHai + diemMonBa


    if(rdkhuVuc_A.checked) {
        diemUuTienKhuVuc =2
        
    } else if(rdkhuVuc_B.checked) {
        diemUuTienKhuVuc = 1
        
    } else if(rdkhuVuc_C.checked) {
        diemUuTienKhuVuc =  0.5
        
    } else if(ipKhongTrongKhuVucUutien !== 'x') {
        alert('vui lòng nhập lại phần khu vực')

    } else{
        diemUuTienKhuVuc = 0   
    }


    if(rdDoiTuongMot.checked) {
        diemUuTienDoiTuong =2.5
       
    } else if(rdDoiTuongHai.checked) {
        diemUuTienDoiTuong =1.5
        
    } else if(rdDoiTuongBa.checked) {
        diemUuTienDoiTuong =1

    } else if(ipKhongThuocDienUuTien !== '0') {
        alert('vui lòng nhập lại phần đối tượng')

    } else{
        diemUuTienDoiTuong = 0
    }


    var tongDiem = diemUuTienKhuVuc + diemUuTienDoiTuong + diemTongKet;
   
    if( tongDiem < ipDiemChuan || diemMonMot == 0 || diemMonHai == 0 || diemMonBa == 0){
        ketQua.innerHTML = ' Chúc may mắn lần sau'
        ketQua.style.color = 'red'
        point.innerHTML = ' ' + tongDiem
        point.style.color = "red"
    }else if(tongDiem >= ipDiemChuan){
         ketQua.innerHTML = ' Đậu'
         ketQua.style.color = 'blue'
         point.innerHTML = ' ' + tongDiem
         point.style.color = "blue"
    }
}



// tính tiền điện

var bill = function () {
    var ipBill = getElm('ipBill').value

    var billToPay;

    if(ipBill>0 && ipBill<51) {
        billToPay = ipBill * 500
    } else if(ipBill>=51 && ipBill<101) {
        billToPay = ipBill * 650
    } else if(ipBill>=101 && ipBill<151) {
        billToPay = ipBill * 850
    } else if(ipBill>=151 && ipBill<201) {
        billToPay = ipBill * 1100
    } else if(ipBill>200) {
        billToPay = ipBill * 1300
    } else{
        alert('vui lòng nhập lại')
    }
    var opBill = getElm('opBill').innerHTML = "Tổng tiền phải thanh toán là: " + billToPay.toLocaleString() + ' VNĐ' 
}

var btnTinhDiem = getElm('btnTinhDiem')
var btnBill = getElm('btnBill')

btnTinhDiem.addEventListener('click', tinhDiem)
btnBill.addEventListener('click', bill)

