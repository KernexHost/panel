<template>
  <header
    id="header"
    class="p-8 overflow-y-hidden w-full h-20 flex justify-between items-center gap-8 text-white text-xl transition-colors duration-200"
  >
    <div class="flex items-center">
      <img src="/logo.png" alt="Logo" class="h-16" />
      <p class="text-2xl font-semibold">Kernex Hosting</p>
    </div>
    <div class="flex items-center gap-4">
      <div>Theme</div>
      <div>Language</div>
      <div class="flex flex-col items-center">
        <p>Vorname + Name</p>
        <div class="flex gap-2">
          <p>Balance</p>
          <p>-></p>
        </div>
      </div>
    </div>
  </header>
</template>
