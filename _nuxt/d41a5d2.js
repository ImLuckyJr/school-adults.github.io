(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{167:function(t,e,n){"use strict";var C=n(30),component=Object(C.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto"},[n("TheHeader"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheHeader:n(236).default})},169:function(t,e,n){n(170),t.exports=n(171)},212:function(t,e,n){var content=n(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("581dbee3",content,!0,{sourceMap:!1})},213:function(t,e,n){var C=n(62),r=n(168),o=n(214),l=n(215),f=n(216),c=C((function(i){return i[1]})),d=r(o),H=r(l),m=r(f);c.push([t.i,'html{\n  font-family:Roboto,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box;\n  width:100%;\n  height:100%\n}\n\n@font-face{\n  font-family:"AdamCG";\n\n  font-display:swap;\n\n  src:url('+d+') format("opentype")\n}\n\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n\nheader{\n  font-size:1.5rem\n}\n\nheader .link__item--active a{\n  color:#f76d6d\n}\n\nheader .link__item:hover a{\n  color:#f76d6d!important\n}\n\nheader .link__item--profile a:before{\n  display:inline-block;\n  content:" ";\n  background-image:url('+H+");\n  background-size:30px 36px;\n  width:30px;\n  height:36px;\n  margin-right:1rem\n}\n\nheader .link__item--profile:hover a:before{\n  background-image:url("+m+')\n}\n\nh1,h2,h3,h4,h5,h6{\n  font-family:"AdamCG",sans-serif;\n  font-weight:400;\n  color:#24315e\n}\n\nh2{\n  font-size:48px;\n  line-height:58px\n}\n\n.btn--round{\n  display:flex;\n  flex-direction:row;\n  justify-content:center;\n  align-items:center\n}\n\n.btn--round button{\n  width:170px;\n  height:170px;\n  background-color:#f76d6d;\n  border-radius:50%;\n  color:#fff;\n  font-size:28px;\n  line-height:32px;\n  box-shadow:0 0 15px rgba(0,0,0,.45)\n}\n\n.title{\n  width:100%;\n  text-align:center;\n  display:block;\n  text-transform:uppercase;\n  margin-bottom:4rem\n}',""]),t.exports=c},214:function(t,e,n){t.exports=n.p+"fonts/ADAM.CG PRO.00478c0.otf"},215:function(t,e,n){t.exports=n.p+"img/user-icon.ef117c3.svg"},216:function(t,e,n){t.exports=n.p+"img/user-icon-hover.066a05b.svg"},236:function(t,e,n){"use strict";n.r(e);var C={name:"TheHeader"},r=n(30),component=Object(r.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex flex-row justify-between py-5"},[n("div",{staticClass:"header__left flex flex-row"},[n("div",{staticClass:"logo 2xl:mr-32 xl:mr-32 lg:mr-24 md:mr-24 sm:mr-16"},[n("svg",{attrs:{fill:"none",height:"85",viewBox:"0 0 225 85",width:"225",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M114.56 33V18.16H116.88V30.9H122.8V18.16H125.12V30.9H131V18.16H133.32V33H114.56ZM143.99 33L138.11 26.28V33H135.79V18.16H138.11V24.28L142.87 18.16H145.79L140.35 25.3L146.89 33H143.99ZM155.797 33C154.797 33 153.837 32.8067 152.917 32.42C152.037 32.0467 151.25 31.5133 150.557 30.82C149.864 30.1267 149.33 29.34 148.957 28.46C148.57 27.54 148.377 26.58 148.377 25.58C148.377 24.58 148.57 23.6133 148.957 22.68C149.33 21.8267 149.864 21.04 150.557 20.32C151.237 19.64 152.024 19.1133 152.917 18.74C153.837 18.3533 154.797 18.16 155.797 18.16C156.797 18.16 157.764 18.3533 158.697 18.74C159.577 19.1267 160.364 19.6533 161.057 20.32C161.724 21.0133 162.25 21.8 162.637 22.68C163.024 23.6133 163.217 24.58 163.217 25.58C163.217 26.58 163.024 27.54 162.637 28.46C162.264 29.3533 161.737 30.14 161.057 30.82C160.337 31.5133 159.55 32.0467 158.697 32.42C157.764 32.8067 156.797 33 155.797 33ZM155.797 20.48C154.397 20.48 153.197 20.98 152.197 21.98C151.197 22.98 150.697 24.18 150.697 25.58C150.697 26.98 151.197 28.18 152.197 29.18C153.197 30.18 154.397 30.68 155.797 30.68C157.197 30.68 158.397 30.18 159.397 29.18C160.397 28.18 160.897 26.98 160.897 25.58C160.897 24.18 160.397 22.98 159.397 21.98C158.397 20.98 157.197 20.48 155.797 20.48ZM164.85 33L171.65 17.5L178.01 33H175.49L171.59 23.22L167.41 33H164.85ZM189.29 33L188.03 29.82H182.75L181.49 33H178.93L185.39 17.48L191.83 33H189.29ZM187.19 27.74L185.39 23.22L183.59 27.74H187.19ZM121.68 52.6C121.68 51.8267 121.42 51.1933 120.9 50.7C120.607 50.4067 120.227 50.16 119.76 49.96L119.46 50.08L119.14 50.22C118.78 50.3667 118.38 50.5067 117.94 50.64C117.633 50.72 117.28 50.8067 116.88 50.9V54.9H117.84C119.133 54.9 120.113 54.6867 120.78 54.26C121.38 53.8733 121.68 53.32 121.68 52.6ZM116.9 44.18L116.88 44.24V48.74C117.413 48.62 117.92 48.46 118.4 48.26C119.72 47.6467 120.813 47.7733 121.68 48.64C121.893 48.7867 122.12 48.9667 122.36 49.18C122.8 49.62 123.14 50.1067 123.38 50.64C123.633 51.2267 123.76 51.88 123.76 52.6C123.76 53.3333 123.6 54 123.28 54.6C122.96 55.16 122.507 55.6333 121.92 56.02C120.88 56.6733 119.52 57 117.84 57H114.56V42.16H122.3V44.18H116.9ZM133.038 51.98H131.218C130.324 51.98 129.538 51.82 128.858 51.5C128.324 51.2467 127.878 50.9133 127.518 50.5C126.771 49.7 126.371 48.6533 126.318 47.36V42.16H128.398V47.06C128.398 47.42 128.438 47.76 128.518 48.08C128.638 48.4933 128.818 48.8333 129.058 49.1C129.538 49.62 130.258 49.88 131.218 49.88H133.038V42.16H135.378V51.96C135.378 52.8667 135.191 53.68 134.818 54.4C134.538 54.9333 134.164 55.4 133.698 55.8C132.751 56.6 131.551 57 130.098 57C129.778 57 129.464 56.98 129.158 56.94V54.56C129.464 54.64 129.778 54.68 130.098 54.68C130.964 54.68 131.671 54.46 132.218 54.02C132.764 53.5533 133.038 52.8733 133.038 51.98ZM140.069 53.9H146.169L143.229 46.24L140.069 53.9ZM138.049 53.9L143.269 41.5L148.189 53.9H150.209L147.349 57.72L146.069 56.78L147.009 55.5H139.169L140.109 56.78L138.829 57.72L135.989 53.9H138.049ZM158.409 51.98H156.589C155.696 51.98 154.909 51.82 154.229 51.5C153.696 51.2467 153.249 50.9133 152.889 50.5C152.142 49.7 151.742 48.6533 151.689 47.36V42.16H153.769V47.06C153.769 47.42 153.809 47.76 153.889 48.08C154.009 48.4933 154.189 48.8333 154.429 49.1C154.909 49.62 155.629 49.88 156.589 49.88H158.409V42.16H160.749V51.96C160.749 52.8667 160.562 53.68 160.189 54.4C159.909 54.9333 159.536 55.4 159.069 55.8C158.122 56.6 156.922 57 155.469 57C155.149 57 154.836 56.98 154.529 56.94V54.56C154.836 54.64 155.149 54.68 155.469 54.68C156.336 54.68 157.042 54.46 157.589 54.02C158.136 53.5533 158.409 52.8733 158.409 51.98ZM180.66 57H162.9V42.16H165.22V54.9H171.14V42.16H173.46V54.9H179.34V42.16H181.66V54.96H182.66V60.4H180.66V57ZM184.931 42.16H187.271V51.68L196.591 41.46V57H194.271V47.46L184.931 57.68V42.16ZM210.097 57L206.137 51.2L202.197 57H199.277L204.677 49.06L199.977 42.16H202.897L206.137 46.92L209.397 42.16H212.317L207.597 49.06L213.017 57H210.097ZM123.38 74.64C123.633 75.2267 123.76 75.88 123.76 76.6C123.76 77.3333 123.6 78 123.28 78.6C122.96 79.16 122.507 79.6333 121.92 80.02C120.88 80.6733 119.52 81 117.84 81H114.56V66.16H117.84C119.467 66.16 120.693 66.4667 121.52 67.08C121.973 67.4133 122.313 67.84 122.54 68.36C122.74 68.8133 122.84 69.3333 122.84 69.92C122.84 70.92 122.453 71.8267 121.68 72.64C121.893 72.7867 122.12 72.9667 122.36 73.18C122.8 73.62 123.14 74.1067 123.38 74.64ZM116.88 68.24V72.74C117.413 72.62 117.92 72.46 118.4 72.26C119.16 71.9533 119.733 71.6067 120.12 71.22C120.533 70.82 120.74 70.3867 120.74 69.92C120.74 69.6 120.687 69.3333 120.58 69.12C120.513 68.9867 120.407 68.8667 120.26 68.76C120.007 68.5733 119.633 68.4333 119.14 68.34C118.753 68.2733 118.32 68.24 117.84 68.24H116.88ZM120.78 78.26C121.38 77.8733 121.68 77.32 121.68 76.6C121.68 75.8267 121.42 75.1933 120.9 74.7C120.607 74.4067 120.227 74.16 119.76 73.96L119.46 74.08L119.14 74.22C118.78 74.3667 118.38 74.5067 117.94 74.64C117.633 74.72 117.28 74.8067 116.88 74.9V78.9H117.84C119.133 78.9 120.113 78.6867 120.78 78.26ZM130.498 81C128.978 80.8933 127.418 80.2933 125.818 79.2L127.138 77.3C128.231 78.0733 129.278 78.52 130.278 78.64C131.264 78.7733 132.111 78.58 132.818 78.06C133.324 77.6733 133.684 77.1867 133.898 76.6C134.098 76 134.111 75.4333 133.938 74.9C133.751 74.3933 133.418 73.9933 132.938 73.7C132.324 73.3267 131.491 73.14 130.438 73.14L128.458 73.16L131.018 68.46H126.758V66.16H134.938L132.278 71C132.971 71.16 133.598 71.4 134.158 71.72C135.118 72.32 135.771 73.1333 136.118 74.16C136.464 75.16 136.458 76.2067 136.098 77.3C135.711 78.38 135.084 79.2467 134.218 79.9C133.244 80.6333 132.118 81 130.838 81H130.498ZM138.935 66.16H143.335C144.215 66.16 145.002 66.32 145.695 66.64C146.215 66.88 146.662 67.2067 147.035 67.62C147.835 68.5 148.235 69.6467 148.235 71.06C148.235 72.4867 147.835 73.6333 147.035 74.5C146.675 74.9133 146.228 75.2467 145.695 75.5C145.015 75.82 144.228 75.98 143.335 75.98H141.255V81H138.935V66.16ZM145.495 73.1C145.735 72.8333 145.915 72.4933 146.035 72.08C146.115 71.76 146.155 71.42 146.155 71.06C146.155 70.7 146.115 70.3667 146.035 70.06C145.915 69.6467 145.735 69.3067 145.495 69.04C145.002 68.5067 144.282 68.24 143.335 68.24H141.255V73.88H143.335C144.295 73.88 145.015 73.62 145.495 73.1ZM157.086 81C156.086 81 155.126 80.8067 154.206 80.42C153.326 80.0467 152.539 79.5133 151.846 78.82C151.153 78.1267 150.619 77.34 150.246 76.46C149.859 75.54 149.666 74.58 149.666 73.58C149.666 72.58 149.859 71.6133 150.246 70.68C150.619 69.8267 151.153 69.04 151.846 68.32C152.526 67.64 153.313 67.1133 154.206 66.74C155.126 66.3533 156.086 66.16 157.086 66.16C158.086 66.16 159.053 66.3533 159.986 66.74C160.866 67.1267 161.653 67.6533 162.346 68.32C163.013 69.0133 163.539 69.8 163.926 70.68C164.313 71.6133 164.506 72.58 164.506 73.58C164.506 74.58 164.313 75.54 163.926 76.46C163.553 77.3533 163.026 78.14 162.346 78.82C161.626 79.5133 160.839 80.0467 159.986 80.42C159.053 80.8067 158.086 81 157.086 81ZM157.086 68.48C155.686 68.48 154.486 68.98 153.486 69.98C152.486 70.98 151.986 72.18 151.986 73.58C151.986 74.98 152.486 76.18 153.486 77.18C154.486 78.18 155.686 78.68 157.086 78.68C158.486 78.68 159.686 78.18 160.686 77.18C161.686 76.18 162.186 74.98 162.186 73.58C162.186 72.18 161.686 70.98 160.686 69.98C159.686 68.98 158.486 68.48 157.086 68.48ZM178.019 79.78C177.605 80.0467 177.205 80.26 176.819 80.42C175.885 80.8067 174.919 81 173.919 81C172.919 81 171.959 80.8067 171.039 80.42C170.159 80.0467 169.372 79.5133 168.679 78.82C167.985 78.1267 167.452 77.34 167.079 76.46C166.692 75.54 166.499 74.58 166.499 73.58C166.499 72.58 166.692 71.6133 167.079 70.68C167.465 69.7867 167.999 69 168.679 68.32C169.385 67.6133 170.172 67.0867 171.039 66.74C171.905 66.3533 172.865 66.16 173.919 66.16C174.959 66.16 175.925 66.3533 176.819 66.74L176.979 66.8L177.139 66.88V69.62C176.219 68.86 175.145 68.48 173.919 68.48C172.492 68.48 171.292 68.98 170.319 69.98C169.319 70.98 168.819 72.18 168.819 73.58C168.819 74.98 169.319 76.18 170.319 77.18C171.319 78.18 172.519 78.68 173.919 78.68C175.319 78.68 176.519 78.18 177.519 77.18C177.692 77.0067 177.859 76.82 178.019 76.62V79.78ZM179.674 81L186.474 65.5L192.834 81H190.314L186.414 71.22L182.234 81H179.674ZM201.934 76.6C201.934 75.8267 201.674 75.1933 201.154 74.7C200.861 74.4067 200.481 74.16 200.014 73.96L199.714 74.08L199.394 74.22C199.034 74.3667 198.634 74.5067 198.194 74.64C197.887 74.72 197.534 74.8067 197.134 74.9V78.9H198.094C199.387 78.9 200.367 78.6867 201.034 78.26C201.634 77.8733 201.934 77.32 201.934 76.6ZM197.134 68.16L197.154 68.18L197.134 68.24V72.74C197.667 72.62 198.174 72.46 198.654 72.26C199.974 71.6467 201.067 71.7733 201.934 72.64C202.147 72.7867 202.374 72.9667 202.614 73.18C203.054 73.62 203.394 74.1067 203.634 74.64C203.887 75.2267 204.014 75.88 204.014 76.6C204.014 77.3333 203.854 78 203.534 78.6C203.214 79.16 202.761 79.6333 202.174 80.02C201.134 80.6733 199.774 81 198.094 81H194.814V66.16H197.134V68.16ZM207.134 81H204.814V66.16H207.134V81ZM220.038 81L216.078 75.2L212.138 81H209.218L214.618 73.06L209.918 66.16H212.838L216.078 70.92L219.338 66.16H222.258L217.538 73.06L222.958 81H220.038Z",fill:"#24315E"}}),t._v(" "),n("path",{attrs:{d:"M0.5 80.5372C2.5 80.5372 3.62908 80.5372 6.8424 80.5372H29.6278",stroke:"#24315E","stroke-miterlimit":"10","stroke-width":"3"}}),t._v(" "),n("path",{attrs:{d:"M35.4703 60.124V74.6769C35.4703 77.9001 32.8413 80.5372 29.6279 80.5372",stroke:"#24315E","stroke-miterlimit":"10","stroke-width":"3"}}),t._v(" "),n("path",{attrs:{d:"M35.4702 74.6769V60.1239C35.4702 56.9008 38.0993 54.2637 41.3126 54.2637H64.098",stroke:"#24315E","stroke-miterlimit":"10","stroke-width":"3"}}),t._v(" "),n("path",{attrs:{d:"M69.9403 33.8994V48.4523C69.9403 51.6755 67.3112 54.3126 64.0979 54.3126",stroke:"#24315E","stroke-miterlimit":"10","stroke-width":"3"}}),t._v(" "),n("path",{attrs:{d:"M69.9404 48.5988V34.0459C69.9404 30.8227 72.5695 28.1856 75.7828 28.1856H99",stroke:"#24315E","stroke-miterlimit":"10","stroke-width":"3"}}),t._v(" "),n("ellipse",{attrs:{cx:"18",cy:"73",fill:"#A8D1E7",rx:"5",ry:"5"}}),t._v(" "),n("ellipse",{attrs:{cx:"52.9688",cy:"42.9752",fill:"#F76D6D",rx:"8.26446",ry:"8.26446"}}),t._v(" "),n("circle",{attrs:{cx:"85.2002",cy:"12.3967",fill:"#F8E9A0",r:"12.3967"}})])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links flex flex-row items-stretch gap-9"},[n("div",{staticClass:"link__item link__item--active flex items-center"},[n("a",{attrs:{href:"#"}},[t._v("Главная")])]),t._v(" "),n("div",{staticClass:"link__item flex items-center"},[n("a",{attrs:{href:"#"}},[t._v("Курсы")])]),t._v(" "),n("div",{staticClass:"link__item flex items-center"},[n("a",{attrs:{href:"#"}},[t._v("Контакты")])]),t._v(" "),n("div",{staticClass:"link__item flex items-center"},[n("a",{attrs:{href:"#"}},[t._v("Помощь")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header__right flex flex-row"},[n("div",{staticClass:"links flex flex-row items-stretch"},[n("div",{staticClass:"link__item link__item--profile flex items-center"},[n("a",{staticClass:"flex items-center",attrs:{href:"#"}},[t._v("Войти")])])])])}],!1,null,"63a0fb24",null);e.default=component.exports}},[[169,17,2,18]]]);