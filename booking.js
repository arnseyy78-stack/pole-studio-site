
function peso(amount){return "₱"+Number(amount).toLocaleString("en-PH")}
function getPackagePrice(){const p=document.getElementById("packageType").value;return {"Single Class":800,"4-Class Package":3000,"8-Class Package":5600,"Private Class":1500}[p]||0}
function updatePrice(){const price=getPackagePrice();const students=Number(document.getElementById("students").value||1);document.getElementById("priceDisplay").textContent=price?`${peso(price)} x ${students} student(s) = ${peso(price*students)}`:"Select a package to see the total."}
["packageType","students"].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener("change",updatePrice)})
function validateAndSendBooking(){
 const ids=["name","phone","email","classType","bookingDate","bookingTime","packageType","signature"];
 for(const id of ids){const el=document.getElementById(id);if(!el.value.trim()){alert("Please complete all required booking details.");el.focus();return}}
 if(!document.getElementById("waiverAgree").checked){alert("Please read and agree to the waiver before booking.");return}
 const name=document.getElementById("name").value.trim(),phone=document.getElementById("phone").value.trim(),email=document.getElementById("email").value.trim(),classType=document.getElementById("classType").value,date=document.getElementById("bookingDate").value,time=document.getElementById("bookingTime").value,packageType=document.getElementById("packageType").value,students=document.getElementById("students").value,signature=document.getElementById("signature").value.trim(),notes=document.getElementById("notes").value.trim()||"None",total=getPackagePrice()*Number(students||1);
 const message=`Hi Legacy Pole & Aerial Dance Studio, I would like to book a class.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AClass: ${encodeURIComponent(classType)}%0ADate: ${encodeURIComponent(date)}%0ATime: ${encodeURIComponent(time)}%0APackage: ${encodeURIComponent(packageType)}%0AStudents: ${encodeURIComponent(students)}%0ATotal: ${encodeURIComponent(peso(total))}%0AWaiver Signed By: ${encodeURIComponent(signature)}%0ANotes: ${encodeURIComponent(notes)}%0A%0AI will send my proof of payment to confirm my slot.`;
 document.getElementById("confirmation").classList.remove("hidden");
 setTimeout(()=>{window.location.href=`https://api.whatsapp.com/send?phone=639063782296&text=${message}`},700)
}
