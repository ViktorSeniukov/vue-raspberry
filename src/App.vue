<script lang="js">
  import UiHeader from "@/components/UiHeader/UiHeader.vue";
  import HomePage from "@/components/HomePage/HomePage.vue";
  import PostPage from "@/components/PostPage/PostPage.vue";
  import NotFoundPage from "@/components/NotFoundPage/NotFoundPage.vue";
  import UiNavLink from "@/components/UiNavLink/UiNavLink.vue";
  import UiMainNav from "@/components/UiMainNav/UiMainNav.vue";

  const routes = {
    '/': HomePage,
    '/posts': PostPage
  }

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Posts', path: '/posts' },
  ]

  export default {
    components: {
      UiMainNav,
      UiNavLink,
      UiHeader
    },
    data() {
      return {
        currentPath: window.location.hash,
        pages,
      }
    },
    computed: {
      currentView() {
        return routes[this.currentPath.slice(1) || '/'] || NotFoundPage
      },
    },
    mounted() {
      window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash
      })
    }
  }
</script>

<template>
    <div>
        <header>
            <UiHeader
                logo-name="Rasberry"
            >
              <template #navigation>
                <UiMainNav>
                  <template #nav-bar>
                      <UiNavLink
                        v-for="page in pages"
                        :href="`#${page.path}`"
                        :link-text="page.name"
                      />
                  </template>
                </UiMainNav>
              </template>
            </UiHeader>
        </header>

        <main>
          <component :is="currentView" />
        </main>
    </div>
</template>

<style scoped>
</style>
