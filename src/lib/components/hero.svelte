<div class="absolute inset-0 flex min-h-screen items-center overflow-clip">
  <div class="m-auto grid max-w-3xl auto-rows-min gap-8 text-white">
    <h2 class="m-auto flex p-2 text-center text-5xl font-bold lowercase md:text-8xl">
      <slot name="title" />
    </h2>
    <div class="m-auto grid gap-8 p-2 text-center text-sm font-light md:text-lg">
      <slot name="content" />
    </div>
  </div>
</div>
