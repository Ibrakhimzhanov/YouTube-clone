<template>
  <aside
    class="hidden xl:block w-64 max-h-screen bg-white overflow-auto fixed top-0 pt-12 z-20"
  >
    <section class="py-2 border-b">
      <ul>
        <SideBarNavItem label="Home" icon="home" is-active />
        <SideBarNavItem label="Shorts" icon="shorts" />
        <SideBarNavItem label="Subscriptions" icon="subscription" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SideBarNavItem label="Library" icon="library" />
        <SideBarNavItem label="History" icon="history" />
      </ul>
    </section>
    <section class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment and subscribe.
      </span>
      <ButtonLogin is-sidebar />
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        Best of YouTube
      </div>
      <ul>
        <SideBarNavItemRounded
          v-for="listItem in listItems.slice(0, 8)"
          :key="listItem.label"
          :label="listItem.label"
          :icon="listItem.icon"
        />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SideBarNavItemRounded
          :label="listItems[8].label"
          :icon="listItems[8].icon"
        />
      </ul>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        More from YouTube
      </div>
      <ul>
        <SideBarNavItem
          v-for="listItem in listItems.slice(9, 11)"
          :key="listItem.label"
          :label="listItem.label"
          :icon="listItem.icon"
        />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SideBarNavItem
          v-for="listItem in listItems.slice(11, 15)"
          :key="listItem.label"
          :label="listItem.label"
          :icon="listItem.icon"
        />
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
</template>
<script>
import SideBarNavItem from "./SideBarNavItem.vue";
import ButtonLogin from "./ButtonLogin.vue";
import SideBarNavItemRounded from "./SideBarNavItemRounded.vue";
import SideBarNavItem1 from "./SideBarNavItem.vue";
export default {
  components: {
    SideBarNavItem,
    ButtonLogin,
    SideBarNavItemRounded,
    SideBarNavItem1,
  },
  data() {
    return {
      listItems: [
        {
          label: "Music",
          icon: "sidMusic",
        },
        {
          label: "Sport",
          icon: "sidSport",
        },
        {
          label: "Gaming",
          icon: "sidGaming",
        },
        {
          label: "News",
          icon: "sidNews",
        },
        {
          label: "Live",
          icon: "sidLive",
        },
        {
          label: "Fashion & beauty",
          icon: "sidBeauty",
        },
        {
          label: "Learning",
          icon: "sidLearning",
        },
        {
          label: "360&deg; Video",
          icon: "sidVideo",
        },
        {
          label: "Browse channels",
          icon: "sidPlus",
        },
        {
          label: "YouTube Premium",
          icon: "sidPremium",
        },
        {
          label: "Live",
          icon: "sidLive",
        },
        {
          label: "Settings",
          icon: "sidSettings",
        },
        {
          label: "Report history",
          icon: "sidHistory",
        },
        {
          label: "Help",
          icon: "sidHelp",
        },
        {
          label: "Send feedback",
          icon: "sidFeedback",
        },
      ],
    };
  },
};
</script>
