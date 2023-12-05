import bannerimg from '../src/image/Banner1.png'
import puzzleimg from '../src/image/Puzzle.png'
import photoimg from '../src/image/photo.png'
import { IoMdSend } from "react-icons/io";
import groupimg from '../src/image/Group 31.png';
import Illustrationimg from '../src/image/Illustration & Title.png'
import group35img from '../src/image/Group 35.png'
import group36img from '../src/image/Group 36.png'

// const user = {
//     Name: 'Demoimg',
//     imgurl: 'https://cdn.pixabay.com/photo/2023/11/26/21/11/dog-8414313_1280.jpg',
//     Size: 50
// }
export default function Services() {

    return (
        <div className='services-pag'>
            <div className='svg-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="581" height="452" viewBox="0 0 861 642" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M779.244 600.819C735.359 650.405 659.602 655.072 609.962 611.247L40.7288 108.69C-13.0331 61.2252 -13.4326 -22.488 39.8739 -70.4634L551.284 -530.729C600.529 -575.05 676.375 -571.075 720.718 -521.849L1179.71 -12.3149C1220.57 33.0346 1220.87 101.824 1180.42 147.531L779.244 600.819Z" fill="#0D47A1" />
                </svg>
            </div>
            <div className='svg-img-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="561" height="442" viewBox="0 0 861 642" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M779.244 600.819C735.359 650.405 659.602 655.072 609.962 611.247L40.7288 108.69C-13.0331 61.2252 -13.4326 -22.488 39.8739 -70.4634L551.284 -530.729C600.529 -575.05 676.375 -571.075 720.718 -521.849L1179.71 -12.3149C1220.57 33.0346 1220.87 101.824 1180.42 147.531L779.244 600.819Z" fill="#0D47A1" />
                </svg>
            </div>
            <section className='Aenean'>
                <div className="d-flex">
                    <div className="col">
                        <h3>Aenean Facilisis Vitae</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing Integer id orci sed ante tincidunt</p>
                        {/* <button className='write-btn'>Write to us </button> */}
                        <button className='write-btn'>
                            Write to us <IoMdSend className='icon-send' /></button>

                        {/* {Button && <Button onClick={() => window.location.href = '../about'}>Write to us</Button>} */}
                    </div>
                    <div className="col">
                        <img className="banner-img" alt="" src={bannerimg} />
                    </div>
                </div>
            </section>
            {/* Business Solution */}
            <section className='Business'>
                <div className='d-flex'>
                    <div className='col-md-4'>
                        <div className='bussiness-text'>
                            <h3>Business Solution</h3>
                        </div>
                        <p>Interdum et malesuada fames ac ante…</p>
                        <div className='line-1'></div>
                    </div>
                    <div className='col-md-4'>
                        <h3>Free project quote</h3>
                        <p>Interdum et malesuada fames ac ante…</p>
                    </div>
                    <div className='col-md-4'>
                        <h3>Nulla lobortis nunc</h3>
                        <p>Interdum et malesuada fames ac ante…</p>
                    </div>
                </div>
            </section>
            <section className='AboutUs'>
                <div className='d-flex'>
                    <div className='col'>
                        <div className='hero-box'></div>
                        <div className='hero-box-1'></div>
                        <div className='hero-box-2'>
                            <h3 className='about-text' >About Us</h3>
                        </div>
                        <div className='hero-box-3'></div>
                        <div className='img'>
                            <img className=' puzzle-img' alt='' src={puzzleimg}></img>
                            <img className='photo-img' alt='' src={photoimg}></img>
                        </div>
                    </div>
                    <div className='col'>
                        <h5>Nulla lobortis nunc vitae purus facilisis</h5>
                        <p style={{ width: 500 }}>Vestibulum sit amet tortor libero lobortis semper at
                            et odio. In eu tellus tellus. Pellentesque
                            ullamcorper ultrices. Aenean facilisis vitae purus
                            facilisis semper.</p>
                        <div className='employee'>
                            <div className='d-flex'>
                                <div className='col-md'>
                                    <h2>+200</h2>
                                    <div className='line'></div>
                                    <p>Employee</p>
                                </div>
                                <div className='col-md'>
                                    <h2>+500</h2>
                                    <div className='line'></div>
                                    <p>Project</p>
                                </div>
                                <div className='col-md'>
                                    <h2>+300</h2>
                                    <div className='line'></div>
                                    <p>Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <img src={group35img} className='group-img-35'></img>
            </section>
            <section className='Nulla'>
                <div className='d-flex'>
                    <div className='col'>
                        <img className='illustration-img' alt='' src={Illustrationimg}></img>
                    </div>
                    <div className='col'>
                        <div className='nulla-text'>
                            <h5>Nulla lobortis nunc vitae nisi semper velit</h5>
                            <p>Vestibulum sit amet tortor libero lobortis semper at
                                et odio. In eu tellus tellus. Pellentesque
                                ullamcorper ultrices. Aenean facilisis vitae purus
                                facilisis semper.</p>
                        </div>
                        <div className='d-flex'>
                            <div className='col'>
                                <div className='android'>
                                    <div className='android-checkmark-background'>
                                        <div className='android-checkmark-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.36406 9.96276L5.68418 11.6426L11.0842 17.0426L23.0842 5.04265L21.4043 3.36276L11.0842 13.6225L7.36406 9.96276ZM21.8842 12.2426C21.8842 17.5225 17.564 21.8426 12.2842 21.8426C7.00435 21.8426 2.68418 17.5225 2.68418 12.2426C2.68418 6.96276 7.00429 2.64265 12.2842 2.64265C13.1842 2.64265 14.0842 2.76276 14.9244 3.0027L16.7842 1.14265C15.4043 0.542645 13.9043 0.242645 12.2842 0.242645C5.68418 0.242645 0.28418 5.64265 0.28418 12.2426C0.28418 18.8426 5.68418 24.2426 12.2842 24.2426C18.8842 24.2426 24.2842 18.8426 24.2842 12.2426H21.8842Z" fill="#2196F3" />
                                            </svg>
                                        </div>

                                    </div>
                                    <h6>Nulla lobortis nunc</h6>
                                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                                <div className='speedometer'>
                                    <div className='speedometer-background'>
                                        <div className='speedometer-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6769 9.51071L12.1656 12.9423C12.1014 12.937 12.0373 12.9316 11.9732 12.9316C11.0271 12.9316 10.2627 13.696 10.2627 14.6421C10.2627 15.5882 11.0271 16.3526 11.9732 16.3526C12.9193 16.3526 13.6836 15.5882 13.6836 14.6421C13.6836 14.578 13.6783 14.5138 13.6729 14.4497L17.1046 9.93833L16.6769 9.51071Z" fill="#651FFF" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9733 0.958374C5.36125 0.958374 0 6.31962 0 12.9316C0 14.7704 0.416927 16.5076 1.15457 18.0631H3.08419C2.26102 16.6412 1.79065 15.0377 1.72116 13.3593H3.42094V12.504H1.72116C1.7853 10.9646 2.18619 9.48399 2.88641 8.15303L4.35635 9.00292L4.78396 8.25993L3.31403 7.41539C3.70958 6.79534 4.17996 6.20737 4.71448 5.67285C5.25969 5.13298 5.85301 4.65726 6.48374 4.25637L7.32829 5.71561L8.07127 5.288L7.22673 3.82875C8.55234 3.13388 10.0169 2.74367 11.5457 2.67953V4.37931H12.4009V2.67953C13.9296 2.74367 15.3942 3.13922 16.7198 3.82875L15.8806 5.288L16.6236 5.71561L17.4682 4.25637C18.0989 4.65726 18.6922 5.13298 19.2374 5.67285C19.7719 6.20737 20.237 6.79 20.6379 7.41539L19.1733 8.25993L19.6009 9.00292L21.0708 8.15303C21.771 9.48399 22.1719 10.9646 22.2361 12.504H20.5256V13.3593H22.2254C22.1559 15.0377 21.6855 16.6412 20.8624 18.0631H22.792C23.5296 16.5076 23.9465 14.7704 23.9465 12.9316C23.9465 6.31962 18.5853 0.958374 11.9733 0.958374Z" fill="#651FFF" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6> Suspendisse porttitor</h6>
                                    <p>unc quis sem quis velit tincidunt congue a sit amet ante.</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='android-locate'>
                                    <div className='android-locate-background'>
                                        <div className='android-locate-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.67266C9.64264 8.67266 7.71423 10.6012 7.71423 12.9584C7.71423 15.3157 9.64264 17.2441 12 17.2441C14.3574 17.2441 16.2857 15.3157 16.2857 12.9584C16.2857 10.6012 14.3574 8.67266 12 8.67266ZM22.2288 11.8155C21.7143 7.0728 17.8856 3.24411 13.1428 2.72987V0.958374H10.8572V2.72982C6.11443 3.24405 2.28573 7.07275 1.77123 11.8155H0V14.1012H1.77118C2.28568 18.8439 6.11432 22.6726 10.8571 23.1871V24.9584H13.1428V23.1872C17.8855 22.6727 21.7142 18.844 22.2288 14.1013H24V11.8155H22.2288ZM12 20.9584C7.5998 20.9584 3.99996 17.3585 3.99996 12.9584C3.99996 8.55823 7.5998 4.95839 12 4.95839C16.4001 4.95839 19.9999 8.55828 19.9999 12.9584C19.9999 17.3585 16.4001 20.9584 12 20.9584Z" fill="#00BCD4" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6>Vestibulum faucibus</h6>
                                    <p>In id nisi id neque venenatis molestie Quisque lacinia purus ut libero facilisis.</p>
                                </div>
                                <div className='android-bulb'>
                                    <div className='android-bulb-background'>
                                        <div className='android-bulb-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.35852C13.366 8.35852 14.6554 8.89557 15.6306 9.87078C16.6058 10.8459 17.1429 12.1354 17.1429 13.5014C17.1429 14.4454 16.906 15.3245 16.4387 16.1142C15.992 16.8695 15.3439 17.509 14.5645 17.9638L13.7143 18.46V19.4444V23.2441H10.2857V19.4444V18.46L9.43548 17.9638C7.84511 17.0357 6.85714 15.3258 6.85714 13.5014C6.85714 12.1354 7.3942 10.846 8.36941 9.87078C9.34463 8.89557 10.634 8.35852 12 8.35852ZM13.1428 0.958374C12.8002 0.958374 10.8572 0.958374 10.8572 0.958374V4.38695H13.1428V0.958374ZM20.0569 3.84395L18 5.90146L19.5999 7.50137L21.6573 5.44445L20.0569 3.84395ZM3.94307 3.84395L2.34262 5.44439L4.40009 7.50132L6 5.90146L3.94307 3.84395ZM12 6.64423C8.22879 6.64423 5.14286 9.73016 5.14286 13.5014C5.14286 16.0159 6.5145 18.2441 8.57143 19.4445V24.9584H15.4286V19.4444C17.4855 18.2441 18.8571 16.0727 18.8571 13.5013C18.8571 9.73011 15.7712 6.64423 12 6.64423ZM24 12.3585H20.5714V14.6442H24V12.3585ZM3.42857 12.3585H0V14.6442H3.42857V12.3585Z" fill="#F38D21" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6>Ut sed eros</h6>
                                    <p>In hac habitasse platea dictumst. In mi nulla, fringilla vestibulum finibus et.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section>
                <img src={group36img} className='group-img-35'></img>
            </section>
            <section className='casestudies'>
                <div className='d-flex'>
                    <div className='col'>
                        <div className='Case-Studies-text'>
                            <h3>Case Studies</h3>
                            <p>Corporate</p>
                            <p>Advertising</p>
                            <p>Marketing</p>
                            <p>Government</p>
                            <p>Creative</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img className='group-img' src={groupimg} />
                    </div>
                </div>
            </section>
            <section className='ready-to'>
                <div className='d-flex'>
                    <div className='col'>
                        <div className='ready-text'>
                            <h6>Ready to get started ?</h6>
                            <p>Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
                        </div>
                    </div>
                    <div className='col'>
                        <button >Write to us <IoMdSend className='send-btn' /></button>
                    </div>
                </div>
            </section>
        </div >
    );
}