import React from 'react'
import "../styles/header.css"; // Import the CSS file
import { useRouter } from 'next/router';


const Header = () => {
  const router = useRouter();
  const showSecondaryMenu = ["/", "/Saarees", "/kurtis", "/Bags","/Ornaments"].includes(router.pathname);

  return (
    <div>
        <header
        className="header bg-rose-700"
        style={{ backgroundColor: "#b22222" }}
      >
        <div className="logo">
          {/* Replace text with logo image */}
          <img src="/logodw.png" alt="Pretty Gal Logo" className="logo-img" />
        </div>

        <nav className="nav-links">
          <a href="/" className="nav-link">
            HOME
          </a>
          <a href="#" className="nav-link">
            ABOUT US
          </a>
          <a href="#" className="nav-link">
            SALE
          </a>
          <a href="#" className="nav-link">
            CONTACT US
          </a>
          <a href="#" className="nav-link">
            STOCKLIST
          </a>
          <div>
            <a href="#" className="nav-link">
              <svg
                style={{ color: "black" }}
                class="h-8 w-8 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
                <circle cx="12" cy="12" r="3" />{" "}
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
          </div>
          <div>
            {" "}
            <a
              href="#"
              className="nav-link"
              class="p-2 rounded-lg flex items-center  justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100 bg:green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 71 72"
              >
                <path
                  d="M12.5068 56.8405L15.7915 44.6381C13.1425 39.8847 12.3009 34.3378 13.4211 29.0154C14.5413 23.693 17.5482 18.952 21.89 15.6624C26.2319 12.3729 31.6173 10.7554 37.0583 11.1068C42.4992 11.4582 47.6306 13.755 51.5108 17.5756C55.3911 21.3962 57.7599 26.4844 58.1826 31.9065C58.6053 37.3286 57.0535 42.7208 53.812 47.0938C50.5705 51.4668 45.8568 54.5271 40.5357 55.7133C35.2146 56.8994 29.6432 56.1318 24.8438 53.5513L12.5068 56.8405ZM25.4386 48.985L26.2016 49.4365C29.6779 51.4918 33.7382 52.3423 37.7498 51.8555C41.7613 51.3687 45.4987 49.5719 48.3796 46.7452C51.2605 43.9185 53.123 40.2206 53.6769 36.2279C54.2308 32.2351 53.445 28.1717 51.4419 24.6709C49.4388 21.1701 46.331 18.4285 42.6027 16.8734C38.8745 15.3184 34.7352 15.0372 30.8299 16.0736C26.9247 17.11 23.4729 19.4059 21.0124 22.6035C18.5519 25.801 17.2209 29.7206 17.2269 33.7514C17.2237 37.0937 18.1503 40.3712 19.9038 43.2192L20.3823 44.0061L18.546 50.8167L25.4386 48.985Z"
                  fill=""
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.9566 36.8847C43.5093 36.5249 42.9856 36.2716 42.4254 36.1442C41.8651 36.0168 41.2831 36.0186 40.7236 36.1495C39.8831 36.4977 39.3399 37.8134 38.7968 38.4713C38.6823 38.629 38.514 38.7396 38.3235 38.7823C38.133 38.8251 37.9335 38.797 37.7623 38.7034C34.6849 37.5012 32.1055 35.2965 30.4429 32.4475C30.3011 32.2697 30.2339 32.044 30.2557 31.8178C30.2774 31.5916 30.3862 31.3827 30.5593 31.235C31.165 30.6368 31.6098 29.8959 31.8524 29.0809C31.9063 28.1818 31.6998 27.2863 31.2576 26.5011C30.9157 25.4002 30.265 24.42 29.3825 23.6762C28.9273 23.472 28.4225 23.4036 27.9292 23.4791C27.4359 23.5546 26.975 23.7709 26.6021 24.1019C25.9548 24.6589 25.4411 25.3537 25.0987 26.135C24.7562 26.9163 24.5939 27.7643 24.6236 28.6165C24.6256 29.0951 24.6864 29.5716 24.8046 30.0354C25.1049 31.1497 25.5667 32.2144 26.1754 33.1956C26.6145 33.9473 27.0937 34.6749 27.6108 35.3755C29.2914 37.6767 31.4038 39.6305 33.831 41.1284C35.049 41.8897 36.3507 42.5086 37.7105 42.973C39.1231 43.6117 40.6827 43.8568 42.2237 43.6824C43.1018 43.5499 43.9337 43.2041 44.6462 42.6755C45.3588 42.1469 45.9302 41.4518 46.3102 40.6512C46.5334 40.1675 46.6012 39.6269 46.5042 39.1033C46.2714 38.0327 44.836 37.4007 43.9566 36.8847Z"
                  fill="#111827"
                />
              </svg>
            </a>
          </div>
            <div> <a
            href="#"
          className="nav-link"
            class="p-2 rounded-lg flex items-center  justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
          >
            <svg
           
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M17.5822 33.5652C17.5822 33.5652 36.2102 25.7194 42.6707 22.9567C45.1473 21.8518 53.546 18.3155 53.546 18.3155C53.546 18.3155 57.4224 16.7685 57.0993 20.5256C56.9916 22.0728 56.1302 27.4874 55.2688 33.3442C53.9767 41.6322 52.5769 50.6935 52.5769 50.6935C52.5769 50.6935 52.3615 53.2352 50.5311 53.6772C48.7006 54.1192 45.6856 52.1302 45.1473 51.6881C44.7165 51.3566 37.0715 46.3838 34.272 43.9527C33.5182 43.2897 32.6569 41.9637 34.3796 40.4166C38.256 36.7699 42.886 32.2392 45.6856 29.3661C46.9778 28.04 48.2698 24.9459 42.886 28.703C35.2411 34.1178 27.7038 39.201 27.7038 39.201C27.7038 39.201 25.9809 40.306 22.7507 39.3115C19.5203 38.317 15.7516 36.9909 15.7516 36.9909C15.7516 36.9909 13.1675 35.3334 17.5822 33.5652Z"
                fill="#111827"
              />
            </svg>
          </a></div>
         
        </nav>

        <div className="header-actions">
          
          <a href="#" className="nav-link">
            LOG IN
          </a>
          <a href="#" className="cart-icon">
            👜
          </a>
        </div>
      </header>
     
      {showSecondaryMenu && (
      <div className="dress-links" style={{ position: 'fixed', top: '18%', width: '100%', backgroundColor: '#b22222', zIndex: '999', padding: '10px 0', opacity:"0.8" }}>
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyleType: 'none', padding: 0 }}>
          <li><a href="/Saarees" className="dress-link" style={{ color: '#d3b787' ,textDecoration:"none",fontSize:"bold"}}>SAAREES</a></li>
          <li><a href="/kurtis" className="dress-link" style={{ color: '#d3b787' ,textDecoration:"none"}}>KURTIS</a></li>
          <li><a href="/Bags" className="dress-link" style={{ color: '#d3b787',textDecoration:"none" }}>BAGS</a></li>
          <li><a href="/Ornaments" className="dress-link" style={{ color: '#d3b787',textDecoration:"none" }}>ORNAMENTS</a></li>
        </ul>
      </div>)}
    </div>
 
  )
}

export default Header;