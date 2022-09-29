<template>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Home" icon="home" is-active />
      <SidebarNavItem label="Shorts" icon="shorts" />
      <SidebarNavItem label="Subscriptions" icon="subscription" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Library" icon="library" />
      <SidebarNavItem label="History" icon="history" />
    </ul>
  </SidebarSection>
  <SidebarSection class="px-8 py-4 font-medium leading-5 border-b">
    <span class="text-sm">
      Sign in to like videos, comment and subscribe.
    </span>
    <ButtonLogin is-sidebar />
  </SidebarSection>
  <SidebarSection>
    <SidebarSectionHeading title="Best of Youtube" />
    <ul>
      <SidebarNavItemRounded
        v-for="listItem in listItems.slice(0, 8)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
      />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItemRounded
        :label="listItems[8].label"
        :icon="listItems[8].icon"
      />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <SidebarSectionHeading title="More from YouTube" />
    <ul>
      <SidebarNavItem
        v-for="listItem in listItems.slice(9, 11)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
      />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem
        v-for="listItem in listItems.slice(11, 15)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
      />
    </ul>
  </SidebarSection>
  <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <TheFooter />
  </SidebarSection>
</template>
<script>
import SidebarNavItem from "./SidebarNavItem.vue";
import ButtonLogin from "./ButtonLogin.vue";
import SidebarNavItemRounded from "./SidebarNavItemRounded.vue";
import SidebarSectionHeading from "./SidebarSectionHeading.vue";
import SidebarSection from "./SidebarSection.vue";
import TheFooter from "./TheFooter.vue";
export default {
  components: {
    SidebarNavItem,
    ButtonLogin,
    SidebarNavItemRounded,
    SidebarSectionHeading,
    SidebarSection,
    TheFooter,
  },
  data() {
    return {
      listItems: [
        { label: "Music", icon: "sidMusic" },
        { label: "Sport", icon: "sidSport" },
        { label: "Gaming", icon: "sidGaming" },
        { label: "News", icon: "sidNews" },
        { label: "Live", icon: "sidLive" },
        { label: "Fashion & beauty", icon: "sidBeauty" },
        { label: "Learning", icon: "sidLearning" },
        { label: "360&deg; Video", icon: "sidVideo" },
        { label: "Browse channels", icon: "sidPlus" },
        { label: "YouTube Premium", icon: "sidPremium" },
        { label: "Live", icon: "sidLive" },
        { label: "Settings", icon: "sidSettings" },
        { label: "Report history", icon: "sidHistory" },
        { label: "Help", icon: "sidHelp" },
        { label: "Send feedback", icon: "sidFeedback" },
      ],
    };
  },
};
</script>
