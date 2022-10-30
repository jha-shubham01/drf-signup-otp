<template>
  <VerifyOTPComponent :userId=userId />
</template>

<script>
import VerifyOTPComponent from "../components/VerifyOTP";

export default {
  name: "VerifyOTP",
  props: ["userId"],
  components: {
    VerifyOTPComponent,
  },
};
</script>
