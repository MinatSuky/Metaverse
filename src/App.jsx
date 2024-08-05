import './App.css'

import img from "../src/IMG/virtual 2.jpeg"
import img1 from "../src/IMG/Ellipse 1.png"
import img2 from "../src/IMG/poople.jpeg"
import img3 from "../src/IMG/premium_photo-1671656349322-41de944d259b.jpg"
import img4 from "../src/IMG/lenea.png"
import img5 from "../src/IMG/virtual.jpeg"
import img6 from "../src/IMG/Ellipse 2.png"
import img7 from "../src/IMG/vertical 3.png"
import img8 from "../src/IMG/about-img1.webp"
import img9 from "../src/IMG/linea 2.png"
import img10 from "../src/IMG/Group 53.png"



function App() {
  return (
    <div className="PADRE">
      {/* SECCION 1 */}
      <section className='seccion1 mx-28 flex justify-between items-center '>
        <div className='flex items-center gap-5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 32 32"><path fill="#1D51FE" d="M23.282 9.01c-2.34-.12-4.42.88-5.78 2.53c0 0-1.53 1.98-1.53 1.97c0 0-1.93 2.53-1.92 2.53l-1.66 2.18l-.13.17c-.95 1.27-2.63 1.98-4.4 1.46a3.923 3.923 0 0 1-2.69-2.88a3.985 3.985 0 0 1 3.87-4.9c1.21 0 2.11.51 2.73 1.05c.66.58 1.67.49 2.21-.21c.47-.61.41-1.49-.15-2.01c-3.16-2.9-9.14-2.24-11.05 1.79c-2.48 5.23 1.3 10.39 6.26 10.39c2.18 0 4.13-.97 5.42-2.53l.43-.56s1.09-1.43 1.09-1.42c0 0 1.93-2.53 1.92-2.53l1.69-2.21l.12-.15c.87-1.18 2.37-1.85 4.02-1.53c1.46.29 2.67 1.43 3.03 2.88c.66 2.63-1.32 5-3.85 5c-1.19 0-2.09-.51-2.71-1.06a1.52 1.52 0 0 0-2.21.22c-.49.64-.4 1.53.2 2.07c.93.83 2.52 1.84 4.72 1.84c4.2 0 7.55-3.69 6.98-8c-.44-3.32-3.28-5.92-6.61-6.09" /></svg>
          <p className='font text-3xl text-[#1D51FE] titulo'>metaverse</p>
        </div>
        <img className='absolute w-[50%]' src={img1} alt="ellipse" />      {/*  IMG FONDO */}
        <div className='BARRALATERAL1 z-30'>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button"><svg className='border border-blue-800 rounded' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#1D51FE" d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" /></svg></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li className='text-xl'><a>Home</a></li>
                <li className='text-xl'><a>Community</a></li>
                <li className='text-xl'><a>Features</a></li>
                <li><button className='text-lg shadow-lg bg-[#1D51FE] mt-5 px-6 py-3 rounded text-white white-space font2'>Sign Up</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex items-center BARRALATERAL'>
          <p className='flex gap-10 mr-20 nav'>
            <span className='text-xl text-white rallita hover:text-[#1D51FE] duration-200 font2 cursor-pointer'>Home</span>
            <span className='text-xl text-white rallita hover:text-[#1D51FE] duration-200 font2 cursor-pointer'>Community</span>
            <span className='text-xl text-white rallita hover:text-[#1D51FE] duration-200 font2 cursor-pointer'>Features</span>
          </p>
          <button className='text-lg bg-[#1D51FE] px-6 py-3 rounded text-white white-space font2'>Sign Up</button>
        </div>
      </section>
      {/* SECCION 2 */}
      <section className='seccion2 mx-40 flex justify-between mt-40'>
        <div className=' z-10'>
          <div>
            <p className='font TextResponsi text-white'>Let´s Expore</p>
            <p className='font TextResponsi text-white white-space'>Three-Dimensional</p>
            <p className='font TextResponsi text-white'>Visual</p>
          </div>
          <p className='mt-10 font2 text-white font-light text-xl'>
            with virtual technology you can see tle digital world <br />
            feel more real and you can play the game with a new <br />
            style
          </p>
          <div className="flex gap-5 w-full mt-10">
            <button className='text-lg bg-[#1D51FE] px-6 py-3 rounded text-white font-semibold white-space'>Get it Now</button>
            <div className='relative w-full'>
              <div className="avatar w-14">
                <div className="w-24 rounded-full ">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar w-14 absolute left-10">
                <div className="w-24 rounded-full ">
                  <img src={img2} />
                </div>
              </div>
              <div className="avatar w-14 absolute left-20">
                <div className="w-24 rounded-full ">
                  <img src={img3} />
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-5 mt-10 ml-3'>
            <p>
              <p className='text-center font3 font-medium text-xl text-white'>330k+</p>
              <p className='font-light'>People conected</p>
            </p>
            <img src={img4} alt="linea" />
            <p>
              <p className='text-center font3 font-medium text-xl text-white'>5500+</p>
              <p className='font-light'>Assets to Buy</p>
            </p>
          </div>
        </div>
        <div className='w-[55%] flex justify-end items-center contenedorImagnesPrincipales'>
          <div className='flex justify-end items-center gap-3 imagesPincicpales'>
            <img className='radioimagen1 w-[45%] z-10 img' src={img} alt="" />
            <img className='radioimagen2 w-[45%] img' src={img5} alt="" />
          </div>
        </div>
      </section>
      {/* SECCION 3 */}
      <div className='relative'>
        <img className='absolute w-[18%] right-0' src={img6} alt="ellipse" />      {/*  IMG FONDO */}
        <section className='flex mt-56 mx-56 seccion3'>
          <div>
            <div className="flex justify-around contendor">
              <div className='w-full mr-20'>
                <div className='flex items-center gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16"><path fill="#1D51FE" d="M12.25 11.75a3.728 3.728 0 0 1-2.652-1.098L8 9.054l-1.598 1.598c-.708.708-1.65 1.098-2.652 1.098s-1.944-.39-2.652-1.098C.39 9.944 0 9.002 0 8s.39-1.943 1.098-2.652C1.806 4.64 2.748 4.25 3.75 4.25s1.943.39 2.652 1.098L8 6.946l1.598-1.598c.708-.708 1.65-1.098 2.652-1.098s1.944.39 2.652 1.098C15.61 6.056 16 6.998 16 8s-.39 1.943-1.098 2.652a3.726 3.726 0 0 1-2.652 1.098m-1.598-2.152c.427.427.994.662 1.598.662s1.171-.235 1.598-.662c.427-.427.662-.994.662-1.598s-.235-1.171-.662-1.598c-.427-.427-.994-.662-1.598-.662s-1.171.235-1.598.662L9.054 8zM3.75 5.74c-.604 0-1.171.235-1.598.662S1.49 7.396 1.49 8c0 .604.235 1.171.662 1.598s.994.662 1.598.662c.604 0 1.171-.235 1.598-.662L6.946 8L5.348 6.402A2.244 2.244 0 0 0 3.75 5.74" /></svg>
                  <p className='font text-3xl text-white texto2'>Metaverse</p>
                </div>
                <p className='text-2xl font-light '>
                  With virtual technology you
                  can see the digital
                </p>
              </div>
              <div className='w-full'>
                <div className='flex items-center gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#1D51FE" d="m15 9l-3-9l-3 9l-9 3l9 3l3 9l3-9l9-3zM4 12l6-2l1 2zm8 8l-2-6l2-1zm0-16l2 6l-2 1zm2 10l-1-2h7zm-5.3 3.3L5 19l1.7-3.7l1.6.5zm8.6-2L19 19l-3.7-1.7l.5-1.6zM6.7 8.7L5 5l3.7 1.7l-.5 1.5zm8.6-2L19 5l-1.7 3.7l-1.6-.5z" /></svg>
                  <p className='font text-3xl text-white texto2'>Make Your Path</p>
                </div>
                <p className='text-2xl font-light '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex justify-around mt-10 contendor">
              <div className='w-full mr-20'>
                <div className='flex items-center gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 256 256"><g fill="#1D51FE" fill-rule="evenodd"><path d="M47.895 88.097c.001-4.416 3.064-9.837 6.854-12.117l66.257-39.858c3.785-2.277 9.915-2.277 13.707.008l66.28 39.934c3.786 2.28 6.853 7.703 6.852 12.138l-.028 79.603c-.001 4.423-3.069 9.865-6.848 12.154l-66.4 40.205c-3.781 2.29-9.903 2.289-13.69-.01l-66.167-40.185c-3.78-2.295-6.842-7.733-6.84-12.151zm13.936-6.474l65.834 36.759l62.766-36.278l-62.872-36.918L61.83 81.623zM57.585 93.52c0 1.628-1.065 71.86-1.065 71.86c-.034 2.206 1.467 4.917 3.367 6.064l61.612 37.182l.567-77.413s-64.48-39.322-64.48-37.693zm76.107 114.938l60.912-38.66c2.332-1.48 4.223-4.915 4.223-7.679V93.125l-65.135 37.513z" /><path d="M77.76 132.287c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526m32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526m-32 16c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526m32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526m78.238-78.052c-4.783-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.623 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526m-16.238 29c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526m-17 28c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526M128.5 69c-6.351 0-11.5 4.925-11.5 11s5.149 11 11.5 11S140 86.075 140 80s-5.149-11-11.5-11" /></g></svg>
                  <p className='font text-3xl text-white texto2'>The Fun Part</p>
                </div>
                <p className='text-2xl  font-light '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className='w-full'>
                <div className='flex items-center gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="none" stroke="#1D51FE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.684 3.603c.521-.659.03-1.603-.836-1.603h-6.716a1.06 1.06 0 0 0-.909.502l-5.082 8.456c-.401.666.103 1.497.908 1.497h3.429l-3.23 8.065c-.467 1.02.795 1.953 1.643 1.215L20 9.331h-6.849z" /></svg>
                  <p className='font text-3xl text-white texto2'>Lighting Fast</p>
                </div>
                <p className='text-2xl  font-light'>
                  With virtual technology you <br />
                  can see the digital
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* SECCION 4 */}
      <section className='seccion4'>
        <div className='mx-10 conteiner4 flex justify-center items-center mt-40 relative'>
          <img className='w-[70%] imges' src={img7} alt="" />
          <div className='absolute flex flex-col gap-4 text-center opacity-90'>
            <p className='text-black text-8xl fontexto font-semibold font'>EXPERIENCE</p>
            <p className='text-white text-8xl fontexto font-semibold font'>YOU HAVE NEVER</p>
            <p className='text-white text-8xl fontexto font-semibold font'><span className='text-black mr-1'>FELT</span>BEFORE</p>
          </div>
        </div>
        <div className="flex gap-10 conteiner4-1 mt-20">
          <div className='w-[40%] cont4'>
            <div className='flex justify-center'>
              <img alt="" class="bg lm nu c" width="700" height="394" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*manwrxqrCE-VIIcLVkhk_A.gif" />
            </div>
            <div className='mx-14 mt-10'>
              <p className='font font-bold text-white text-3xl'>Join communities</p>
              <p className='mt-6 text-2xl font font-medium'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from It is a long established fact that a reader will be distracted by</p>
            </div>
          </div>
          <div className='w-[50%] cont4'>
            <p className='mt-6 text-2xl font font-medium'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
            </p>
            <div className='flex justify-center mt-5'>
              <img alt="" className="bg lm nu c" width="940" height="400" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:540/1*iZm0gRc-YK-mEaSh6m-ceQ.gif" />
            </div>
          </div>
        </div>
      </section>
      {/* SECCION 5 */}
      <section className='mt-40 bg-[#0a0a0a]'>
        <div className="flex conteiner5">
          <div className='w-[50%] cont5 flex justify-center items-center'>
            <img className='w-[70%]' src={img8} alt="figureRefularVioleta" />
          </div>
          <div className='w-[40%] cont5'>
            <p className='font text-3xl text-zinc-200 mt-10'>Explore Metaverse <br /> Even More</p>
            <p className='mt-8 font font-normal'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or that andomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,.
            </p>
            <div className="flex mt-20">
              <div className='w-[50%]'>
                <p className='text-zinc-200 font'>Join Now</p>
                <p className='mt-5'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                </p>
                <p className="mt-5 flex items-center gap-3 text-blue-700 font-semibold white-space cursor-pointer">
                  Explore Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32"><path fill="#1D51FE" d="m21.188 9.28l-1.407 1.44L24.063 15H4v2h20.063l-4.282 4.28l1.407 1.44l6-6l.72-.72l-.72-.72z" /></svg>
                </p>
              </div>
              <img className='mx-14 liena2' src={img9} alt="linea2" />
              <div className='w-[50%]'>
                <p className='text-zinc-200 font'>Own Your Space</p>
                <p className='mt-5'>
                  There are many variations of passages of Lorem and some of the random text material will be Ipsum of the available.
                </p>
                <p className="mt-5 flex items-center gap-3 text-blue-700 font-semibold cursor-pointer">
                  Explore Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32"><path fill="#1D51FE" d="m21.188 9.28l-1.407 1.44L24.063 15H4v2h20.063l-4.282 4.28l1.407 1.44l6-6l.72-.72l-.72-.72z" /></svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECCION 6 */}
      <section>
        <div className="container6 mx-36 mt-20 flex rounded-3xl bg-zinc-900 justify-center ">  
          <div className='w-[50%] cont6 flex items-center gap-5 mx-14 mt-3 z-20 py-10'>
            <img className='rounded-full w-[20%] avatar2' src={img2} alt="avatar" />
            <div>
              <p className='font text-xl text-white texto6'>Mordern and Traditional <br /> Costume</p>
              <p className="mt-5 text-lg texto6 flex items-center gap-1 text-blue-700 font-semibold cursor-pointer">
                Explore Now
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32"><path fill="#1D51FE" d="m21.188 9.28l-1.407 1.44L24.063 15H4v2h20.063l-4.282 4.28l1.407 1.44l6-6l.72-.72l-.72-.72z" /></svg>
              </p>
            </div>
          </div>
          <div className='w-[50%] cont6 flex items-center gap-5 mx-14 z-20'>
            <img className='rounded-full w-[20%] avatar2' src={img3} alt="avatar" />
            <div>
              <p className='font text-xl text-white texto6'>Join Over 300+ Groups <br /> Communities</p>
              <p className="mt-5 text-lg flex items-center gap-1 texto6 text-blue-700 font-semibold cursor-pointer">
                Explore Now
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32"><path fill="#1D51FE" d="m21.188 9.28l-1.407 1.44L24.063 15H4v2h20.063l-4.282 4.28l1.407 1.44l6-6l.72-.72l-.72-.72z" /></svg>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECCION 7 */}
      <section>
        <div className='container7 mx-40 mt-40 flex justify-between'>
          <div>
            <button className='text-lg bg-[#1D51FE] px-6 py-2 rounded-full text-white font-semibold white-space'>Metaverse</button>
            <p className='text-7xl text-white texto7'>space for</p>
            <p className='mt-5 text-8xl font-bold text-white texto7-1'>Everyone.</p>
          </div>
          <div className='flex flex-col justify-evenly'>
            <div className="flex gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 24 24"><path fill="#1D51FE" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l1.68 4.06l-4.06 1.68l-1.68 4.06L12 20.12L7.94 21.8l-1.68-4.06z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="80" viewBox="0 0 16 16"><path fill="#34A2DF" d="m15.9 5.7l-2-3.4L10 4.5V0H6v4.5L2 2.3L0 5.7L3.9 8L0 10.3l2 3.4l4-2.2V16h4v-4.5l3.9 2.2l2-3.4l-4-2.3z" /></svg>
            </div>
            <p className='text-4xl text-white font-semibold'>We will Rock You</p>
            <p className='mt-3 text-xl'>loren ipsum text</p>
          </div>
        </div>
      </section>
      {/* SECCION footer */}
      <section>
        <footer className="footer bg-[#1D51FE] text-base-content p-10 mt-16">
          <nav>
            <h6 className="footer-title text-white">  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 32 32"><path fill="white" d="M23.282 9.01c-2.34-.12-4.42.88-5.78 2.53c0 0-1.53 1.98-1.53 1.97c0 0-1.93 2.53-1.92 2.53l-1.66 2.18l-.13.17c-.95 1.27-2.63 1.98-4.4 1.46a3.923 3.923 0 0 1-2.69-2.88a3.985 3.985 0 0 1 3.87-4.9c1.21 0 2.11.51 2.73 1.05c.66.58 1.67.49 2.21-.21c.47-.61.41-1.49-.15-2.01c-3.16-2.9-9.14-2.24-11.05 1.79c-2.48 5.23 1.3 10.39 6.26 10.39c2.18 0 4.13-.97 5.42-2.53l.43-.56s1.09-1.43 1.09-1.42c0 0 1.93-2.53 1.92-2.53l1.69-2.21l.12-.15c.87-1.18 2.37-1.85 4.02-1.53c1.46.29 2.67 1.43 3.03 2.88c.66 2.63-1.32 5-3.85 5c-1.19 0-2.09-.51-2.71-1.06a1.52 1.52 0 0 0-2.21.22c-.49.64-.4 1.53.2 2.07c.93.83 2.52 1.84 4.72 1.84c4.2 0 7.55-3.69 6.98-8c-.44-3.32-3.28-5.92-6.61-6.09" /></svg></h6>
            <p><p className='font text-xl text-white titulo'>metaverse <span className='font-normal text-lg'> is a variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, <br /> by injected humour, or randomised words.</span></p></p>
            <div className="flex gap-5 mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 896 1664"><path fill="#ffffff" d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="#ffffff" d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0a8 8 0 0 0-.412-.833a.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02a.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595a.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085a8 8 0 0 1-1.249.594a.05.05 0 0 0-.03.03a.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019a13.2 13.2 0 0 0 4.001-2.02a.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613c0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613c0 .888-.631 1.612-1.438 1.612"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ffffff" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </div>

          </nav>
          <nav>
            <h6 className="footer-title text-white">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title text-white">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item" />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer> 
      </section>
    </div>
  )
}

export default App
