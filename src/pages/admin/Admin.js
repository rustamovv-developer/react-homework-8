import React, { memo } from "react";
import "../../sass/admin.scss";

function Admin() {
  return (
    <section className="admin">
      <div class="container-fluid">
        <div class="sidebar">
          <span class="logo">
            <img src="../assets/images/logo.svg" alt="" />
          </span>
          <a class="logo-expand" href="../index.html">
            <img src="../assets/images/logo.svg" alt="" />
            Северяночка
          </a>
          <div class="side-wrapper">
            <div class="side-title">MENU</div>
            <div class="side-menu">
              <a class="sidebar-link discover is-active" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
                </svg>
                Dashboard
              </a>
              <a class="sidebar-link trending" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.699-.327z"
                  />
                </svg>
                Friends
              </a>
              <a class="sidebar-link" href="#">
                <svg
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.2915 12.6367V11.0509C2.2915 9.15336 3.84067 7.60419 5.73817 7.60419H16.2615C18.159 7.60419 19.7082 9.15336 19.7082 11.0509V12.3709H17.8565C17.3432 12.3709 16.8757 12.5725 16.5365 12.9208C16.1515 13.2967 15.9315 13.8375 15.9865 14.415C16.069 15.405 16.9765 16.1292 17.9665 16.1292H19.7082V17.22C19.7082 19.1175 18.159 20.6667 16.2615 20.6667H11.2382"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.2915 11.8758V7.6867C2.2915 6.59587 2.96067 5.62416 3.97817 5.23916L11.2565 2.48916C12.3932 2.05833 13.6123 2.90169 13.6123 4.12085V7.60418"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.6787 13.306V15.1944C20.6787 15.6985 20.2754 16.111 19.7621 16.1293H17.9654C16.9754 16.1293 16.0679 15.4052 15.9854 14.4152C15.9304 13.8377 16.1504 13.2968 16.5354 12.921C16.8746 12.5727 17.3421 12.371 17.8554 12.371H19.7621C20.2754 12.3894 20.6787 12.8018 20.6787 13.306Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.4165 11.5H12.8332"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.75 15.625H7.645C8.23166 15.625 8.70833 16.1016 8.70833 16.6883V17.8617"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.86833 14.5067L2.75 15.625L3.86833 16.7433"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.70833 20.4651H3.81334C3.22667 20.4651 2.75 19.9884 2.75 19.4017V18.2284"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.59131 21.5837L8.70964 20.4653L7.59131 19.347"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Your Balance
              </a>
              <a class="sidebar-link" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1535 16.64L14.995 13.77C15.2822 13.47 15.2822 13 14.9851 12.71C14.698 12.42 14.2327 12.42 13.9455 12.71L12.3713 14.31V9.49C12.3713 9.07 12.0446 8.74 11.6386 8.74C11.2327 8.74 10.896 9.07 10.896 9.49V14.31L9.32178 12.71C9.03465 12.42 8.56931 12.42 8.28218 12.71C7.99505 13 7.99505 13.47 8.28218 13.77L11.1139 16.64C11.1832 16.71 11.2624 16.76 11.3515 16.8C11.4406 16.84 11.5396 16.86 11.6386 16.86C11.7376 16.86 11.8267 16.84 11.9158 16.8C12.005 16.76 12.0842 16.71 12.1535 16.64ZM19.3282 9.02561C19.5609 9.02292 19.8143 9.02 20.0446 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5 22 16.0446 22H8.17327C5.58911 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.4901 2 7.96535 2H13.2525C13.5 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.1931 9.01 17.0149 9.02C17.4333 9.02 17.8077 9.02318 18.1346 9.02595C18.3878 9.02809 18.6125 9.03 18.8069 9.03C18.9479 9.03 19.1306 9.02789 19.3282 9.02561ZM19.6045 7.5661C18.7916 7.5691 17.8322 7.5661 17.1421 7.5591C16.047 7.5591 15.145 6.6481 15.145 5.5421V2.9061C15.145 2.4751 15.6629 2.2611 15.9579 2.5721C16.7203 3.37199 17.8873 4.5978 18.8738 5.63395C19.2735 6.05379 19.6436 6.44249 19.945 6.7591C20.2342 7.0621 20.0223 7.5651 19.6045 7.5661Z"
                  />
                </svg>
                Products List
              </a>
              <a class="sidebar-link" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.769 8.382H22C22 4.985 19.964 3 16.516 3H7.484C4.036 3 2 4.985 2 8.338v7.324C2 19.015 4.036 21 7.484 21h9.032C19.964 21 22 19.015 22 15.662v-.313h-4.231c-1.964 0-3.556-1.552-3.556-3.466 0-1.915 1.592-3.467 3.556-3.467v-.034zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 01-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 01.433-1.652 2.091 2.091 0 011.576-.74zm.151 2.661h.329a.755.755 0 00.764-.745.755.755 0 00-.764-.746h-.329a.766.766 0 00-.54.213.727.727 0 00-.224.524c0 .413.34.75.764.754zM6.738 8.382h5.644a.755.755 0 00.765-.746.755.755 0 00-.765-.745H6.738a.755.755 0 00-.765.737c0 .413.341.75.765.754z"
                  />
                </svg>
                Bookmark
              </a>
            </div>
          </div>
          <div class="side-wrapper">
            <div class="side-title">CATEGORY</div>
            <div class="side-menu">
              <a class="sidebar-link" href="../index.html">
                <svg
                  viewBox="0 0 22 23"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.23201 3.4202L9.23239 3.41989C10.2108 2.63408 11.7843 2.63834 12.7781 3.42994C12.7783 3.43005 12.7784 3.43015 12.7785 3.43025L18.7784 8.2301C18.7789 8.23054 18.7795 8.23099 18.78 8.23143C19.1189 8.50835 19.4146 8.94381 19.6058 9.44415C19.7968 9.94409 19.8672 10.4662 19.8014 10.8985L18.6475 17.8037C18.6474 17.8042 18.6473 17.8047 18.6472 17.8052C18.4217 19.0989 17.1608 20.1667 15.8585 20.1667H6.1418C4.81982 20.1667 3.58766 19.1252 3.36227 17.8148C3.36221 17.8145 3.36215 17.8142 3.36209 17.8138L2.20746 10.9043L2.20726 10.9032C2.13345 10.4677 2.19947 9.94466 2.39002 9.44498C2.58055 8.94535 2.87982 8.51038 3.22697 8.2334L3.22784 8.2327L9.23201 3.4202ZM11.0001 18.1876C11.6521 18.1876 12.1876 17.652 12.1876 17.0001V14.2501C12.1876 13.5981 11.6521 13.0626 11.0001 13.0626C10.3482 13.0626 9.81263 13.5981 9.81263 14.2501V17.0001C9.81263 17.652 10.3482 18.1876 11.0001 18.1876Z"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                </svg>
                Home
              </a>
              <a class="sidebar-link" href="#">
                <svg
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.75 8.85081V14.14C2.75 16.0833 2.75 16.0833 4.58333 17.3208L9.625 20.2358C10.3858 20.6758 11.6233 20.6758 12.375 20.2358L17.4167 17.3208C19.25 16.0833 19.25 16.0833 19.25 14.1491V8.85081C19.25 6.91664 19.25 6.91664 17.4167 5.67914L12.375 2.76414C11.6233 2.32414 10.3858 2.32414 9.625 2.76414L4.58333 5.67914C2.75 6.91664 2.75 6.91664 2.75 8.85081Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 14.25C12.5188 14.25 13.75 13.0188 13.75 11.5C13.75 9.98122 12.5188 8.75 11 8.75C9.48122 8.75 8.25 9.98122 8.25 11.5C8.25 13.0188 9.48122 14.25 11 14.25Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Settings
              </a>
              <a class="sidebar-link" href="#">
                <svg
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.8999 8.05999C9.2099 4.45999 11.0599 2.98999 15.1099 2.98999H15.2399C19.7099 2.98999 21.4999 4.77999 21.4999 9.24999V15.77C21.4999 20.24 19.7099 22.03 15.2399 22.03H15.1099C11.0899 22.03 9.2399 20.58 8.9099 17.04"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.0001 12.5H3.62012"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.85 9.14999L2.5 12.5L5.85 15.85"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Log out
              </a>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="header">
            <div class="search-bar">
              <input type="text" placeholder="Search" />
            </div>
            <div class="user-settings">
              <img
                class="user-img"
                src="../assets/images/logo.svg"
                alt="logo"
              />
              <div class="user-name">User name</div>
              <svg viewBox="0 0 492 492" fill="currentColor">
                <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
              </svg>
              <div class="notify">
                <div class="notification"></div>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="main-container">
            <div class="main-header anim">Dashboard</div>
            <div class="main-blogs">
              <div class="main-blog anim">
                <div class="main-blog__title">
                  <span class="color-title">Fresh Cow's Milk: </span> Our
                  farm-fresh cow's milk is sourced from trusted local dairy
                  farms.
                </div>
                <div class="main-blog__author">
                  <div class="author-img__wrapper">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img class="author-img" src="../assets/images/logo.svg" />
                  </div>
                  <div class="author-detail">
                    <div class="author-name">New Products</div>
                    <div class="author-info">
                      53K views <span class="seperate"></span>2 weeks ago
                    </div>
                  </div>
                </div>
                <div class="main-blog__time">7 min</div>
              </div>
              <div class="main-blog anim">
                <div class="main-blog__title">
                  <span class="color-title">Raw Honey:</span> Our raw honey is
                  unfiltered and unprocessed
                </div>
                <div class="main-blog__author tips">
                  <div class="main-blog__time">7 min</div>
                  <div class="author-img__wrapper">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img class="author-img" src="../assets/images/logo.svg" />
                  </div>
                  <div class="author-detail">
                    <div class="author-name">New prduct</div>
                    <div class="author-info">
                      53K views <span></span>2 weeks ago
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="admin__box spending-box">
              <div class="header-container">
                <h3 class="section-header">Spending Statistics</h3>
                <div class="year-selector">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.8"
                      width="24"
                      height="24"
                      rx="6"
                      fill="#F6F7F9"
                    />
                    <path
                      d="M13.4999 15.96L10.2399 12.7C9.85492 12.315 9.85492 11.685 10.2399 11.3L13.4999 8.04004"
                      stroke="#1A202C"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>2023</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.8"
                      width="24"
                      height="24"
                      rx="6"
                      fill="#F6F7F9"
                    />
                    <path
                      d="M10.4551 15.96L13.7151 12.7C14.1001 12.315 14.1001 11.685 13.7151 11.3L10.4551 8.04004"
                      stroke="#1A202C"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="bar-chart">
                <canvas id="myChart" height="220px" width="660px"></canvas>
              </div>
            </div>

            <div class="small-header anim">Our supporters</div>
            <div class="videos">
              <div class="video anim">
                <div class="video-time">8 min</div>
                <div class="video-wrapper">
                  <video muted="">
                    <source
                      src="../assets/images/secondvideo.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="author-img__wrapper video-author">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img class="author-img" src="../assets/images/logo.svg" />
                  </div>
                </div>
                <div class="video-by">Savory Bites</div>
                <div class="video-name">Delightful flavors in every bite.</div>
                <div class="video-view">
                  54K views<span class="seperate video-seperate"></span>1 week
                  ago
                </div>
              </div>
              <div class="video anim">
                <div class="video-time">5 min</div>
                <div class="video-wrapper">
                  <video muted="">
                    <source
                      src="../assets/images/live-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="author-img__wrapper video-author">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img class="author-img" src="../assets/images/logo.svg" />
                  </div>
                </div>
                <div class="video-by offline">Tasty Temptations</div>
                <div class="video-name">
                  Irresistible treats for food lovers.
                </div>
                <div class="video-view">
                  42K views<span class="seperate video-seperate"></span>1 week
                  ago
                </div>
              </div>
              <div class="video anim">
                <div class="video-time">7 min</div>
                <div class="video-wrapper">
                  <video muted="">
                    <source
                      src="../assets/images/third-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="author-img__wrapper video-author">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img class="author-img" src="../assets/images/logo.svg" />
                  </div>
                </div>
                <div class="video-by offline">Flavor Fusion</div>
                <div class="video-name">
                  Bold and delicious taste combinations.
                </div>
                <div class="video-view">
                  64K views<span class="seperate video-seperate"></span>2 week
                  ago
                </div>
              </div>
              <div class="video anim">
                <div class="video-time">6 min</div>
                <div class="video-wrapper">
                  <video muted="">
                    <source
                      src="../assets/images/fifthvide.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="author-img__wrapper video-author">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img class="author-img" src="../assets/images/logo.svg" />
                  </div>
                </div>
                <div class="video-by">Gourmet Delights</div>
                <div class="video-name">
                  Exquisite culinary experiences await.
                </div>
                <div class="video-view">
                  50K views<span class="seperate video-seperate"></span>1 week
                  ago
                </div>
              </div>
            </div>
            <div class="stream-area">
              <div class="video-stream">
                <video
                  id="my_video_1"
                  class="video-js vjs-default-skin anim"
                  width="640px"
                  height="267px"
                  controls
                  preload="none"
                  poster="../assets/images/logo.svg"
                  data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
                >
                  <source
                    src="../assets/images/live-video.mp4"
                    type="video/mp4"
                  />
                  <source src="" type="video/webm" />
                </video>
                <div class="video-detail">
                  <div class="video-content">
                    <div class="video-p-wrapper anim">
                      <div class="author-img__wrapper video-author video-p">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <img
                          class="author-img"
                          src="../assets/images/logo.svg"
                        />
                      </div>
                      <div class="video-p-detail">
                        <div class="video-p-name">Северяночка</div>
                        <div class="video-p-sub">1,980,893 subscribers</div>
                      </div>
                      <div class="button-wrapper">
                        <button class="like">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z" />
                          </svg>
                          Share
                        </button>
                        <button class="like red">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.85 2.5c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.728 12.728 0 01-3.01 4.81 38.456 38.456 0 01-6.33 4.96l-.25.15-.26-.16a38.093 38.093 0 01-6.37-4.96 12.933 12.933 0 01-3.01-4.8c-1.13-3.54.2-7.59 3.93-8.81.29-.1.59-.17.89-.21h.12c.28-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.83.33h.06c.04.02.07.04.09.06.22.07.43.15.63.26l.38.17c.092.05.195.125.284.19.056.04.107.077.146.1l.05.03c.085.05.175.102.25.16a6.263 6.263 0 013.85-1.3zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.64.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z"
                            />
                          </svg>
                          Liked
                        </button>
                      </div>
                    </div>
                    <div class="video-p-title anim">
                      Basic how to ride your Skateboard
                    </div>
                    <div class="video-p-subtitle anim">
                      Северяночка (Severyanochka) is a popular food shop that
                      specializes in providing a wide range of quality food
                      products. Here is some information about Северяночка
                      summarized in five words:
                    </div>
                    <div class="video-p-subtitle anim">
                      Quality: Offering high-quality food products. Variety:
                      Wide selection of diverse food items. Freshness: Ensuring
                      freshness in every product. Convenience: Convenient
                      shopping experience for customers. Trusted: A trusted name
                      in the food retail industry.
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat-stream">
                <div class="chat">
                  <div class="chat-header anim">
                    Live Chat
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.212 7.762c0 2.644-2.163 4.763-4.863 4.763-2.698 0-4.863-2.119-4.863-4.763C4.486 5.12 6.651 3 9.35 3c2.7 0 4.863 2.119 4.863 4.762zM2 17.917c0-2.447 3.386-3.06 7.35-3.06 3.985 0 7.349.634 7.349 3.083 0 2.448-3.386 3.06-7.35 3.06C5.364 21 2 20.367 2 17.917zM16.173 7.85a6.368 6.368 0 01-1.137 3.646c-.075.107-.008.252.123.275.182.03.369.048.56.052 1.898.048 3.601-1.148 4.072-2.95.697-2.675-1.35-5.077-3.957-5.077a4.16 4.16 0 00-.818.082c-.036.008-.075.025-.095.055-.025.04-.007.09.019.124a6.414 6.414 0 011.233 3.793zm3.144 5.853c1.276.245 2.115.742 2.462 1.467a2.107 2.107 0 010 1.878c-.531 1.123-2.245 1.485-2.912 1.578a.207.207 0 01-.234-.232c.34-3.113-2.367-4.588-3.067-4.927-.03-.017-.036-.04-.034-.055.002-.01.015-.025.038-.028 1.515-.028 3.145.176 3.747.32z"
                        />
                      </svg>
                      15,988 people
                    </span>
                  </div>
                  <div class="message-container">
                    <div class="message anim">
                      <div class="author-img__wrapper video-author video-p">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <img class="author-img" src="../assets/images/me.jpg" />
                      </div>
                      <div class="msg-wrapper">
                        <div class="msg__name video-p-name">Ru$tamovv</div>
                        <div class="msg__content video-p-sub">
                          ReactJS, VueJS, JavaScript, TypeScript
                        </div>
                      </div>
                    </div>
                    <div class="message anim">
                      <div class="author-img__wrapper video-author video-p">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <img
                          class="author-img"
                          src="../assets/images/user.jpg"
                        />
                      </div>
                      <div class="msg-wrapper">
                        <div class="msg__name video-p-name offline">
                          A$omovv
                        </div>
                        <div class="msg__content video-p-sub">
                          ReactJS, VueJS, JavaScript
                        </div>
                      </div>
                    </div>
                    <div class="message anim">
                      <div class="author-img__wrapper video-author video-p">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <img
                          class="author-img"
                          src="../assets/images/ismoil.jpg"
                        />
                      </div>
                      <div class="msg-wrapper">
                        <div class="msg__name video-p-name offline">I$moil</div>
                        <div class="msg__content video-p-sub">
                          ReactJS, VueJS, JavaScript, AngularJS
                        </div>
                      </div>
                    </div>
                    <div class="message anim">
                      <div class="author-img__wrapper video-author video-p">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <img
                          class="author-img"
                          src="../assets/images/user.jpg"
                        />
                      </div>
                      <div class="msg-wrapper">
                        <div class="msg__name video-p-name">Sayit</div>
                        <div class="msg__content video-p-sub">
                          JavaScript, PHP
                        </div>
                      </div>
                    </div>
                    <div class="message anim">
                      <div class="author-img__wrapper video-author video-p">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <img
                          class="author-img"
                          src="../assets/images/user.jpg"
                        />
                      </div>
                      <div class="msg-wrapper">
                        <div class="msg__name video-p-name">Otabek</div>
                        <div class="msg__content video-p-sub">Figma design</div>
                      </div>
                    </div>
                    <div class="message anim">
                      <div class="author-img__wrapper video-author video-p">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <img
                          class="author-img"
                          src="../assets/images/user.jpg"
                        />
                      </div>
                      <div class="msg-wrapper">
                        <div class="msg__name video-p-name offline">
                          Bilolbek
                        </div>
                        <div class="msg__content video-p-sub">
                          3D designer, Figma
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="chat-footer anim">
                    <input type="text" placeholder="Write your message" />
                  </div>
                </div>
                <div class="chat-vid__container">
                  <div class="chat-vid__title anim">Related Videos</div>
                  <div class="chat-vid anim">
                    <div class="chat-vid__wrapper">
                      <img class="chat-vid__img" src="../assets/images/1.jpg" />
                      <div class="chat-vid__content">
                        <div class="chat-vid__name">
                          Prepare for your first skateboard jump
                        </div>
                        <div class="chat-vid__by">Jordan Wise</div>
                        <div class="chat-vid__info">
                          125.908 views <span class="seperate"></span>2 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="chat-vid anim">
                    <div class="chat-vid__wrapper">
                      <img class="chat-vid__img" src="../assets/images/2.jpg" />
                      <div class="chat-vid__content">
                        <div class="chat-vid__name">
                          Prepare for your first skateboard jump
                        </div>
                        <div class="chat-vid__by">Jordan Wise</div>
                        <div class="chat-vid__info">
                          125.908 views <span class="seperate"></span>2 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="chat-vid__button anim">
                    See All related videos (32)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
      <script src="https://vjs.zencdn.net/5-unsafe/video.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.0/build/js/intlTelInput.js"></script>
      <script src="../js/dashboard.js"></script>
    </section>
  );
}

export default memo(Admin);
