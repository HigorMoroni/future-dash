<script setup>
const { openInPopup, loggedIn } = useUserSession();

watch(loggedIn, (newLoggedIn) => newLoggedIn && navigateTo('/'), { immediate: true });
</script>

<template>
  <section class="flex flex-col w-10/12 max-w-md m-auto text-sm">
    <h1 class="font-bold text-4xl text-title">Entrar</h1>
    <p class="text-secondary-gray-600 font-light mt-2 text-base">Use seu email e senha para entrar</p>
    <button class="flex justify-center gap-2 mt-6 py-4 text-title bg-google-button-background rounded-2xl cursor-pointer" @click="openInPopup('/auth/google')">
      <Icon name="devicon:google" size="1.5rem" />
      Entrar com o Google
    </button>
    <div class="flex items-center justify-center mt-6">
      <hr class="border-t border-secondary-gray-500 w-full">
      <span class="px-4 text-secondary-gray-600">ou</span>
      <hr class="border-t border-secondary-gray-500 w-full">
    </div>
    <div class="mt-6 flex flex-col gap-3">
      <label for="email" class="text-title font-medium">Email<span class="text-primary-purple-blue-500">*</span></label>
      <input
        id="email"
        type="text"
        placeholder="email@exemplo.com"
        class="border border-secondary-gray-500 px-6 py-4 text-gray-600 rounded-2xl"
      >
    </div>
    <div class="mt-6 flex flex-col gap-3">
      <label for="password" class="text-title font-medium">Senha<span class="text-primary-purple-blue-500">*</span></label>
      <input
        id="password"
        type="password"
        placeholder="********"
        class="border border-secondary-gray-500 px-6 py-4 text-gray-600 rounded-2xl"
      >
    </div>
    <div class="mt-6 flex justify-between">
      <div>
        <label for="keep-logged" class="grid grid-flow-col gap-2 select-none text-title">
          <div class="grid items-center justify-center">
            <input id="keep-logged" type="checkbox" class="peer col-start-1 row-start-1 h-5 w-5 appearance-none rounded border border-secondary-gray-500 ring-transparent checked:border-primary-purple-blue-500 checked:bg-primary-purple-blue-500">
            <Icon name="ion:checkmark" size="1.35em" class="invisible peer-checked:visible col-start-1 row-start-1 text-white" />
          </div>
          Me manter logado
        </label>
      </div>
      <a href="" class="text-primary-purple-blue-500">Esqueceu sua senha?</a>
    </div>
    <button class="mt-6 py-4 text-white font-bold bg-primary-purple-blue-500 rounded-2xl cursor-pointer">Entrar</button>
    <span class="mt-6 text-title">Não tem cadastro? <a href="" class="text-primary-purple-blue-500 font-bold">Criar uma conta</a></span>
  </section>
</template>

