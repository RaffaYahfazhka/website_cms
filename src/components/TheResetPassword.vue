<template>

    <section v-motion-fade class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img class="h-8 mr-2" src="./assets/ActionPay.png" alt="logo">
          </a>
          <div class="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-1xl">
                     &#128075; Reset Password
                  </h1>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Silahkan masukkan alamat email anda.
                    Anda akan mendapatkan link untuk membuat password baru via email. 
                  </p>
                  <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                        <input type="email" name="email" id="email" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat E-mail">
                      </div>
                      <button type="submit" class="w-full text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-900 transition dark:focus:ring-primary-800">Dapatkan Password Baru</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
    
    </template>