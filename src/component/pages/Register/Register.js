import React, { useState , useEffect} from "react"

import './Register.css'
const Register = () => {

     const intialValues = {name: "" ,lname: "" ,file: "" , email: "", phone: "",check: "",number:"" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

    const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    
    if (!values.email) {
      errors.email = "فیلد خالی است";
    } else if (!regex.test(values.email)) {
      errors.email = "ایمیل کامل نیست";
    }

    if (!values.phone) {
      errors.phone = "فیلد خالی است";
    } else if (values.phone.length < 11) {
      errors.phone = "شماره کمتر از 11 رقم است";
    }else if ( values.phone[0] != 0 && values.phone[1] != 9){
      errors.phone = 'شماره درست نیست'  
    }

     if (!values.name) {
      errors.name = "فیلد خالی است";
    } 
     if (!values.lname) {
      errors.lname = "فیلد خالی است";
    } 

     if (!values.file) {
      errors.file = "فیلد خالی است";
    } 
     if (!values.number) {
      errors.number = "فیلد خالی است";
    } else if (values.number.length < 10) {
      errors.phone = "شماره ملی کمتر از 10 رقم است";
    }
     if (!values.check) {
      errors.check = "فیلد خالی است";
    } 

    return errors;
  };

     useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);
    
    return(
        <div style={{marginTop:'8rem'}}>
            <div className={' my-5'}>
                <div className={'container div-org-register bg-color'}>
                    {Object.keys(formErrors).length === 0 && isSubmitting && (
                    <span className="success-msg">فرم به درستی ارسال شد</span>
                )}
                    <div className={'row pt-4 '}>
                        <div className={'col-12 px-4'}>
                            <div>
                                <h3> ثبت نام آنلاین دوره</h3>
                            </div>
                            <form className="needs-validation py-2" onSubmit={handleSubmit} noValidate>
                                <div className="form-row" >
                                    <div className="form-group col-8">
                                        <label for="inputState">انتخاب دوره</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>دوره فشرده حکمرانی شرکتهای دولتی مبتنی بر ابزارهای مالی</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputState">نام</label>
                                        <input type="text" name="name" id="name" value={formValues.name} onChange={handleChange} className={formErrors.name && "input-error"} class="form-control"/>
                                         {formErrors.name && (
                                            <span className="error">{formErrors.name}</span>
                                        )}
                                    </div>
                                     <div className="form-group col-md-6">
                                         <label for="inputState">نام خانوادگی</label>
                                        <input type="text" name="lname" id="lname" value={formValues.lname} onChange={handleChange} className={formErrors.lname && "input-error"} class="form-control"/>
                                             {formErrors.lname && (
                                                <span className="error">{formErrors.lname}</span>
                                            )}
                                   
                                    </div>
                                    <div className="form-group col-md-6 d-flex"><label for="inputZip">تاریخ تولد</label>
                                        <div class="form-group col-md-2">
                                            
                                            <select id="inputState" class="form-control">
                                                <option selected>سال</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                         <div class="form-group col-md-2">
                                            
                                            <select id="inputState" class="form-control">
                                                <option selected>ماه</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                         <div class="form-group col-md-2">
                                            
                                            <select id="inputState" class="form-control">
                                                <option selected>روز</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                         <label for="inputState">تلفن</label>
                                        <input type="text" name="phone" id="phone" value={formValues.phone} onChange={handleChange} className={formErrors.phone && "input-error"} class="form-control"/>
                                         {formErrors.phone && (
                                            <span className="error">{formErrors.phone}</span>
                                        )}
                                    </div>
                                     <div className="form-group col-md-6">
                                         <label for="inputState">شماره ملی</label>
                                        <input type="text" name="number" id="number" class="form-control"/>
                                         {formErrors.number && (
                                    <span className="error">{formErrors.number}</span>
                                )}
                                    </div>
                                     <div className="form-group col-md-6">
                                         <label for="inputState">ایمیل</label>
                                        <input type="email" name="email" id="email" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"} class="form-control"/>
                                         {formErrors.email && (
                                    <span className="error">{formErrors.email}</span>
                                )}
                                    </div>
                                     <div className="form-group col-md-6">
                                        <label for="exampleFormControlFile1">آپلود عکس جهت درج در گواهینامه پایان دوره</label>
                                        <br/>
                                        <br/>
                                        <input type="file" name="file" id="file" class="form-control-file" value={formValues.file} onChange={handleChange} className={formErrors.file && "input-error"} id="exampleFormControlFile1"/>
                                         {formErrors.file && (
                                    <span className="error">{formErrors.file}</span>
                                )}
                                    </div>

                                    <div className="form-group col-12">
                                        <label for="exampleFormControlFile1">آیین نامه آموزشی*</label>
                                       <div className={'rules'}>
                                            فصل اول- شرایط ورود
                                            <br/>
                                            ماده ۱: هریک از دوره‌ها با توجه به ویژگی‌ها و سرفصل‌های درسی، دارای شرایط ورودی است که بنا به مقتضیات آن دوره تعیین شده است. متقاضی باید، از تطبیق شرایط خود با شرایط ورود به دوره اطمینان داشته و از اهداف دوره انتخابی نیز اطلاع کامل داشته باشد.
                                            ماده ۲: از نظر قوانین و مقررات جاری کشور مجاز به شرکت در دوره های آموزشی بوده و هیچ گونه منعی در این مورد نداشته باشد.
                                            ماده ۳: مقید به رعایت حجاب اسلامی در محیط آموزشی باشد.
                                            فصل دوم- نام نویسی
                                            ماده ۴: ثبت نام دوره ها به دو صورت حضوری یا اینترنتی امکان پذیر است. ارسال نامه، فاکس، فیش واریز وجه و یا هرگونه اسناد دیگر بمنزله ثبت نام نخواهد بود.
                                            ماده 5: شهریه دوره های کوتاه مدت در زمان ثبت نام از طریق انتقال وجه به شماره کارت 6362147010033213 بنام اندیشکده سیاست پژوهی منابع انسانی اسما، و یا لینک پرداخت آنلاین درصورت فعال سازی برای دوره دریافت می شود. شهریه دوره های بلند مدت مطابق با آیین نامه تخفیف و نحوه وصول وجه ثبت نام ( که به رویت متقاضی خواهد رسید) در موعد مقرر دریافت خواهد شد.
                                            • تبصره۱ : در صورت پرداخت نشدن بموقع شهریه و برگشت چک متقاضی، مطابق با آیین نامه، مرکز مجاز است برای دوره های کوتاه مدت از صدور گواهینامه و برای دوره های بلند مدت از شرکت در ادامه دوره و امتحان جلوگیری بعمل آورد.
                                            فصل سوم- حضور در کلاس، آزمون ها و گواهینامه (برای دوره های حضوری)
                                            ماده 6: حضور در تمام جلسات مربوط به هر درس الزامی است.
                                            • تبصره ۱ : محل برگزاری کلاسهای آموزشی در داخل یا خارج از محل مرکز آموزش می باشد.
                                            • تبصره ۲ : در کلاس‌های کارگاهی به همراه داشتن لپ تاپ الزامی است.
                                            • تبصره ۳ : امکان جابجایی زمان حضور در دوره پس از شروع دوره وجود ندارد.
                                            • تبصره ۴ : در تمامی کلاس‌های آموزشی، هر ساعت آموزشی مشمول ۱۰ دقیقه استراحت می باشد.
                                            • تبصره ۵ : در دوره های کوتاه مدت ملاک صدور گواهینامه ساعات حضور متقاضی در دوره می باشد. در صورت غیبت بیش از 20% از ساعات دوره ، برای متقاضی، گواهینامه صادر نخواهد شد.
                                            • تبصره ۵ : در دوره های بلند مدت، جهت صدور گواهینامه ساعات غیبت نباید بیش از 30% کل دوره باشد. همچنین حضور در امتحان پایانی هر درس و کسب نمره قبولی جهت صدور گواهینامه الزامی است. در صورت کسب نکردن نمره قبولی متقاضی موظف است در امتحان مجدد که در دوره های آتی برگزار میگردد شرکت نماید و هزینه مربوطه را طبق تعرفه بپردازد. (صدور گواهینامه دوره های بلند مدت منوط به اتمام کامل دوره می باشد)
                                            • تبصره ۶ : متقاضیانی که با هماهنگی آموزش و دلایل موجه نتوانسته اند در کلاسهایی از دوره های بلند مدت شرکت نمایند و یا خواستار شرکت مجدد می باشند، میتوانند حداکثر تا 1 سال پس از پایان دوره با پرداخت ٪۵۰ شهریه آن کلاس در دوره های بعدی آن شرکت نمایند.
                                            • تبصره ۷ : در صورت ثبت نام در دوره‌های حضوری/آنلاین، در مواقعی که بنابر شرایط فورس ماژور امکان برگزاری کلاس حضوری وجود نداشته باشد، ادامه دوره تا زمان بازگشت وضعیت به حالت عادی، به صورت آنلاین برگزار می شود.
                                            ماده ۷: گواهینامه دوره ها بر اساس اطلاعات مندرج در برگ ثبت نام صادر خواهد شد.متقاضی مسئولیت صحت و دقت این اطلاعات را می پذیرد.
                                            ماده ۸: متقاضیانی که از طرف سازمانهای خود برای شرکت در دوره ها معرفی شده اند، علاوه بر مقررات آموزشی مرکز، باید مقررات آموزشی سازمان خود را نیز رعایت نمایند. در صورت غیبت بیش از ۲۰٪ از ساعات دوره ، برای متقاضی، گواهینامه صادر نخواهد شد. ملاک صدور گواهینامه ساعات حضور متقاضی در دوره می باشد که پس از اتمام کامل دوره به آن سازمان و به نام متقاضی ثبت نام شده و حضور یافته در کلاس ارائه می شود. در صورت جابجایی اسامی باید نامه ای از طرف شرکت برای مرکز آموزش ارسال شود.
                                            ماده ۹: متقاضیان دوره های بلند مدت که برخی از دروس دوره انتخابی خود را در دوره های مشابه دیگر این مرکز گذرانده اند، میتوانند با رعایت ضوابط زیر از آن دروس معاف شوند:
                                            • بیش از دو سال از زمان پایان آن دوره نگذشته باشد.
                                            • مبلغ معافیت مطابق با تعرفه مرکز پرداخت گردد.
                                            فصل چهارم- انصراف از دوره ها و اطلاع رسانی
                                            ماده ۱۰: با اعلام انصراف کتبی و تا ساعت ۱۳ سه روز قبل از شروع دوره کل شهریه به متقاضی مسترد خواهد شد. ملاک تاریخ انصراف، زمان ثبت نامه ی متقاضی در دبیرخانه اندیشکده است. در صورت دریافت درخواست انصراف از سه روز قبل از شروع دوره تا زمان شروع دوره، ٪۲۰ از مبلغ کل دوره کسر و مابقی وجه به متقاضی مسترد خواهد شد.
                                            با شروع دوره، مبلغ دریافتی بابت شهریه کل دوره به هیچ وجه مسترد نخواهد شد.
                                            ماده ۱۱: اطلاع رسانی جهت شروع دوره های حضوری، تغییر در جدول زمانی کلاسها و یا تشکیل نشدن هر یک از دوره ها از طریقی است که به هنگام ثبت نام به اطلاع متقاضی رسیده است.
                                            ماده ۱۲: شهریه دوره های غیر حضوری آنلاین و نیمه حضوری به هیچ عنوان مسترد نخواهد شد.
                                            ماده ۱۳: در صورت بروز هر گونه حوادث و بلایای طبیعی نظیر سیل، زلزله، آتش‌سوزی‌های فراگیر، جنگ، بیماری‌های پاندمی و سایر شرایط فورس ماژور که خارج از حیطه اقتدار و اختیار مرکز باشد، شهریه دریافتی به هیچ وجه مسترد نخواهد شد؛ لیکن، دانش‌پذیر می‌تواند در اولین فرصت پس از رفع شرایط اضطرار نسبت به ادامه دوره آموزشی اقدام نماید.
                                       </div>
                                         <div class="ginput_container ginput_container_consent my-3"><input name="check" id="check" type="checkbox" value={formValues.check} onChange={handleChange} className={formErrors.check && "input-error"} aria-describedby="gfield_consent_description_1_23" aria-required="true" aria-invalid="false"/> <label class="gfield_consent_label" for="input_1_23_1">قوانین را میپذیرم</label><input type="hidden" name="input_23.2" value="قوانین را میپذیرم" class="gform_hidden"/><input type="hidden" name="input_23.3" value="3" class="gform_hidden"/></div>
                                         {formErrors.check && (
                                    <span className="error">{formErrors.check}</span>
                                )}
                                        <button type="submit" class="btn btn-success">ارسال</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register