const Dailyquest = () => {
  return (
    <article class="sm:flex hidden flex-col gap-4 rounded-3xl border-2 bg-white border-gray-200 p-5 font-bold text-gray-700">
      <h2 class="text-xl">Daily Quests</h2>
      <div class="flex items-center gap-4">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.082 10.2876C31.7904 7.41973 28.1083 6.43313 26.4218 8.77092L12.5412 28.0121C11.2575 29.7916 12.1524 32.3055 14.2719 32.8734L22.1682 34.9892L23.3346 46.4591C23.6262 49.327 27.3083 50.3135 28.9948 47.9758L42.8754 28.7346C44.1592 26.9551 43.2642 24.4412 41.1447 23.8733L33.2485 21.7575L32.082 10.2876Z"
            fill="#FFD900"
            
          ></path>
          <path
            d="M15.2647 30.5578C14.5466 30.3639 14.4773 29.3724 15.1614 29.0805L20.6493 26.739C21.1448 26.5276 21.7009 26.8677 21.7385 27.4051L22.011 31.3016C22.0485 31.839 21.5452 32.2531 21.0251 32.1127L15.2647 30.5578Z"
            fill="#F7C100"
            
          ></path>
          <path
            d="M40.4157 25.8056C41.1338 25.9995 41.2031 26.991 40.519 27.2829L35.0311 29.6244C34.5356 29.8358 33.9795 29.4957 33.9419 28.9583L33.6695 25.0618C33.6319 24.5244 34.1353 24.1103 34.6554 24.2507L40.4157 25.8056Z"
            fill="#FFEF8F"
            
          ></path>
        </svg>
        <div class="flex flex-col gap-2">
          <h3>Earn 10 XP</h3>
          <div class="flex items-center">
            <div class="relative h-5 w-32 rd:w-42 lg:w-52 rounded-l-full bg-gray-200">
              <div class="relative h-full rounded-l-full bg-yellow-400 ">
                <div class="absolute left-2 right-0 top-1 h-2 rounded-l-full bg-yellow-300"></div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-sm text-gray-400">
                0 / 10
              </div>
            </div>
            <svg width="38" height="40" viewBox="0 0 38 40" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.6449 0H14.7191C13.4736 0 12.4546 1.01903 12.4546 2.26452V2.9248H4.8748C3.79785 2.9248 2.9248 3.79785 2.9248 4.8748V6.3732C1.75898 7.0475 0.974609 8.30793 0.974609 9.75156V20.485C0.383741 20.55 0 20.9835 0 21.6088V37.8693C0 38.5487 0.452903 39.0016 1.13226 39.0016H7.92581V38.9978H29.4395V39.0016H36.233C36.9124 39.0016 37.3653 38.5487 37.3653 37.8693V21.6088C37.3653 20.9295 36.9124 20.4766 36.233 20.4766H36.0746V9.75156C36.0746 8.30809 35.2904 7.04778 34.1248 6.37343V4.8748C34.1248 3.79785 33.2518 2.9248 32.1748 2.9248H24.9094V2.26452C24.9094 1.01903 23.8904 0 22.6449 0Z"
                fill="#F9D448"
                
              ></path>
              <path
                d="M2.9248 4.87578C2.9248 3.79883 3.79785 2.92578 4.8748 2.92578H32.1748C33.2518 2.92578 34.1248 3.79883 34.1248 4.87578V15.6008C34.1248 16.6777 33.2518 17.5508 32.1748 17.5508H4.87481C3.79785 17.5508 2.9248 16.6777 2.9248 15.6008V4.87578Z"
                fill="#F9D448"
                
              ></path>
              <path
                d="M14.7191 3.05176e-05H22.6449C23.8904 3.05176e-05 24.9094 1.01906 24.9094 2.26455V11.3226C24.9094 12.5681 23.8904 13.5871 22.6449 13.5871H14.7191C13.4736 13.5871 12.4546 12.5681 12.4546 11.3226V2.26455C12.4546 1.01906 13.4736 3.05176e-05 14.7191 3.05176e-05Z"
                fill="#F9D448"
                
              ></path>
              <path
                d="M0.974609 9.75156C0.974609 7.59765 2.7207 5.85156 4.87461 5.85156H32.1746C34.3285 5.85156 36.0746 7.59765 36.0746 9.75156V22.4266H0.974609V9.75156Z"
                fill="#AA572A"
                
              ></path>
              <rect
                x="4.875"
                y="9.75003"
                width="27.3"
                height="11.7"
                fill="#743611"
                
              ></rect>
              <path
                d="M33.15 21.4499H4.875V36.0749H33.15V21.4499Z"
                fill="#AA572A"
                
              ></path>
              <path
                d="M32.8358 34.4727H4.5293V39.0017H32.8358V34.4727Z"
                fill="#F9D448"
                
              ></path>

              <path
                d="M14.7191 16.3516H22.6449C23.8904 16.3516 24.9094 17.3706 24.9094 18.6161V27.6741C24.9094 28.9196 23.8904 29.9387 22.6449 29.9387H14.7191C13.4736 29.9387 12.4546 28.9196 12.4546 27.6741V18.6161C12.4546 17.3706 13.4736 16.3516 14.7191 16.3516Z"
                fill="#F9D448"
                
              ></path>

              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5124 21.4439C21.5124 19.8588 20.2669 18.6133 18.6817 18.6133C17.0966 18.6133 15.8511 19.8588 15.8511 21.4439C15.8511 22.3854 16.2904 23.207 16.9793 23.7191L16.0781 26.0848V26.4244C16.0781 27.1038 16.531 27.5567 17.2104 27.5567H19.9278H20.2675C20.8336 27.4435 21.2865 26.7641 21.0601 26.198L20.384 23.7192C21.073 23.2071 21.5124 22.3854 21.5124 21.4439Z"
                fill="#E3A23C"
                
              ></path>
              <path
                d="M1.13226 20.4766H6.79355C7.4729 20.4766 7.92581 20.9295 7.92581 21.6088V39.0016H1.13226C0.452903 39.0016 0 38.5487 0 37.8693V21.6088C0 20.9295 0.452903 20.4766 1.13226 20.4766Z"
                fill="#F9D448"
                
              ></path>
              <path
                d="M30.5717 20.4766H36.233C36.9124 20.4766 37.3653 20.9295 37.3653 21.6088V37.8693C37.3653 38.5487 36.9124 39.0016 36.233 39.0016H29.4395V21.6088C29.4395 20.9295 29.8924 20.4766 30.5717 20.4766Z"
                fill="#F9D448"
                
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Dailyquest;
