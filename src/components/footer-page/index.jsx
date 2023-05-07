import './main.scss'

export default function Footer(){
    return (
        <div className="footerContainer">
            <div className='topFooter'></div>
            <div className='bottomFooter'>
                <div className='bottomContainer'>
                    <div className='projectDescript'>
                        <div className='pDTextHolder'>
                            <p className='pDTitle'>PROJECT DETAILS</p>
                            <p>NAME: FELIX PANTOJA</p>
                            <p>CLASS: BIO-110</p>
                            <p>TEAHCER: CARALYN ZHENDER</p>
                            <p>PROJECT: DEEPER DIVE 3</p>
                            <p>DATE: MAY 7TH, 2023</p>
                        </div>
                    </div>
                    <div className='sections'>
                        <div className='sTextHolder1'>
                            <p className='sTitle1'>SECTIONS</p>
                            <p>HOME</p>
                            <p>BRIEF HISTORY</p>
                            <p>CASE STUDIES</p>
                            <p>MORE IN DEPTH</p>
                            <p>FAQ</p>
                        </div>
                        <div className='sTextHolder2'>
                            <p className='sTitle2'>MORE INFO</p>
                            <p>OPTION BELOW</p>
                            <p>IDK GOOGLE IT OR SOMETHING</p>
                            <p className='sTitle3'>RESOURCES</p>
                            <p>LINKED</p>
                            <p>SOMETHING</p>
                        </div>
                    </div>
                    <div className='contact'>
                        <div className='cTextHolder'>
                            <p className='cTitle1'>FOLLOW ME</p>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-brands fa-reddit"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <p className='cTitle2'>SUBSCRIBE</p>
                            <div className='subBox'>
                                <input className='inputBox' type="text" placeholder='YOUR EMAIL ADDRESS'/>
                                <button className='enterBox'>ENTER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}