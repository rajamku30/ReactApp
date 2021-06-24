import styled,{ createGlobalStyle } from 'styled-components';

import LoginBackgoround from './../assets/login-bg.png';
import TmsLogoImage from './../assets/tms-logo.png';
import SvbLogoImage from './../assets/svb-logo.png';


const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.component === 'LOGIN' ? '#E0E6ED' : 'black')};
  }
`

const LoginWrapper = styled.div`
   background:  url(${LoginBackgoround}) no-repeat ;      
`;

const LoginInnerWrapper = styled.div`
    background:  #33BBEF80;
    padding:0px 35px 65px 49px;
`;

const LogoSection = styled.header`
    @media only screen and (max-width: 992px) {
    margin-bottom: 1rem; 
    }
`;

const Logo =styled.img`
    ${(props) => props.type === 'TMS' && `
        right:15px;
        box-shadow: 0px 0px 20px #FFFFFF;
        margin-top:39px;
        width:153px;
        @media only screen and (max-width: 768px) {
            width:115px !important;
            margin-top: 25px;
        }
    `}

    ${(props) => props.type === 'SVB' && `
        margin-top:28px;
        box-shadow: 0px 0px 50px #FFFFFF;
        height: 40px;
    `}

`;

const LoginSection = styled.section`
    padding: 24px 58px 62px;
    background-color:#fff;
    border-radius:19px;
    box-shadow: 0px 2px 4px 0px #00000026;
    box-shadow: 0px 1px 10px 0px #00000026;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin:0 auto;

    .mb-38 {
        margin-bottom:38px;
    }
    .mb-30 {
        margin-bottom:30px;
    }
    .mb-10 {
        margin-bottom:10px;
    }
`;

const LoginTitle = styled.h6`
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    padding-bottom: 33px;
    margin-bottom: 0;
`;

const CustomButton = styled.button`
    height:42px;
    background-color: #007DB8;
    padding:10px 0;
    font-weight: 500;
    font-size:14px;
    line-height: 22px;
    width:100%;
    border:0;

    &:hover {
        background-color: #00a3e0;
    }
`;

const LineContainer = styled.div`
    margin-top:25px;
    margin-bottom:32px;
    display:flex;
`;

const Line = styled.div`
    width:40%;
    height:1px;
    border-bottom:solid 1px #9E9E9E;
`;

const Or = styled.div`
    width:82px;
    text-align: center;
    line-height: 0;
    position: relative;
`;

const StyledTextInput = styled.input`
    height:48px;
    border-radius: 4px;
    border: 1px solid #BDBDBD;
    font-size: .875rem;
    color:#666666;
    padding:14px 16px;

    ::placeholder {
        color:#757575;
    }
`;

const PasswordContainer =styled.div`
   position:relative;

   > i {
    position:absolute;
    top: 12px;
    right: 16px;
    cursor: pointer;
   }
`;

const CustomLink = styled.button`
    font-size: 0.75rem;
    font-weight: 500;
    color: #007DB8;
    padding:0;
`;

const CustomCardSection = styled.section`
    padding-bottom: 3rem;
    padding-left: 3rem;
    padding-top: 55px;

    .mb-10 {
        margin-bottom:10px;
    }
`;


const CustomCard = styled.article`
    color:#000000;
    flex-basis: 17rem;
    margin-bottom: 1rem;
    margin-right: 5rem;

    :last-child {
        margin-right: 0;
    }
    
    @media only screen and (max-width: 992px) {
        flex-basis: 100%;
        margin-bottom: 1rem;
        margin-right: 5%;     
    }
`;

const CustomCardTitle = styled.div`
    font-size: 1.375rem;
    font-weight: 700;
    line-height:1.56rem;
`;

const CustomCardSubTitle = styled.p`
    font-size: 16px;
`;

const FooterContainer = styled.div`
    font-size: 12px;
    font-weight: 400;
    padding-left: 2rem !important;

    ul li.nav-item {
        position:relative;

        ::after {
            content:"|";
            position:absolute;
            top: 9px;
            right: 0;
        }

        :last-child::after {
            content:" ";
            
        }

        a {
            color:#000000;
        }
    }
}
`;

const CustomCopyright = styled.p`
    padding-left:16px;
    color: #696969;
    line-height: 18px;
    font-size: 12px;
`;



const LoginSvb = () => {
      return (
          <>
          <GlobalStyle component="LOGIN"></GlobalStyle>
          <LoginWrapper>
            <LoginInnerWrapper className="inner-wrapper">
                <LogoSection>
                    <div className="container-fluid">
                       <div className="d-flex ">
                            <a href="#">
                            <Logo src={TmsLogoImage} alt="TMS"  title="Treasury and Financial Risk Management System" type="TMS"/>
                            </a>
                            <a href="#" className="ms-auto">
                            <Logo src={SvbLogoImage} alt="Silicon Valley Bank" type="SVB"  title="Treasury and Financial Risk Management System" /> 
                            </a>
                        </div>
                    </div>
                </LogoSection>

                <LoginSection className="col-sm-12 col-md-6 col-lg-4">
                    <form  aria-labelledby="login">
                      <LoginTitle id="login">Login</LoginTitle>
                      <CustomButton type="button" className="btn btn-primary">Login with SSO</CustomButton>
                      <LineContainer>
                        <Line></Line>
                        <Or>or</Or>
                        <Line></Line>
                      </LineContainer>

                      <StyledTextInput type="email" 
                        className="form-control mb-3" 
                        id="emailId" name="Email ID" 
                        aria-label="Enter Email ID" 
                        placeholder="Email Id" aria-placeholder="Email Id" />

                     <PasswordContainer>
                        <StyledTextInput 
                        type="password" 
                        className="form-control  mb-3" 
                        name="Password" 
                        id="loginPassword" 
                        aria-label="Enter Password" 
                        placeholder="Password" aria-placeholder="Password" />
                        <i className="bi bi-eye-slash-fill" id="togglePassword"></i>
                     </PasswordContainer>

                    <div className="form-check mb-38" role="checkbox" aria-labelledby="rembr-label" >
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" for="remember" id="rembr-label">Remember me</label>
                    </div>

                    <div role="group" aria-label="Login Button Group">
                        <CustomButton type="button" className="btn btn-primary mb-30">Login</CustomButton>
                        <CustomLink type="button" className="btn btn-link">Request for Access</CustomLink>
                    </div>
                 </form>
                </LoginSection>
            </LoginInnerWrapper>
          </LoginWrapper>

            <CustomCardSection className="container d-flex flex-wrap">
                <CustomCard className="col-xs-12">
                    <CustomCardTitle className="mb-10"  role="heading" aria-level="2">Welcome to SVB TMS</CustomCardTitle>
                    <CustomCardSubTitle className="card-text">Get the strategic SVB TMS product designed to meet the demanding payment and purchasing needs of your business.</CustomCardSubTitle>
                </CustomCard>
                <CustomCard className="col-xs-12">
                    <CustomCardTitle className="mb-10"  role="heading" aria-level="2">Leading During Covid</CustomCardTitle>
                    <CustomCardSubTitle className="card-text">Access invaluable advice from SVB’s network of peers and experts to help founders lead during uncertain times.</CustomCardSubTitle>
                </CustomCard>
                <CustomCard className="col-xs-12">
                    <CustomCardTitle className="mb-10"  role="heading" aria-level="2">Startup Insights</CustomCardTitle>
                    <CustomCardSubTitle className="card-text">Navigate fundraising, manage the business and operate more efficiently with insights from VC’s, founders and advisors.</CustomCardSubTitle>
                </CustomCard>
            </CustomCardSection>
         
          
          <FooterContainer className="container">
            <nav aria-label="Footer navigation">
                <ul className="nav ">
                <li className="nav-item">
                    <a className="nav-link "  href="#">Privacy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cookie Policy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">SVB.com</a>
                </li>
                </ul>
            </nav>
            <CustomCopyright class="copyright">© 2020 SVB Financial Group. All rights reserved. Silicon Valley Bank is a member of the FDIC and the Federal Reserve System. </CustomCopyright>
        </FooterContainer>
          </>
      );
};

export default LoginSvb;