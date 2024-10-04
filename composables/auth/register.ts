import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";
const credential = {
  bvn: ref(""),
  phone: ref(""),
};

export const use_auth_register = () => {
  const loading = ref(false);
  const router = useRouter();
  const { showToast } = useCustomToast();

  const register = async () => {
    loading.value = true;

    const payload = {
      bvn: credential.bvn.value,
      phoneNumber: credential.phone.value,
    };

    try {
      const res = (await auth_api.$_register(payload)) as any;

      loading.value = false;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: res.data.message,
          toastType: "success",
          duration: 3000,
        });
        router.push(`/verify-account?userId=${res.data.data.userId}`);
      } else {
        console.log(res.data, 'error here')
        showToast({
          title: "Error",
          message: res.data.message,
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      loading.value = false;
      showToast({
        title: "Error",
        message: "Registration failed. Please try again.",
        toastType: "error",
        duration: 3000,
      });
    }
  };

  const isFormDisabled = computed(() => {
    const phoneValid = credential.phone.value && credential.phone.value.length === 11;
    const bvnValid = credential.bvn.value && credential.bvn.value.length === 11;
    return loading.value || !bvnValid || !phoneValid;
  });
  

  return { credential, register, loading, isFormDisabled };
};
