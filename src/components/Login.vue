<template>
  <page class="page">

    <ActionBar class="action-bar" title="Login"/>
    <ScrollView width="100%">
      <CardView verticalAlignment="center" padding="10" margin="4" elevation="10" shadowOffsetHeight="10" shadowOpacity="0.2" shadowRadius="50">
        <GridLayout width="100%">
          <FlexboxLayout class="m-10" justifyContent="space-between" width="100%" alignSelf="center" height="100%" flexDirection="column">
  
            <GridLayout v-show="!isEnterEmail" class="m-10" rows="auto,auto" columns="auto,*">
              <label row="0" rowSpan="2" col="0" verticalAlignment="center" textAlignment="center" class="mdi m-10" fontSize="25%" :text="'mdi-phone' | fonticon"></label>
              <label row="0" col="1" class="h3 font-weight-bold text-mute" text="Contact numbers"></label>
              <TextField row="1" col="1" :isEnabled="!isEnterEmail" keyboardType="number" returnKeyType="next" v-model="user.numbers" autocorrect="true"></TextField>
            </GridLayout>
  
            <GridLayout v-show="isEnterEmail" class="m-10" rows="auto,auto" columns="auto,*">
              <label row="0" rowSpan="2" col="0" verticalAlignment="center" textAlignment="center" class="mdi m-10" fontSize="25%" :text="'mdi-email' | fonticon"></label>
              <label row="0" col="1" class="h3 font-weight-bold text-mute" text="Email"></label>
              <TextField row="1" col="1" :isEnabled="isEnterEmail" keyboardType="email" returnKeyType="next" v-model="user.email" autocorrect="true" autocapitalizationType="none" :class="{ 'light hidden': isEnterEmail}" :hidden="!isEnterEmail"></TextField>
            </GridLayout>
  
            <GridLayout class="m-10" rows="auto,auto" columns="auto,*">
              <label row="0" rowSpan="2" col="0" verticalAlignment="center" textAlignment="center" class="mdi m-10" fontSize="25%" :text="'mdi-lock' | fonticon"></label>
              <label row="0" col="1" class="h3 font-weight-bold text-mute" text="Password"></label>
              <TextField row="1" col="1" ref="password" secure="true" returnKeyType="done" v-model="user.password" @returnPress="submit()" :class="{ light: !isLoading }"></TextField>
            </GridLayout>
  
            <ActivityIndicator :busy="isLoading"></ActivityIndicator>
  
            <StackLayout v-show="!isLoading">
              <Button text="Login" :isEnabled="!isLoading" class="submit-button" @tap="submit()"></Button>
            </StackLayout>
          </FlexboxLayout>
        </GridLayout>
      </CardView>
    </ScrollView>
  
  </page>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      isEnterEmail: false,
      user: {
        numbers: "",
        password: "",
        email: ""
      }
    };
  },
  mounted() {
    this.pageLoaded();
  },
  created() {
    this.pageLoaded();
  },
  beforeDestroy() {
    this.isLoading = false;
  },
  Destroy() {
    this.isLoading = false;
  },
  methods: {
    pageLoaded() {},
    submit() {
      this.isLoading = true;
      alert("Login me in");
    }
  }
};
</script>

<style>
</style>