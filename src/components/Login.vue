

<template>

<section class="relative flex flex-wrap lg:h-screen lg:items-center bg-color">
  <div class="bg">

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="grid gap-10 lg:grid-cols-2"> 
              <div>
                <img class="w-96 mt-40 mr-20" src="./assets/aset2.png" alt="" />
              </div>

                <div class="lg:pr-10">
                  <div class="bg-white mx-10 shadow-md border-gray-800 rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mx-auto max-w-lg text-left">
                  <img src="./assets/img_actioncorp_logo.svg" alt="">
                  <div class="mt-5"></div>
                    <h1 class="font-semibold text-3xl text-blue-800">Login</h1>
                    <h1 class="font-semibold text-3xl text-blue-800">Dashboard</h1>

                </div>

                <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                  <div>
                    <label for="kode korporat" class="sr-only">Kode Korporat</label>

                    <div class="relative">
                      

                      <span class="absolute inset-y-0 start-0 grid place-content-center px-4">
                        <img src="./assets/icon/ic_form_korporat.png" class="h-4 w-4 text-gray-400">
                      </span>

                      <input
                        type="number"
                        class="w-full input rounded-sm border-black p-4 text-sm shadow-sm"
                        placeholder="Kode Korporat"
                      />
                    </div>

                  </div>

                  <div>
                    <label for="userid" class="sr-only">User ID</label>

                    <div class="relative">

                      <span class="absolute inset-y-0 start-0 grid place-content-center px-4">
                        <img src="./assets/icon/ic_form_userid.png" class="h-4 w-4 text-gray-400">
                      </span>

                      <input
                        type="text"
                        class="w-full input rounded-sm border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="User ID"
                      />

                    </div>
                  </div>

                  <div>
                    <label for="password" class="sr-only">Password</label>

                    <div class="relative">

                      <span class="absolute inset-y-0 start-0 grid place-content-center px-4">
                        <img src="./assets/icon/ic_form_password.png" class="h-4 w-4 text-gray-400">
                      </span>

                      <input
                        type="password"
                        class="w-full input rounded-sm border-black p-4 pe-12 text-sm shadow-sm"
                        placeholder="Password"
                      />

                    </div>
                  </div>
                </form>

                <div class="text-center">
                    
                    <div class="items-center">
                        <a href="/home" aria-label="" class="hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-300 mt-7 inline-block rounded-full bg-blue-800 px-36 py-3 text-sm font-medium text-gray-100 hover:text-blue-900 hover:shadow-md hover:bg-blue-50 active:text-indigo-500">
                        Login
                        </a>
                    </div>

                    <div class="items-center mt-5">
                        <a href="" aria-label="" class=" mt-7 text-md font-medium text-gray-600">
                        Lupa Password?
                        </a>
                    </div>

                    <div class="max-w-md sm:mx-auto sm:text-center">

                <div class="flex items-center justify-center ml-10 mb-4 sm:mx-auto sm:w-8 sm:h-24">
                    <img class="" src="./assets/icon/ic_logo_kominfo.svg" alt="">
                    <img class="ml-5" src="./assets/icon/ic_logo_bankindonesia.svg" alt="">
                    <img class="ml-5" src="./assets/icon/ic_logo_iso.svg" alt="">
                </div>

                <div class="items-center mt-1">
                    <p class="mt-7 text-sm font-medium text-gray-400">
                      copyright@actioncorp2023
                    </p>
                </div>
          </div>

                  </div>
                  
                  </div>
              </div>
              
          </div>
      </div>

  </div>
</section>

</template>

<style>

html {
  scroll-behavior: smooth;
  background-color: #EEEEFB;
}

section{
  position: relative;
  width: 100%;
  height: 100%;
  background: #0c5ed7;
  overflow: hidden;
}

.bg {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./assets/aset.jpeg');
  background-color: #EEEEFB;
}

.bg-color {
  background-color: #EEEEFB;
}

.form-select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 0.5rem center;
        background-size: 1.5em 1.5em;
        -webkit-tap-highlight-color: transparent;
      }

      .submit-button:disabled {
        cursor: not-allowed;
        background-color: #D1D5DB;
        color: #111827;
      }

      .submit-button:disabled:hover {
        background-color: #9CA3AF;
      }

      .credit-card {
        max-width: 420px;
        margin-top: 3rem;
      }

      @media only screen and (max-width: 420px)  {
        .credit-card .front {
          font-size: 100%;
          padding: 0 2rem;
          bottom: 2rem !important;
        }

        .credit-card .front .number {
          margin-bottom: 0.5rem !important;
        }
      }

      input::placeholder {
        padding: 10px;
      }

      .input {
        text-align: center;
      }

</style>


