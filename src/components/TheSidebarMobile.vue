<template>
  <div class="hidden fixed inset-0 bg-black bg-opacity-50 z-30">
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button class="ml-2 mr-6 focus:outline:none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <a href="#">
          <svg
            class="w-20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 492 110"
            xmlns:v="https://vecta.io/nano"
          >
            <path
              d="M154.3 17.5a19.6 19.6 0 0 0-13.8-13.8C128.4.4 79.7.4 79.7.4S31 .5 18.9 3.8A19.6 19.6 0 0 0 5.1 17.6C1.44 39.1.02 71.86 5.2 92.5A19.6 19.6 0 0 0 19 106.3c12.1 3.3 60.8 3.3 60.8 3.3s48.7 0 60.8-3.3a19.6 19.6 0 0 0 13.8-13.8c3.86-21.53 5.05-54.27-.1-75z"
              fill="red"
            />
            <path fill="#fff" d="M64.2 78.4L104.6 55 64.2 31.6z" />
            <g fill="#282828">
              <path
                d="M227.9 99.7c-3.1-2.1-5.3-5.3-6.6-9.7s-1.9-10.2-1.9-17.5v-9.9c0-7.3.7-13.3 2.2-17.7 1.5-4.5 3.8-7.7 7-9.7s7.3-3.1 12.4-3.1c5 0 9.1 1 12.1 3.1s5.3 5.3 6.7 9.7 2.1 10.3 2.1 17.6v9.9c0 7.3-.7 13.1-2.1 17.5s-3.6 7.6-6.7 9.7c-3.1 2-7.3 3.1-12.5 3.1-5.4.1-9.6-1-12.7-3zM245.2 89c.9-2.2 1.3-5.9 1.3-10.9V56.8c0-4.9-.4-8.5-1.3-10.7-.9-2.3-2.4-3.4-4.5-3.4s-3.5 1.1-4.4 3.4-1.3 5.8-1.3 10.7v21.3c0 5 .4 8.7 1.2 10.9s2.3 3.3 4.5 3.3c2.1 0 3.6-1.1 4.5-3.3zm219.2-16.3v3.5l.4 9.9c.3 2.2.8 3.8 1.6 4.8s2.1 1.5 3.8 1.5c2.3 0 3.9-.9 4.7-2.7.9-1.8 1.3-4.8 1.4-8.9l13.3.8c.1.6.1 1.4.1 2.4 0 6.3-1.7 11-5.2 14.1s-8.3 4.7-14.6 4.7c-7.6 0-12.9-2.4-15.9-7.1s-4.6-12.1-4.6-22V61.6c.34-17 3.33-29.45 20.9-29.5 5.3 0 9.3 1 12.1 2.9s4.8 4.9 6 9 1.7 9.7 1.7 16.9v11.7h-25.7zm2-28.8c-.8 1-1.3 2.5-1.6 4.7s-.4 10-.4 10v4.9h11.2v-4.9c0 4.9-.1-7.7-.4-10s-.8-3.9-1.6-4.8-2-1.4-3.6-1.4c-1.7.1-2.9.6-3.6 1.5zM190.5 71.4L173 8.2h15.3s7.15 31.7 9.6 46.6h.4c2.78-15.82 9.8-46.6 9.8-46.6h15.3l-17.7 63.1v30.3h-15.1V71.4z"
              />
              <path
                id="A"
                d="M311.5 33.4v68.3h-12l-1.3-8.4h-.3c-3.3 6.3-8.2 9.5-14.7 9.5-11.77-.03-13.08-10-13.2-18.4v-51h15.4v50.1c0 3 .3 5.2 1 6.5 1.42 2.78 5.1 2.07 7.1.7a8 8 0 0 0 2.7-3.1V33.4z"
                fill="#282828"
              />
              <path
                d="M353.3 20.6H338v81.1h-15V20.6h-15.3V8.2h45.5v12.4zm87.9 23.7c-.9-4.3-2.4-7.4-4.5-9.4-2.1-1.9-4.9-2.9-8.6-2.9a14.1 14.1 0 0 0-7.9 2.4c-2.5 1.6-4.3 3.7-5.7 6.3h-.1v-36h-14.8v96.9h12.7l1.6-6.5h.3a14 14 0 0 0 5.3 5.5c2.4 1.3 5 2 7.9 2 5.2 0 9-2.4 11.5-7.2 2.4-4.8 3.7-12.3 3.7-22.4V62.2c0-7.6-.5-13.6-1.4-17.9zm-14.1 27.9c0 5-.2 8.9-.6 11.7s-1.1 4.8-2.1 6-2.3 1.8-3.9 1.8c-3.1-.1-4.86-1.5-6.1-3.6V49.3c.5-1.9 1.4-3.4 2.7-4.6 2.2-2.47 5.96-2.5 7.7 0 .9 1.2 1.4 3.3 1.8 6.2.3 2.9.5 7 .5 12.4z"
              />
            </g>
            <use xlink:href="#A" x="78.9" />
          </svg>
        </a>
      </section>
      <section class="py-2 border-b">
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300"
            >
              <svg
                class="w-6 h-6 mr-6 text-red-500"
                fill="currentColor"
                viewBox=" 0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <g class="style-scope yt-icon">
                  <path
                    d="M4,10V21h6V15h4v6h6V10L12,3Z"
                    class="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <g
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  class="style-scope yt-icon"
                >
                  <path
                    d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                  ></path>
                </g>
              </svg>
              <span>Shorts</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6 ml-0.5 text-gray-200"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <g class="style-scope yt-icon">
                  <path
                    d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                    class="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
              <span>Subscriptions</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-2 border-b">
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-5"
                fill="#4b5563"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                style="pointer-events: none"
              >
                <g class="style-scope yt-icon">
                  <path
                    d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                    class="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
              <span>Library</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-5"
                fill="#4b5563"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                style="pointer-events: none"
              >
                <g class="style-scope yt-icon">
                  <path
                    d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
                    class="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
              <span>History</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="px-8 py-4 font-medium leading-5 border-b">
        <span class="text-sm">
          Sign in to like videos, comment and subscribe.
        </span>
        <button
          class="flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-full"
        >
          <svg
            class="mr-2 w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Sign In
        </button>
      </section>
      <section class="py-2 border-b">
        <div class="uppercase text-sm font-semibold px-6 py-2">
          Best of YouTube
        </div>
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  ></path>
                </svg>
              </div>

              <span>Music</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <span>Sport</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                  />
                </svg>
              </div>

              <span>Gaming</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  ></path>
                </svg>
              </div>
              <span>News</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </div>
              <span>Live</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </div>
              <span>Fashion & beauty</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <span>Learning</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  class="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span>360&deg; Video</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-2 border-b">
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <div class="p-1 mr-6 bg-gray-700 rounded-full">
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <span>Browse channels</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-2 border-b">
        <div class="uppercase text-sm font-semibold px-6 py-2">
          More from YouTube
        </div>
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-5 h-5 mr-6 text-gray"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                width="96.875px"
                height="96.875px"
                viewBox="0 0 96.875 96.875"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M95.201,25.538c-1.186-5.152-5.4-8.953-10.473-9.52c-12.013-1.341-24.172-1.348-36.275-1.341   c-12.105-0.007-24.266,0-36.279,1.341c-5.07,0.567-9.281,4.368-10.467,9.52C0.019,32.875,0,40.884,0,48.438   C0,55.992,0,64,1.688,71.336c1.184,5.151,5.396,8.952,10.469,9.52c12.012,1.342,24.172,1.349,36.277,1.342   c12.107,0.007,24.264,0,36.275-1.342c5.07-0.567,9.285-4.368,10.471-9.52c1.689-7.337,1.695-15.345,1.695-22.898   C96.875,40.884,96.889,32.875,95.201,25.538z M35.936,63.474c0-10.716,0-21.32,0-32.037c10.267,5.357,20.466,10.678,30.798,16.068   C56.434,52.847,46.23,58.136,35.936,63.474z"
                  />
                </g>
              </svg>

              <span>YouTube Premium</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>

              <span>Live</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-2 border-b">
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Report history</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Help</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 mr-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Send feedback</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="px-6 py-4 text-xs font-semibold space-y-4">
        <div>
          <a href="#" class="mr-2">About</a>
          <a href="#" class="mr-2">Press</a>
          <a href="#" class="mr-2">Copyright</a>
          <a href="#" class="mr-2">Contact us</a>
          <a href="#" class="mr-2">Creators</a>
          <a href="#" class="mr-2">Advertise</a>
          <a href="#" class="mr-2">Developers</a>
        </div>
        <div>
          <a href="#" class="mr-2">Terms</a>
          <a href="#" class="mr-2">Privacy</a>
          <a href="#" class="mr-2">Privace & Safety</a>
          <a href="#" class="mr-2">How YouTube works</a>
          <a href="#" class="mr-2">Test new features</a>
        </div>
        <div class="font-normal text-gray-500">&copy; 2022 Google LLC</div>
      </section>
    </aside>
  </div>
</template>
