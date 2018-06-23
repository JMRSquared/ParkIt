<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
        <Button class="btn btn-primary" @tap="$router.push('/gate/open')">Go to Open Gate</Button>

        <Button class="btn btn-primary" @tap="$router.push('/login')">Login</Button>
        <Button class="btn btn-primary" @tap="$router.push('/parked')">Parked</Button>
    </StackLayout>
  </Page>
</template>
