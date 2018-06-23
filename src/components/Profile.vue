<template>
  <Page class="page">
    <ActionBar class="action-bar" title="You are now parked" />
  
    <StackLayout>
      <GridLayout rows="*" columns="*">
        <MapView latitude="{{ latitude }}" longitude="{{ longitude }}" mapAnimationsEnabled="{{ mapAnimationsEnabled }}" zoom="{{ zoom }}" bearing="{{ bearing }}" tilt="{{ tilt }}" padding="{{ padding }}" mapReady="onMapReady" markerSelect="onMarkerSelect"
          markerBeginDragging="onMarkerBeginDragging" markerEndDragging="onMarkerEndDragging" markerDrag="onMarkerDrag" cameraChanged="onCameraChanged" />
     </GridLayout>
    </StackLayout>
  </Page>
</template>
