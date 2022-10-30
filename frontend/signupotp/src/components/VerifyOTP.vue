<template>
  <v-container>
    <v-row class="mb-3 mt-5">
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-card ref="form" lazy-validation class="text-center">
          <v-card-title>
            OTP Verification
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="otp"
              :counter="4"
              :rules="otpRules"
              label="OTP"
              outlined
              required
            ></v-text-field>
  
            <v-btn color="secondary" class="mr-4" @click="regenerate_otp">Regenerate OTP</v-btn>
            <v-btn
              color="success"
              :disabled="!otp"
              @click="verify_otp"
            >
              Verify OTP
            </v-btn>
          </v-card-text>
        </v-card>
        </v-col>
        <v-col cols="4"></v-col>
      </v-row>
  </v-container>
</template>
  
  <script>
  import axios from "axios";
  export default {
    props: ["userId"],
    data: () => ({
      otp: "",
      otpRules: [
        (v) => !!v || "OTP is required",
        (v) => (v && v.length <= 4) || "OTP must be less than 5 characters"
      ],
      url: "http://127.0.0.1:8000/user/",
    }),
    methods: {
      regenerate_otp() {
        var url = this.url + this.userId + "/regenerate_otp/"
        axios.patch(url).then((response) => {
          console.log(response);
          alert(response.data);
        }).catch(error => {
          console.log(error.response.data);
          alert(error.response.data);
        });
      },
      verify_otp() {
        var data = {
          otp: this.otp
        };
        var url = this.url + this.userId + "/verify_otp/"
        axios.patch(url, data).then((response) => {
          console.log(response);
        }).catch(error => {
          console.log(error.response.data);
          alert(error.response.data);
          this.otp = "";
        });
      },
    },
  };
  </script>