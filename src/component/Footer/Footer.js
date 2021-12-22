
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className={'footer'}>
            <div className={'container'}>
                <div className={'row py-5'}>
                    <div className={'col-md-4 text-center py-2'}>
                        <ul  >
                            <li>
                                <Link className={'text-color'} smooth to="/servis">
                                    <img src={'	https://mppa.ir/wp-content/themes/andishkade-asmae/img/logo-f.png'} alt={'123'}/>
                                </Link>
                            </li>
                            <li>
                                <p> تهران، خیابان خواجه عبدلله انصاری، خیابان رودخانه، ک 8، پ 6</p>
                            </li>
                        </ul>
                    </div>
                    <div className={'col-md-4 text-center py-2'}>
                        <ul className={'ul-nav-homepage'} >
                                <li>
                                    <Link  to="/servis">
                                       اخبار
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/about">
                                       وبلاگ
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/about">
                                        دوره های مهارتی
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/about">
                                        پنل کاربری
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/about">
                                        درباره ما
                                    </Link>
                                </li>
                                <li>
                                    <Link  to="/about">
                                        تماس باما
                                    </Link>
                                </li>
                            </ul>
                    </div>
                    <div className={'col-md-4 text-center py-2'}>
                        <div className={' py-2'}>
                        <h6>شبکه های اجتماعی</h6>
                        <div className={'social-icon'}>
                            <a href="https://instagram.com/rahesh.group" title="اینستاگرام"><i class="fab fa-instagram"></i></a>
                        </div>
                        </div>
                        <div class="email-khabar d-flex">
  <input type="email" name="EMAIL" class="form-control" placeholder="پست الکترونیک خود را وارد کنید" required=""/>
  <input type="submit" class="btn btn-primary " value="ثبت"/>
  <div class="clearfix"></div>
</div>
                        <img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=235778&amp;Code=sB6ucFOmyPgXf4QGkXo0" alt="" style={{cursor:"pointer"}} id="sB6ucFOmyPgXf4QGkXo0"/>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  );
}

export default Footer;
