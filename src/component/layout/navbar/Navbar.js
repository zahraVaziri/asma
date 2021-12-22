import { Grid, Hidden, IconButton, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { toggleDrawer, useLayoutDispatch } from '../../context/LayoutContext';
import {HashLink } from 'react-router-hash-link'
const Navbar = () => {

  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down('md'));
  const LayoutDispatch = useLayoutDispatch();

  return (
    <div className={'bg-navbar'} >
      <div className={"container-fluid"}>
         <Grid container spacing={1} style={{justifyContent:'space-between'}} className={'py-3'}>
                <Grid item  sm={9} >
                    <div style={{display:'flex',alignItems:'center',}}>
                        <Hidden mdDown>
                            <Link  to="/" className={'header-brand'}>
                                <img src={'https://mppa.ir/wp-content/themes/andishkade-asmae/img/logo.png'} alt={'23'} />
                            </Link>
                        </Hidden>
                        {isTabletSize && <IconButton onClick={() => toggleDrawer(LayoutDispatch)}><i className="fa fa-bars text-light" style={{outline:'unset',color:'black'}} aria-hidden="true"></i></IconButton>}
                    
                        { isTabletSize ? '' :
                            <ul className={'ul-nav-homepage'} >
                                <li>
                                   <HashLink smooth to="/#news">
                                       اخبار
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#weblog">
                                       وبلاگ
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#doreh">
                                        دوره های مهارتی
                                    </HashLink>
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
                                    <Link  to="/contact">
                                        تماس باما
                                    </Link>
                                </li>
                                
                                     <li class="dropdown">
                                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ثبت نام آنلاین دوره ها
                                      </a>
                                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">دوره فشرده حکمرانی شرکتهای دولتی مبتنی بر ابزارهای مالی</a></li>
                                        
                                      </ul>
                                    </li>
                                
                                <li class="dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  فیلنامه های تخصصی
                                  </a>
                                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">سیاستگذاری علم و فناوری</a></li>
                                    <li><a class="dropdown-item" href="#">خط مشی گذاری عمومی</a></li>
                                   
                                  </ul>
                                </li>

                            </ul>
                        }
                    </div>
                </Grid>
                <Grid item  md={3}  className={'grid-left-nav'}>
                   <Link  to="/Register">
                   <button class="btn btn-primary" type="button">درخواست سفارش</button>
                   </Link>
                    <a href="https://instagram.com/asma.mppa/" title="اینستاگرام" className="social-header">
                    <i class="fab fa-instagram"></i>
                </a>
                   <a href="https://instagram.com/asma.mppa/" title="تلگرام" className="social-header">
                    <i class="fab fa-telegram-plane"></i>
                </a>   
                    
                </Grid>
            </Grid>
      </div>
    </div>
  );
}

export default Navbar;
