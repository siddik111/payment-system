// login part start
    // login page show start
    let LoginShowBtn =document.getElementById('login_show_btn');
    if(LoginShowBtn){
        LoginShowBtn.addEventListener('click', function(){
            var loginBox =document.getElementById('login_box')
            var bannerText =document.getElementById('banner_text')
            var bannerImg =document.getElementById('banner_img')
            bannerText.classList.add('remove')
            bannerImg.classList.add('remove')
            loginBox.classList.add('show')
        });
    }
    // login page show end

 // logIn function start
    const userId=123456;
    const userPass=123;
    let userLogInBtn =document.getElementById('user_login_btn')
    if(userLogInBtn){
        userLogInBtn.addEventListener('click', function(){
            var inputId =document.getElementById('input_id')
            var inputPass =document.getElementById('input_pass')
            var errorIdMsg =document.getElementById('error_id_msg')
            var errorPassMsg =document.getElementById('error_pass_msg')
            if(inputId.value ==""){
                inputId.style.borderColor="red"
                errorIdMsg.style.display="block"
                // inputId.focus()
                console.log('hello')
            }
            else if(inputId.value != userId){
                inputId.style.borderColor="red"
                errorIdMsg.style.display="block"
                errorIdMsg.innerText="enter correct Id"
            }
            else if(inputId.value == userId && inputPass.value ==""){
                inputId.style.borderColor="#222"
                inputPass.style.borderColor="red"
                errorIdMsg.style.display="none"
                errorPassMsg.style.display="block"
            }
            else if(inputId.value == userId && inputPass.value != userPass){
                inputId.style.borderColor="#222"
                errorIdMsg.style.display="none"
                inputPass.style.borderColor="red"
                errorPassMsg.style.display="block"
                errorPassMsg.innerText="enter your correct password"
            }
            else if(inputId.value == userId && inputPass.value == userPass){
                console.log('log in done')
                window.location.href ='home.html'
            }
            else{
                
                console.log("pblm")
            }
        });
    };
    
    // logIn function end
// login part end

// notification part 
    let notificationBtn =document.getElementById('notification_btn')
    let notificationBox =document.getElementById('notification_box')
    notificationBtn.addEventListener('click', function(){
        if(notificationBtn){
            notificationBox.style.display ="block"
        }
    });
    let notificationCloseBtn =document.getElementById('notification_close_btn')
    notificationCloseBtn.addEventListener('click', function(){
        if(notificationCloseBtn){
            notificationBox.style.display ="none"
        }
    })
// notification part 
let inputTotalAmount =document.getElementById('input_total_amount');

// cashin part start
// let userBalance =document.getElementById('user_balance')
let cashInShowBtn =document.getElementById('cash_in_btn'); 
let cashInBox =document.getElementById('cashin_box');

cashInShowBtn.addEventListener('click', function(){
    if(cashInShowBtn){
        cashOutBox.style.display="none"
        cashInBox.style.display="flex"
        cashInBox.style.transition="4s"
        // cashIn.focus()
    }

});

let cashInSendBtn =document.getElementById('cash_in_send_btn');
let notificationMsg =document.getElementById('notifications_msg')
// send moeny start
cashInSendBtn.addEventListener('click', function(){
    if(cashInSendBtn){
        var inputAmount =document.getElementById('cashin_amount').value;
        var convartInputAmountNumber = parseFloat(inputAmount)
        var convartInputTotalAmountNumber = parseFloat(inputTotalAmount.innerText)
        inputTotalAmount.innerHTML =convartInputTotalAmountNumber + convartInputAmountNumber
        var p =document.createElement('p');
        p.innerHTML=`${convartInputAmountNumber} Cash in successfully <span>x</span>`
        notificationMsg.appendChild(p)
        var inputAmount =document.getElementById('cashin_amount').value=""  
    }
});
// cashin part end
// cashOut part start
let cashOutBtn =document.getElementById('cash_out_btn');
let cashOutBox =document.getElementById('cashout_box')
cashOutBtn.addEventListener('click', function(){
    if(cashOutBtn){
        cashInBox.style.display="none"
        cashOutBox.style.display ="flex"
        cashOutBox.style.transition =".4s"
    }
});
let cashOutSendBtn =document.getElementById('cash_out_send_btn')
let notifiBox =document.getElementById('notifi_box')
cashOutSendBtn.addEventListener('click', function(){
    var errorCashoutAmountMsg =document.getElementById('error_cashout_amount_msg')
    var pinChackBox =document.getElementById('pin_chack_box')
    var errorPinChackMsg =document.getElementById('error_pin_chack_msg')
        errorPinChackMsg.style.color="red"
    var chackPin =document.getElementById('chack_pin')
    var conformPinBtn =document.getElementById('conform_pin_btn')
    var cashOutAmount =document.getElementById('cashout_amount').value
    var convartCashOutAmountNumber = parseFloat(cashOutAmount)
    var convartInputTotalAmountNumber = parseFloat(inputTotalAmount.innerText)
    if(cashOutSendBtn){
        if(cashOutAmount == 0){
            errorCashoutAmountMsg.innerText="Enter CashOut Amount"
            errorCashoutAmountMsg.style.color="red"
        }
        else if(cashOutAmount != 0){
            errorCashoutAmountMsg.innerText=""
            pinChackBox.style.display="flex"
            cashOutBox.style.display="none"
            chackPin.focus() 
            // var msg =document.createElement("p")
            // msg.innerText=`your cashout Amount: ${cashOutAmount}`
            // notifiBox.appendChild(msg)
            if(conformPinBtn){
                conformPinBtn.addEventListener('click', function(){
                    if(chackPin.value==""){
                        errorPinChackMsg.innerText="Enter password"
                        chackPin.focus()
                    }
                    else if(chackPin.value!=userPass){
                        errorPinChackMsg.innerText=""
                        errorPinChackMsg.innerText="Enter correct password"
                        chackPin.focus()
                    }
                    else if(chackPin.value==userPass){ 
                        pinChackBox.style.display="none" 
                        inputTotalAmount.innerHTML =convartInputTotalAmountNumber - convartCashOutAmountNumber
                        var p =document.createElement('p');
                        p.innerHTML=`${cashOutAmount} Cash Out successfully <span id="notification_msg_close_btn">x</span>`
                        notificationMsg.appendChild(p)
                        var cashOutAmount =document.getElementById('cashout_amount').value =""
                        let notificationMsgCloseBtn =document.getElementById('notification_msg_close_btn')
                        notificationMsgCloseBtn.addEventListener('click', function(){
                            if(notificationMsgCloseBtn){
                                notificationMsg.removeChild(p);
                            }
                        });
                        chackPin.value=""
                        errorPinChackMsg.innerText=""

                    }
                });
            }
        }
        
    }
});
// cashOut part end

