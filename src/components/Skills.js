

export const Skills = ({ indication }) => {
  return (
    <section className={indication ? "section__skills" : "section__skills section__skills-100"} >
      <h2
        className="title__section"
        data-aos="flip-down"
        data-aos-duration="1000"
      >
        Tecnologías
      </h2>
      <div className="container__cards-skills">
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg viewBox="0 0 128 128">
              <path d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
            </svg>
          </div>
          <h3>HTML 5</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg viewBox="0 0 128 128">
              <path d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
            </svg>
          </div>
          <h3>CSS 3</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg viewBox="0 0 128 128">
              <path
                clipRule="evenodd"
                d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
              ></path>
            </svg>
          </div>
          <h3>SASS</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 550 500">
              <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" />
            </svg>
          </div>
          <h3>Bootstrap</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg viewBox="0 0 128 128">
              <path d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg>
          </div>
          <h3>JavaScript</h3>
        </article>

        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg viewBox="0 0 128 128">
              <g>
                <circle cx="64" cy="64" r="11.4"></circle>
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
              </g>
            </svg>
          </div>
          <h3>React</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 448 512">
              <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
            </svg>
          </div>
          <h3>Node</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 640 512">
              <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
            </svg>
          </div>
          <h3>Php</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80px" height="80px">
              <path d="M 31.167969 8 C 30.699219 7.988281 30.289063 8.167969 30.078125 8.6875 C 29.71875 9.558594 30.613281 10.410156 30.933594 10.855469 C 31.15625 11.164063 31.445313 11.511719 31.605469 11.859375 C 31.710938 12.089844 31.726563 12.320313 31.816406 12.5625 C 32.039063 13.160156 32.394531 13.839844 32.679688 14.394531 C 32.824219 14.675781 32.984375 14.96875 33.167969 15.21875 C 33.28125 15.371094 33.472656 15.441406 33.503906 15.675781 C 33.316406 15.941406 33.304688 16.351563 33.199219 16.6875 C 32.722656 18.191406 32.902344 20.0625 33.59375 21.171875 C 33.808594 21.515625 34.3125 22.246094 35 21.96875 C 35.601563 21.722656 35.46875 20.960938 35.640625 20.285156 C 35.679688 20.136719 35.65625 20.023438 35.734375 19.921875 L 35.734375 19.953125 C 35.914063 20.320313 36.097656 20.6875 36.28125 21.050781 C 36.691406 21.707031 37.414063 22.390625 38.023438 22.855469 C 38.339844 23.09375 38.589844 23.507813 39 23.648438 L 39 23.617188 L 38.96875 23.617188 C 38.890625 23.492188 38.765625 23.441406 38.664063 23.34375 C 38.425781 23.109375 38.160156 22.816406 37.964844 22.546875 C 37.40625 21.792969 36.914063 20.964844 36.46875 20.105469 C 36.253906 19.695313 36.066406 19.242188 35.886719 18.824219 C 35.816406 18.660156 35.816406 18.417969 35.671875 18.332031 C 35.472656 18.640625 35.183594 18.886719 35.03125 19.25 C 34.789063 19.828125 34.753906 20.535156 34.664063 21.265625 C 34.609375 21.285156 34.632813 21.269531 34.605469 21.296875 C 34.179688 21.191406 34.027344 20.753906 33.871094 20.378906 C 33.472656 19.429688 33.394531 17.898438 33.75 16.808594 C 33.839844 16.523438 34.25 15.632813 34.085938 15.371094 C 34.007813 15.109375 33.742188 14.960938 33.597656 14.761719 C 33.414063 14.515625 33.234375 14.191406 33.109375 13.90625 C 32.78125 13.164063 32.472656 12.304688 32.125 11.554688 C 31.960938 11.195313 31.683594 10.835938 31.453125 10.515625 C 31.199219 10.164063 30.917969 9.90625 30.71875 9.476563 C 30.652344 9.328125 30.554688 9.085938 30.660156 8.929688 C 30.691406 8.824219 30.738281 8.78125 30.84375 8.746094 C 31.019531 8.609375 31.511719 8.789063 31.699219 8.867188 C 32.1875 9.070313 32.597656 9.265625 33.011719 9.539063 C 33.210938 9.671875 33.410156 9.925781 33.652344 10 L 33.925781 10 C 34.359375 10.097656 34.839844 10.027344 35.238281 10.152344 C 35.949219 10.367188 36.585938 10.703125 37.160156 11.066406 C 38.921875 12.175781 40.363281 13.757813 41.34375 15.644531 C 41.503906 15.949219 41.574219 16.242188 41.714844 16.5625 C 41.992188 17.210938 42.347656 17.882813 42.628906 18.515625 C 42.90625 19.152344 43.179688 19.789063 43.574219 20.316406 C 43.78125 20.59375 44.585938 20.746094 44.949219 20.898438 C 45.203125 21.007813 45.625 21.121094 45.863281 21.265625 C 46.328125 21.542969 46.773438 21.875 47.207031 22.183594 C 47.425781 22.335938 48.089844 22.667969 48.125 22.945313 C 47.050781 22.917969 46.230469 23.015625 45.53125 23.3125 C 45.332031 23.398438 45.011719 23.398438 44.980469 23.648438 C 45.085938 23.761719 45.105469 23.933594 45.191406 24.074219 C 45.359375 24.34375 45.640625 24.707031 45.894531 24.898438 C 46.171875 25.105469 46.453125 25.328125 46.75 25.511719 C 47.273438 25.828125 47.859375 26.011719 48.367188 26.332031 C 48.664063 26.523438 48.964844 26.761719 49.253906 26.972656 C 49.398438 27.082031 49.492188 27.246094 49.679688 27.3125 L 49.679688 27.28125 C 49.582031 27.15625 49.558594 26.984375 49.46875 26.855469 L 49.066406 26.453125 C 48.679688 25.941406 48.1875 25.488281 47.664063 25.113281 C 47.246094 24.8125 46.3125 24.40625 46.140625 23.921875 L 46.109375 23.890625 C 46.402344 23.859375 46.75 23.75 47.023438 23.675781 C 47.484375 23.554688 47.890625 23.585938 48.363281 23.464844 C 48.578125 23.402344 48.792969 23.339844 49.007813 23.28125 L 49.007813 23.15625 C 48.769531 22.914063 48.597656 22.585938 48.335938 22.363281 C 47.652344 21.78125 46.90625 21.199219 46.136719 20.714844 C 45.710938 20.445313 45.183594 20.269531 44.734375 20.042969 C 44.582031 19.964844 44.316406 19.925781 44.214844 19.796875 C 43.976563 19.496094 43.847656 19.113281 43.664063 18.761719 C 43.28125 18.023438 42.90625 17.21875 42.566406 16.441406 C 42.335938 15.914063 42.183594 15.390625 41.894531 14.914063 C 40.507813 12.636719 39.015625 11.257813 36.703125 9.90625 C 36.210938 9.617188 35.621094 9.507813 34.996094 9.359375 C 34.65625 9.335938 34.324219 9.316406 33.984375 9.296875 C 33.78125 9.210938 33.566406 8.960938 33.375 8.835938 C 32.894531 8.535156 31.949219 8.011719 31.167969 8 Z M 34.476563 11.3125 C 34.253906 11.308594 34.09375 11.339844 33.925781 11.375 L 33.925781 11.40625 L 33.957031 11.40625 C 34.0625 11.625 34.253906 11.765625 34.386719 11.953125 C 34.488281 12.167969 34.585938 12.382813 34.6875 12.597656 L 34.71875 12.566406 C 34.90625 12.433594 34.996094 12.21875 34.996094 11.894531 C 34.917969 11.816406 34.90625 11.714844 34.84375 11.621094 C 34.753906 11.492188 34.585938 11.421875 34.476563 11.3125 Z M 1.867188 23.996094 C 1.566406 24.007813 1.238281 24.066406 0.882813 24.179688 C 0.289063 24.359375 -0.00390625 24.714844 -0.00390625 25.4375 L -0.00390625 33 L 2 33 L 2 25.621094 L 4.777344 31.929688 C 5.121094 32.714844 5.589844 32.996094 6.507813 32.996094 C 7.429688 32.996094 7.878906 32.714844 8.222656 31.929688 L 11 25.78125 L 11 33 L 13 33 L 13 25.4375 C 13 24.714844 12.710938 24.359375 12.113281 24.179688 C 10.691406 23.730469 9.734375 24.117188 9.304688 25.089844 L 6.453125 31.503906 L 3.695313 25.089844 C 3.382813 24.359375 2.757813 23.960938 1.867188 23.996094 Z M 26.246094 24 C 25.457031 24 23 24.09375 23 26 L 23 27.234375 C 23 28.109375 23.769531 28.824219 25.4375 29 C 25.625 29.011719 25.8125 29.027344 26 29.027344 C 26 29.027344 27.945313 28.988281 28 29 C 29.125 29 29 29.875 29 30 L 29 31 C 29 31.136719 28.96875 32 27.988281 32 L 23 32 L 23 33 L 28.007813 33 C 28.664063 33 29.300781 32.863281 29.808594 32.625 C 30.652344 32.238281 31 31.714844 31 31.027344 L 31 29.597656 C 31 28.0625 29.09375 28 28 28 L 26 28 C 25.214844 28 25.09375 27.523438 25 27 L 25 26 C 25.09375 25.601563 25.269531 25.0625 25.964844 25 L 31 25 L 31 24 Z M 33.980469 24 C 32.503906 24.203125 31.984375 24.9375 31.984375 26 L 31.984375 31 C 31.984375 31.972656 32.527344 32.558594 33.644531 32.863281 C 34.019531 32.96875 34.359375 33.011719 34.679688 33.011719 L 36.90625 33 L 38.214844 33 L 39.328125 34 L 41.578125 34 L 40.03125 32.605469 C 40.757813 32.304688 40.984375 31.84375 40.984375 30.980469 L 40.984375 26 C 40.984375 24.9375 40.292969 24.203125 38.816406 24 Z M 42 24 L 42 30.957031 C 42 32.164063 42.683594 32.84375 44.492188 32.980469 C 44.660156 32.988281 44.832031 33 45 33 L 50 33 L 50 32 L 45.378906 32 C 44.347656 32 44 31.566406 44 30.949219 L 44 24 Z M 35.171875 25 L 37.746094 25 C 38.425781 25 38.882813 25.546875 38.984375 26 C 38.984375 26 39 30.65625 39 31 C 39 31.34375 38.808594 31.5 38.808594 31.5 L 38.265625 31 L 36 31 L 37.113281 32 L 35.171875 32 C 34.476563 32 34.085938 31.484375 33.984375 31 L 33.984375 26.101563 C 33.984375 25.570313 34.390625 25 35.171875 25 Z M 14 27 C 14.039063 27.039063 14 31.261719 14 31.34375 C 14.015625 32.21875 15.125 32.984375 16.863281 33 L 20 33 L 20 33.066406 C 20 33.253906 20.136719 33.878906 19 34 C 18.988281 34 14.011719 34 14 34 L 14 35 L 19.214844 35 C 20.097656 34.972656 22.011719 34.773438 22 33.242188 C 22 33.214844 22.007813 27 22 27 L 20 27 L 20 32 C 19.96875 32 17.523438 32.007813 17.03125 32 C 16.066406 31.984375 15.984375 31.433594 16 31.222656 L 16 27 Z" />
            </svg>
          </div>
          <h3>MySQL</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80px" height="80px">
              <path d="M 35.199219 2.101563 C 33.699219 2.101563 32.398438 2.398438 31.199219 2.699219 C 33.300781 3.597656 34.601563 4.699219 35.300781 5.199219 C 36.902344 6.597656 37.800781 8 39.402344 10.300781 C 39.699219 10.800781 40.199219 11.5 40.5 12.597656 C 40.800781 13.597656 40.800781 14.398438 40.800781 15.199219 C 40.800781 16.300781 40.699219 17.199219 40.597656 18.097656 C 40.5 18.800781 40.5 19.101563 40.402344 19.300781 C 40.402344 19.402344 40.402344 19.5 40.300781 19.699219 C 40.300781 20.199219 40.300781 20.402344 40.402344 20.800781 C 40.402344 21.199219 40.5 21.601563 40.5 22.300781 C 40.601563 23.601563 40.601563 24.5 40.402344 25.597656 L 40.402344 26 C 40.199219 26.898438 40 27.800781 39.5 28.597656 C 39.601563 28.800781 39.699219 28.898438 39.800781 29.097656 C 40.300781 28.398438 40.699219 27.699219 41.097656 26.902344 C 42.300781 24.699219 43 22.800781 43.5 21.402344 C 44.398438 18.800781 44.898438 16.898438 45.199219 15.5 C 45.898438 12.5 46 11.101563 45.699219 9.5 C 45.699219 9 45.5 8.097656 45 7.199219 C 43.898438 5.199219 42.199219 4.300781 41 3.699219 C 40.199219 3.300781 38.097656 2.199219 35.199219 2.101563 Z M 13.535156 2.542969 C 12.382813 2.519531 10.976563 2.648438 9.398438 3.398438 C 8.898438 3.601563 7.398438 4.300781 6.199219 5.898438 C 5.398438 6.898438 4.800781 8.398438 4.5 10.097656 C 4.199219 11.597656 4.097656 13.402344 4.699219 16.800781 C 5.097656 19.199219 5.5 20.800781 6.300781 24.097656 C 6.402344 24.5 7 26.300781 8.300781 30.300781 L 8.398438 30.5 C 8.601563 31.199219 9.199219 32.699219 10.5 34.199219 C 11.398438 35.199219 12.199219 35.800781 12.902344 35.800781 L 13.097656 35.800781 C 14.398438 35.800781 15.300781 34.800781 16.097656 34 C 16.097656 33.898438 18 31.601563 18.699219 30.800781 C 18.597656 30.699219 18.402344 30.699219 18.300781 30.597656 C 17.101563 29.898438 16.199219 28.800781 15.5 27.597656 C 14.300781 25.398438 14.398438 23.199219 14.597656 22.097656 L 14.699219 20.402344 C 14.300781 17.699219 14.402344 15.101563 14.902344 12.5 C 15.300781 10.300781 15.800781 8.101563 17.597656 5.800781 C 18.199219 5 18.898438 4.300781 19.597656 3.800781 C 18 3.101563 16.300781 2.699219 14.597656 2.601563 C 14.273438 2.574219 13.917969 2.550781 13.535156 2.542969 Z M 26.097656 3.398438 C 25.597656 3.398438 25.097656 3.398438 24.597656 3.5 C 22.597656 3.898438 20.699219 5 19.199219 6.898438 C 17.699219 8.800781 17.300781 10.597656 16.902344 12.699219 C 16.699219 13.5 16.699219 14.199219 16.597656 15 C 17.199219 14.5 18 13.898438 19.199219 13.597656 C 19.898438 13.398438 21.699219 12.800781 23.199219 13.699219 C 23.699219 14 24.398438 14.601563 25.097656 16.300781 C 26.597656 20.5 25.101563 24.800781 24.902344 25.199219 C 24.800781 25.597656 24.601563 25.898438 24.5 26.097656 C 24.300781 26.597656 24.101563 27 23.902344 27.800781 C 23.800781 28.5 23.699219 29.101563 23.699219 29.800781 C 24 29.800781 24.300781 29.898438 24.597656 30.097656 C 25.097656 30.597656 25.199219 31.300781 25.300781 31.597656 C 25.5 33.199219 25.5 35.199219 25.5 37.199219 C 25.5 38.800781 25.5 40.300781 25.597656 41.300781 C 25.800781 43.601563 26.5 45.199219 27.5 46 C 28.199219 46.601563 29.097656 46.597656 29.597656 46.699219 L 29.800781 46.699219 C 31.300781 46.699219 33.699219 45.699219 34.597656 44.300781 C 35.097656 43.5 35.300781 42.800781 35.5 41.800781 C 35.601563 41.199219 35.597656 40.902344 35.699219 40.300781 C 35.699219 40 35.800781 39.5 35.800781 38.902344 C 35.800781 38.402344 35.898438 37.800781 36 37.097656 C 36.101563 35.398438 36.398438 33.402344 36.5 32.300781 C 36.601563 31 37.199219 29.898438 37.699219 29.199219 C 37 29.097656 36.300781 28.5 35.902344 27.5 C 35.300781 26.398438 35.199219 26.097656 35.097656 25.597656 C 35 25.199219 34.800781 24.699219 34.097656 23.199219 C 32.597656 19.800781 32.402344 18.800781 32.402344 18 C 32.300781 16.898438 32.199219 15.402344 33.402344 14.402344 C 35.199219 12.800781 37.5 12.902344 38.699219 13.300781 L 38.699219 13.097656 C 38.5 12.300781 38.101563 11.699219 37.800781 11.300781 C 36.300781 9 35.5 7.800781 34.097656 6.601563 C 33.5 6.101563 32 4.898438 29.800781 4.101563 C 28.800781 3.800781 27.597656 3.398438 26.097656 3.398438 Z M 37.152344 15.125 C 36.425781 15.074219 35.5 15.199219 34.699219 15.902344 C 34.300781 16.300781 34.300781 17.101563 34.402344 17.800781 C 34.402344 18.300781 34.5 19 36 22.402344 C 36.699219 24 36.898438 24.5 37 24.902344 C 37.101563 25.300781 37.199219 25.5 37.800781 26.597656 C 37.902344 26.800781 38 27 38.199219 27.199219 C 38.398438 26.898438 38.5 26.398438 38.597656 25.597656 L 38.699219 25.300781 C 38.898438 24.402344 38.800781 23.699219 38.800781 22.5 C 38.800781 21.898438 38.699219 21.5 38.699219 21.199219 C 38.597656 20.699219 38.597656 20.300781 38.597656 19.699219 C 38.398438 19.398438 38.398438 19.300781 38.5 19.097656 C 38.5 18.898438 38.597656 18.601563 38.699219 18 C 38.800781 17.199219 38.902344 16.5 38.902344 15.699219 C 38.699219 15.597656 38.601563 15.5 38.402344 15.402344 C 38.402344 15.402344 37.875 15.175781 37.152344 15.125 Z M 21.515625 15.519531 C 20.878906 15.445313 20.148438 15.652344 19.699219 15.800781 C 18.597656 16.101563 17.902344 16.800781 17.402344 17.199219 C 17.101563 17.5 16.800781 17.800781 16.5 18.199219 C 16.5 18.898438 16.597656 19.601563 16.699219 20.300781 L 16.699219 20.402344 L 16.5 22.402344 C 16.300781 23.300781 16.199219 25 17.199219 26.699219 C 17.699219 27.699219 18.402344 28.5 19.300781 29 C 19.902344 29.398438 20.699219 29.699219 21.597656 29.902344 C 21.597656 29.199219 21.699219 28.398438 21.800781 27.699219 C 22 26.699219 22.199219 26.199219 22.5 25.597656 C 22.601563 25.300781 22.699219 25.101563 22.902344 24.800781 C 23 24.5 24.398438 20.699219 23.097656 17.199219 C 22.800781 16.398438 22.5 15.898438 22.097656 15.699219 C 21.925781 15.597656 21.722656 15.542969 21.515625 15.519531 Z M 36.1875 16.089844 C 36.449219 16.074219 36.699219 16.097656 36.800781 16.199219 C 37.101563 16.398438 36.699219 16.898438 36.597656 17 C 36.5 17.101563 36.300781 17.300781 36 17.402344 C 35.601563 17.5 35.300781 17.199219 35.199219 17.199219 C 35.097656 17.097656 34.800781 16.800781 34.902344 16.5 C 35 16.300781 35.101563 16.300781 35.5 16.199219 C 35.648438 16.148438 35.925781 16.101563 36.1875 16.089844 Z M 21.15625 16.917969 C 21.492188 16.894531 21.773438 17.023438 22 17.097656 C 22.300781 17.199219 22.597656 17.300781 22.597656 17.5 C 22.699219 17.800781 22.402344 18 22.300781 18.097656 C 22 18.398438 21.5 18.402344 21.5 18.402344 C 21 18.402344 20.699219 18.101563 20.5 17.800781 C 20.398438 17.699219 20.300781 17.5 20.402344 17.300781 C 20.5 17.101563 20.699219 17 20.800781 17 C 20.925781 16.949219 21.042969 16.925781 21.15625 16.917969 Z M 39.5 30 C 39 30.699219 38.300781 31.601563 38.199219 32.800781 C 38.199219 33 38.199219 33.101563 38.097656 33.300781 C 38.898438 33.5 39.601563 33.5 40.300781 33.402344 C 41.902344 33.199219 43 32.398438 43.199219 32.199219 C 43.898438 31.699219 44.800781 30.699219 44.597656 30.300781 C 44.5 30.101563 44.199219 30.199219 42.597656 30.300781 C 42.199219 30.300781 41 30.601563 40.199219 30.402344 L 40 30.402344 C 39.800781 30.300781 39.601563 30.199219 39.5 30 Z M 22.097656 32 C 21.898438 32.300781 21.601563 32.5 21.402344 32.699219 C 20.601563 33.199219 19.597656 33.601563 18.597656 33.800781 C 17.699219 34.101563 17.199219 34.101563 17.199219 34.402344 C 17.097656 34.800781 18.097656 35.300781 18.597656 35.5 C 20.300781 36.199219 22 35.800781 22.300781 35.699219 C 22.5 35.597656 23 35.398438 23.5 35.097656 C 23.5 34 23.402344 33 23.300781 32.199219 L 23.300781 32.097656 L 23.199219 32.097656 C 22.898438 32.097656 22.5 32.101563 22.097656 32 Z" />
            </svg>
          </div>
          <h3>PostgreSQL</h3>
        </article>
        <article
          className="card__skill"
        >
          <div className="container__svg-skill">
            <svg viewBox="0 0 128 128">
              <path d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
            </svg>
          </div>
          <h3>Git</h3>
        </article>
      </div>
    </section>
  )
}
