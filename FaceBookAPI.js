var login = require("facebook-chat-api");

var request = require('request');

login({email: "HunT.Kun", password: "0958592413q"}, function callback (err, api) {

    if(err) return console.error(err);
    var stopListening = api.listen((err, event) => {
        if(err) return console.error(err);
        api.markAsRead(event.threadID, (err) => {
            if(err) console.error(err);
        });
        switch(event.type) {
            case "message":
                if(event.body == 'on') {     //เมื่อพิมพ์ Chat ไปหาบอทว่า เปิดไฟ สามารถแก้ไขข้อความได้ตรงนี้
                    api.sendMessage("เปิดแล้วค่ะ", event.threadID);      // ข้อความบอท ที่ตอบกลับมาว่า เปิดไฟแล้วค่ะ
					request('http://api.anto.io/channel/set/Oo1Aeoi3Y2Jy5HYG4QLcft0tNz6PTCObBu3d6qSO/catbot/ch1/1', function (error, response, body) {
					if (!error && response.statusCode == 200) {
					console.log(body) // Print the google web page.
					}})
					
					setTimeout(myTime, 5000)
					function myTime(){
						request('http://api.anto.io/channel/set/Oo1Aeoi3Y2Jy5HYG4QLcft0tNz6PTCObBu3d6qSO/catbot/ch1/0', function (error, response, body) {
						if (!error && response.statusCode == 200) {
						console.log(body) // Print the google web page.
						}})
					}
				}
                else if(event.body == 'off'){
					api.sendMessage("ปิดแล้วค่ะ", event.threadID);
					request('http://api.anto.io/channel/set/Oo1Aeoi3Y2Jy5HYG4QLcft0tNz6PTCObBu3d6qSO/catbot/ch1/0', function (error, response, body) {
					if (!error && response.statusCode == 200) {
					console.log(body) // Print the google web page.
					}})
				}
                else{

                 api.sendMessage("Bot : ฉันไม่เข้าใจคำสั่ง " + event.body, event.threadID);

                break;
                }
				
            case "event":
                console.log(event);
                break;
        }
    });
});