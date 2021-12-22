

import Header from "../layout/Header/Header";
import './Main.css'
import {SwiperSlide, Swiper}  from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { ProductList } from "../pages/datalist/ProductList";
import { ProductServise } from "../pages/datalist/ProductServise";
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import { ProductListNew } from "../pages/datalist/ProductListNew";


SwiperCore.use([Autoplay,Pagination,Navigation]);



const Main = () => {

   const products = ProductServise.getProducts()
   const productsnew = ProductServise.getProductsNew()

    return (
        <div >
            <Header/>
            <div className={'bg-main'}>
                <div >
                    <div className={"container-fluid"} id={'doreh'}>
                       <div class="row ">
                            <div className={'col-12 one-div-section py-4'} >
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <h3> دوره های مهارتی</h3>
                            </div>
                            <div className={'two-div-section'} >
                               <div className={'col-4  py-4'}>
                                    <div class="card mb-3 h-100" style={{maxWidth: "540px"}}>
                                        <div class="row g-0">
                                            <div class="col-md-4 col-12 div-img ">
                                                <img src="https://mppa.ir/wp-content/uploads/2021/02/news.jpg" class="img-fluid rounded-start" alt="..."/>
                                            </div>
                                            <div class="col-md-8 col-12 py-3">
                                                <div class="card-body">
                                                    <h5 class="card-title">دوره عالی خط مشی گذاری عمومی</h5>
                                                    <p class="card-text">ساختارهای برنامه ریزی و مدیریت شهری در ایران تقریبا از دهه 1970 میلادی شروع به تهیه طرح های هادی و جامع برای شهرها نمودند. امری که تاکنون در ایران...</p>
                                                    <a href="https://mppa.ir/courses/%d8%aa%d8%b3%d8%aa-2/" title="مشاهده دوره" class="btn btn-outline-primary asm-radius float-end mt-5">مشاهده دوره</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                                <div className={'col-4  py-4'}>
                                    <div class="card mb-3 h-100" style={{maxWidth: "540px"}}>
                                        <div class="row g-0">
                                            <div class="col-md-4 col-12 div-img">
                                                <img src="https://mppa.ir/wp-content/uploads/2021/02/2021-02-17_234833.jpg" class="img-fluid rounded-start" alt="..."/>
                                            </div>
                                            <div class="col-md-8 col-12 py-3">
                                                <div class="card-body">
                                                    <h5 class="card-title">دوره عالی خط مشی گذاری عمومی</h5>
                                                    <p class="card-text">ساختارهای برنامه ریزی و مدیریت شهری در ایران تقریبا از دهه 1970 میلادی شروع به تهیه طرح های هادی و جامع برای شهرها نمودند. امری که تاکنون در ایران...</p>
                                                    <a href="https://mppa.ir/courses/%d8%aa%d8%b3%d8%aa-2/" title="مشاهده دوره" class="btn btn-outline-primary asm-radius float-end mt-5">مشاهده دوره</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bg-secound'}>
                    <div className={"container-fluid"} id={'news'}>
                        <div className={'row'}>
                            <div className={'col-12 one-div-section pb-2 pt-4'}>
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <h3> دوره های مهارتی</h3>
                            </div>
                        </div>
                        
                        <div className={'container swiper'}>
                            {/* <Swiper navigation={true} slidesPerView={1} spaceBetween={5} autoplay={{
                                "delay": 2500,
                                "disableOnInteraction": false
                                
                                }} breakpoints={{
                                "640": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 20
                                },
                                "768": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 40
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 50
                                }
                                }} className="mySwiper py-5"> 

                                <SwiperSlide>
                                
  <div class="col">
    <div class="card h-100">
      <img src="https://mppa.ir/wp-content/uploads/2021/02/%D8%B9%DA%A9%D8%B3-%D8%AE%D8%A8%D8%B16.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">کارگاه مدیران جهادی انقلاب اسلامی با حضور دکتر محسن رضایی دبیر محترم مجمع تشخیص مصلحت نظام</h5>
        <p class="card-text">کارگاه مدیران جهادی انقلاب اسلامی با حضور دکتر محسن رضایی دبیر محترم مجمع تشخیص مصلحت نظام  در مدرسه حکمرانی اسما برگزار شد.

به منظور ارتقاء اثر بخشی آموزش های ارائه شده در دوره های عالی مدیریت خط مشی گذاری عمومی که مهم ترین هدف آن تربیت و توانمند سازی افراد علاقه مند به حوزه خط مشی گذاری در سطوح حاکمیتی است ، کارگاه راهبردی مدیران جهادی انقلاب اسلامی ویژه دانشپذیران نوبت اول و دوم مدرسه حکمرانی اسما برگزار شد.</p>
      </div>
    </div>
  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                   
  <div class="col">
    <div class="card h-100">
      <img src="https://mppa.ir/wp-content/uploads/2021/02/%D8%B9%DA%A9%D8%B3-%D8%AE%D8%A8%D8%B14.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">برگزاری پنل تخصصی تحلیل جنگ اقتصادی و ارزیابی پیامدهای آن</h5>
        <p class="card-text">اقتصاد همواره یکی از ارکان مهم قدرت هرکشور در عرصه­ی بین الملل است. شرایط اقتصادی فعلی در دنیا و رقابت بر سر به­دست آوردن سهم بیشتر از بازارهای تولید و عرضه از یک سو و اعمال فشار سیاسی با استفاده از قدرت اقتصادی بر دیگرکشورها از سوی کشورهای قدرتمندتر، این مهم را به یک جنگ تبدیل کرده است.</p>
      </div>
    </div>
  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                   
  <div class="col">
    <div class="card h-100">
      <img src="https://mppa.ir/wp-content/uploads/2021/02/%D8%B9%DA%A9%D8%B3-%D8%AE%D8%A8%D8%B12.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">تفاهم نامه همکاری اندیشکده اسما با مرکز مطالعات و بررسی راهبردی دبیرخانه مجمع تشخیص مصلحت نظام</h5>
        <p class="card-text">تفاهم نامه همكاری و حمایت مركز مطالعات و بررسی های راهبردی دبيرخانه مجمع تشخيص مصلحت نظام از دوره های خط مشی گذاری عمومی اندیشکده اسما امضا شد.

به گزارش روابط عمومی اندیشکده اسما؛ بر اساس این تفاهم نامه که به امضا دکتر میثم مظفر ریاست مرکز مطالعات و بررسی های راهبردی دبیرخانه مجمع تشخیص مصلحت نظام و دکتر عطاءاله هرندی مدیر عامل اندیشکده</p>
      </div>
    </div>
  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                               
  <div class="col">
    <div class="card h-100">
      <img src="https://mppa.ir/wp-content/uploads/2021/02/%D8%B9%DA%A9%D8%B3-%D8%AE%D8%A8%D8%B12.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">دومین کارگاه مدیریت جهادی با حضور دبیر مجمع تشخیص مصلحت نظام برگزار شد</h5>
        <p class="card-text">به گزارش روابط عمومی مدرسه حکمرانی اسما، پس از برگزاری موفقیت آمیز نوبت اول کارگاه مدیریت جهادی، نوبت دوم این کارگاه با حضور دکتر محسن رضایی؛ دبیر محترم مجمع تشخیص مصلحت نظام برای دانشپذیران کد سه مدرسه حکمرانی اسما برگزار شد.</p>
      </div>
    </div>
  </div>
                                </SwiperSlide> 
                            </Swiper> */}
                            <ProductList products={products}/>
                        </div>
                    </div>
                </div>
                <div >
                    <div className={"container-fluid"} id={'weblog'}>
                        <div className={'row'}>
                            <div className={'col-12 one-div-section py-4'}>
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <h3> دوره های مهارتی</h3>
                            </div>
                        </div>
                    </div>
                    <div className={'container card-end pb-4'}>
                        {/* <div class="row row-cols-1 row-cols-md-3 g-4">
                          <div class="col">
                            <div class="card h-100">
                                <div className={'div-img-2'}>
                              <img src="https://mppa.ir/wp-content/uploads/2021/03/7a1212e3a1d007611aab47477de6152f.jpg" class="card-img-top" alt="..."/>
                              </div>
                              <div class="card-body">
                                <h5 class="card-title">دومین کارگاه مدیریت جهادی با حضور دبیر مجمع تشخیص مصلحت نظام برگزار شد</h5>
                                <p class="card-text">به گزارش روابط عمومی مدرسه حکمرانی اسما، پس از برگزاری موفقیت آمیز نوبت اول کارگاه مدیریت جهادی، نوبت دوم این کارگاه با حضور دکتر محسن رضایی؛ دبیر محترم مجمع تشخیص مصلحت نظام برای دانشپذیران کد سه مدرسه حکمرانی اسما برگزار شد.</p>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="card h-100">
                                <div className={'div-img-2'}>
                              <img src="https://mppa.ir/wp-content/uploads/2021/03/unnamed.jpg" class="card-img-top" alt="..."/>
                              </div>
                              <div class="card-body">
                                <h5 class="card-title">دومین کارگاه مدیریت جهادی با حضور دبیر مجمع تشخیص مصلحت نظام برگزار شد</h5>
                                <p class="card-text">به گزارش روابط عمومی مدرسه حکمرانی اسما، پس از برگزاری موفقیت آمیز نوبت اول کارگاه مدیریت جهادی، نوبت دوم این کارگاه با حضور دکتر محسن رضایی؛ دبیر محترم مجمع تشخیص مصلحت نظام برای دانشپذیران کد سه مدرسه حکمرانی اسما برگزار شد.</p>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="card h-100">
                                <div className={'div-img-2'}>
                              <img src="https://mppa.ir/wp-content/uploads/2021/02/%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B5%D9%81%D8%AD%D9%87-%D8%A2%D9%85%D9%88%D8%B2%D8%B4.jpeg" class="card-img-top" alt="..."/>
                              </div>
                              <div class="card-body">
                                <h5 class="card-title">دومین کارگاه مدیریت جهادی با حضور دبیر مجمع تشخیص مصلحت نظام برگزار شد</h5>
                                <p class="card-text">به گزارش روابط عمومی مدرسه حکمرانی اسما، پس از برگزاری موفقیت آمیز نوبت اول کارگاه مدیریت جهادی، نوبت دوم این کارگاه با حضور دکتر محسن رضایی؛ دبیر محترم مجمع تشخیص مصلحت نظام برای دانشپذیران کد سه مدرسه حکمرانی اسما برگزار شد.</p>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      <ProductListNew productsnew={productsnew}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
