import React from 'react';
import "./mailList.css";
const MailList = ({props}) => {
  return (
    <div className="mail">
        <div className="mailTitle">وقت و هزینه خود را صرفه‌جویی کنید</div>
        <span className="mailDesc">ثبت‌نام کنید تا بهترین تخفیف‌ها را برای شما ارسال کنیم</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="ایمیل شما" />
            <button>ارسال</button>
        </div>
    </div>
  )
}

export default MailList;