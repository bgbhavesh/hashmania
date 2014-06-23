(function(){﻿window.ParsleyConfig = window.ParsleyConfig || {};

(function ($) {
  window.ParsleyConfig = $.extend( true, {}, window.ParsleyConfig, {
    messages: {
      // parsley //////////////////////////////////////
        defaultMessage: "مقدار وارد شده معتبر نیست."
      , type: {
            email:      "آدرس ایمیل وارد شده معتبر نیست."
          , url:        "آدرس سایت وارد شده معتبر نیست."
          , urlstrict:  "آدرس سایت وارد شده معتبر نیست."
          , number:     "عدد وارد شده معتبر نیست."
          , digits:     "تعداد ارقام وارد شده معتبر نیست."
          , dateIso:    "تاریخ به صورت صحیح وارد نشده است. (YYYY-MM-DD)."
          , alphanum:   "فقط عدد و حروف معتبر است."
        }
      , notnull:        "این مقدار نباید تهی باشد."
      , notblank:       "این مقدار نباید خالی باشد."
      , required:       "این مقدار لازم است."
      , regexp:         "مقدار وارد شده معتبر نیست"
      , min:            "مقدار وارد شده نباید از  %s کمتر باشد."
      , max:            "مقدار وارد شده نباید از %s بیشتر باشد."
      , range:          "مقدار وارد شده باید بین %s و %s باشد."
      , minlength:      "طول مقدار وارد شده باید حداقل %s حرف باشد."
      , maxlength:      "تعداد حرف وارد شده نباید بیشتر از %s حرف باشد."
      , rangelength:    "تعداد حروف وارد شده باید بین  %s و %s حرف باشد."
      , equalto:        "این مقدار باید با مقدار اصلی برابر باشد"
      , mincheck:       "تعداد انتخاب ها باید کمتر از %s انتخاب باشد."
      , maxcheck:       "تعداد انتخاب ها باید بیشتر از %s انتخاب باشد."
      , rangecheck:     "تعداد انتخاب ها باید بین  %s و %s انتخاب باشد."

      // parsley.extend ///////////////////////////////
      , minwords:       "این مقدار باید شامل حداقل %s کلمه باشد."
      , maxwords:       "Cette valeur ne peut pas dépasser %s کلمه باشد."
      , rangewords:     "این مقدار باید بین %s و %s کلمه باشد."
      , greaterthan:    "مقدار وارد شده باید بیشتر از %s باشد."
      , lessthan:       "مقدار وارد شده باید کمتر از %s باشد."
    }
  });
}(window.jQuery || window.Zepto));

})();
