function tinh() {				
	var num1 = document.querySelector('#val1').value;				
	var num2 = document.getElementById('val2').value;				
					
	num1 = parseFloat(num1);				
	num2 = parseFloat(num2);				
					
	var tong = (num1 + num2 * 2) / 3;				
					
	// document.querySelector('#kq').innerHTML = tong.toFixed(2);				
	// document.querySelector('#kq').innerText = tong.toFixed(2);				
	document.querySelector('#kq').textContent = tong.toFixed(2);				
	// alert(tong)				
	// document.write(tong.toFixed(2))				
	console.log(tong.toFixed(2))				
					
					
					
	var loai				
	if (tong < 5) {				
	loai = "Học sinh trung binh"				
	document.querySelector('#loai').style.color = 'red';				
	document.querySelector('#loai').style.backgroundColor = 'yellow';				
					
	} else if (tong < 8) {				
	loai = "Học sinh khá"				
	document.querySelector('#loai').style.color = 'blue';				
					
	} else {				
	loai = "Học sinh Giỏi"				
	document.querySelector('#loai').style.color = 'green';				
					
	}				
					
	document.querySelector('#loai').innerHTML = loai;				
					
					
					
					
	}				