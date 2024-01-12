<div class="bg-black z-[-3] h-[500px] lg:h-[750px] w-full overflow-clip flex relative">
  <div class="z-[-2] [perspective:2000px] overflow-clip w-full h-full absolute">
    <div
      class="bg-[url('$lib/assets/architect.svg')] overflow-clip opacity-[45%] bg-[size:100px] bg-center bg-repeat h-[max((150vw,150vh,1414px)] lg:h-[max(250vw,250vh,1768px)] w-[max(150vw,150vh,1414px)] lg:w-[max(150vw,150vh,1768px)] absolute left-[-5000px] right-[-5000px] top-[-5000px] bottom-[-5000px] [transform:rotateZ(37deg)] m-auto motion-safe:animate-slide1"
    ></div>
    <div
      class="bg-[url('$lib/assets/architect.svg')] overflow-clip opacity-[30%] bg-[size:141px] bg-center bg-repeat h-[max(150vw,150vh,1414px)] lg:h-[max(250vw,250vh,1768px)] w-[max(150vw,150vh,1414px)] lg:w-[max(150vw,150vh,1768px)] absolute left-[-5000px] right-[-5000px] top-[-5000px] bottom-[-5000px] [transform:rotateZ(30deg)] m-auto motion-safe:animate-slide2"
    ></div>
    <div
      class="bg-[url('$lib/assets/architect.svg')] overflow-clip opacity-[37.5%] bg-[size:120px] bg-center bg-repeat h-[max((150vw,150vh,1414px)] lg:h-[max(250vw,250vh,1768px)] w-[max(150vw,150vh,1414px)] lg:w-[max(150vw,150vh,1768px)] absolute left-[-5000px] right-[-5000px] top-[-5000px] bottom-[-5000px] [transform:rotateZ(45deg)] m-auto motion-safe:animate-slide3"
    ></div>
  </div>
  <div
    class="grid m-auto pl-[env(safe-area-inset-left,20px)] pr-[env(safe-area-inset-right)] max-w-3xl auto-rows-min gap-8 text-white"
  >
    <h2 class="text-5xl md:text-8xl font-bold flex m-auto p-2 text-center lowercase">
      <slot name="title" />
    </h2>
    <div class="text-sm md:text-lg font-light grid gap-8 m-auto p-2 text-center">
      <slot name="content" />
    </div>
  </div>
</div>
